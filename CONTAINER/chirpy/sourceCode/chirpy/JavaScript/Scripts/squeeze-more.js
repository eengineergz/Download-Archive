var jsp = require("./parse-js"),
  pro = require("./process"),
  slice = jsp.slice,
  member = jsp.member,
  curry = jsp.curry,
  MAP = pro.MAP,
  PRECEDENCE = jsp.PRECEDENCE,
  OPERATORS = jsp.OPERATORS;

function ast_squeeze_more(ast) {
  var w = pro.ast_walker(),
    walk = w.walk,
    scope;
  function with_scope(s, cont) {
    var save = scope,
      ret;
    scope = s;
    ret = cont();
    scope = save;
    return ret;
  }
  function _lambda(name, args, body) {
    return [
      this[0],
      name,
      args,
      with_scope(body.scope, curry(MAP, body, walk)),
    ];
  }
  return w.with_walkers(
    {
      toplevel: function (body) {
        return [this[0], with_scope(this.scope, curry(MAP, body, walk))];
      },
      function: _lambda,
      defun: _lambda,
      new: function (ctor, args) {
        if (ctor[0] == "name" && ctor[1] == "Array" && !scope.has("Array")) {
          if (args.length != 1) {
            return ["array", args];
          } else {
            return walk(["call", ["name", "Array"], args]);
          }
        }
      },
      call: function (expr, args) {
        if (expr[0] == "dot" && expr[2] == "toString" && args.length == 0) {
          // foo.toString()  ==>  foo+""
          return ["binary", "+", expr[1], ["string", ""]];
        }
        if (
          expr[0] == "name" &&
          expr[1] == "Array" &&
          args.length != 1 &&
          !scope.has("Array")
        ) {
          return ["array", args];
        }
      },
    },
    function () {
      return walk(pro.ast_add_scope(ast));
    }
  );
}

exports.ast_squeeze_more = ast_squeeze_more;
