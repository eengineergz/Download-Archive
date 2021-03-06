!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    var r,
      i,
      o = (n = n || he).createElement("script");
    if (((o.text = e), t))
      for (r in pe)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function r(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? oe[se.call(e)] || "object"
      : typeof e;
  }
  function i(e) {
    var t = !!e && "length" in e && e.length,
      n = r(e);
    return (
      !de(e) &&
      !fe(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function s(e, t, n) {
    return de(t)
      ? me.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? me.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? me.grep(e, function (e) {
          return ie.call(t, e) > -1 !== n;
        })
      : me.filter(t, e, n);
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function c(e) {
    return e;
  }
  function u(e) {
    throw e;
  }
  function l(e, t, n, r) {
    var i;
    try {
      e && de((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && de((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function d() {
    he.removeEventListener("DOMContentLoaded", d),
      e.removeEventListener("load", d),
      me.ready();
  }
  function f(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(Me, "ms-").replace(Ae, f);
  }
  function p() {
    this.expando = me.expando + p.uid++;
  }
  function m(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Le, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : Fe.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (e) {}
        Pe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function w(e, t, n, r) {
    var i,
      o,
      s = 20,
      a = r
        ? function () {
            return r.cur();
          }
        : function () {
            return me.css(e, t, "");
          },
      c = a(),
      u = (n && n[3]) || (me.cssNumber[t] ? "" : "px"),
      l =
        e.nodeType &&
        (me.cssNumber[t] || ("px" !== u && +c)) &&
        He.exec(me.css(e, t));
    if (l && l[3] !== u) {
      for (c /= 2, u = u || l[3], l = +c || 1; s--; )
        me.style(e, t, l + u),
          (1 - o) * (1 - (o = a() / c || 0.5)) <= 0 && (s = 0),
          (l /= o);
      (l *= 2), me.style(e, t, l + u), (n = n || []);
    }
    return (
      n &&
        ((l = +l || +c || 0),
        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = u), (r.start = l), (r.end = i))),
      i
    );
  }
  function g(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = We[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = me.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (We[r] = i),
      i)
    );
  }
  function v(e, t) {
    for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = qe.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && Ie(r) && (i[o] = g(r)))
          : "none" !== n && ((i[o] = "none"), qe.set(r, "display", n)));
    for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function b(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && o(e, t)) ? me.merge([e], n) : n
    );
  }
  function y(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"));
  }
  function _(e, t, n, i, o) {
    for (
      var s,
        a,
        c,
        u,
        l,
        d,
        f = t.createDocumentFragment(),
        h = [],
        p = 0,
        m = e.length;
      p < m;
      p++
    )
      if ((s = e[p]) || 0 === s)
        if ("object" === r(s)) me.merge(h, s.nodeType ? [s] : s);
        else if (Xe.test(s)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              c = (Ve.exec(s) || ["", ""])[1].toLowerCase(),
              u = Ye[c] || Ye._default,
              a.innerHTML = u[1] + me.htmlPrefilter(s) + u[2],
              d = u[0];
            d--;

          )
            a = a.lastChild;
          me.merge(h, a.childNodes), ((a = f.firstChild).textContent = "");
        } else h.push(t.createTextNode(s));
    for (f.textContent = "", p = 0; (s = h[p++]); )
      if (i && me.inArray(s, i) > -1) o && o.push(s);
      else if (((l = Be(s)), (a = b(f.appendChild(s), "script")), l && y(a), n))
        for (d = 0; (s = a[d++]); ) Ue.test(s.type || "") && n.push(s);
    return f;
  }
  function k() {
    return !0;
  }
  function x() {
    return !1;
  }
  function C(e, t) {
    return (
      (e ===
        (function () {
          try {
            return he.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function z(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (a in t) z(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = x;
    else if (!i) return e;
    return (
      1 === o &&
        ((s = i),
        ((i = function (e) {
          return me().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = me.guid++))),
      e.each(function () {
        me.event.add(this, t, i, r, n);
      })
    );
  }
  function S(e, t, n) {
    n
      ? (qe.set(e, t, !1),
        me.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              i,
              o = qe.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)
                (me.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((o = te.call(arguments)),
                qe.set(this, t, o),
                (r = n(this, t)),
                this[t](),
                (i = qe.get(this, t)),
                o !== i || r ? qe.set(this, t, !1) : (i = {}),
                o !== i)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), i.value
                );
            } else
              o.length &&
                (qe.set(this, t, {
                  value: me.event.trigger(
                    me.extend(o[0], me.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === qe.get(e, t) && me.event.add(e, t, k);
  }
  function T(e, t) {
    return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? me(e).children("tbody")[0] || e
      : e;
  }
  function E(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function M(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function A(e, t) {
    var n, r, i, o, s, a, c;
    if (1 === t.nodeType) {
      if (qe.hasData(e) && ((o = qe.get(e)), (c = o.events))) {
        qe.remove(t, "handle events");
        for (i in c)
          for (n = 0, r = c[i].length; n < r; n++) me.event.add(t, i, c[i][n]);
      }
      Pe.hasData(e) &&
        ((s = Pe.access(e)), (a = me.extend({}, s)), Pe.set(t, a));
    }
  }
  function j(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Re.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function q(e, t, r, i) {
    t = ne(t);
    var o,
      s,
      a,
      c,
      u,
      l,
      d = 0,
      f = e.length,
      h = f - 1,
      p = t[0],
      m = de(p);
    if (m || (f > 1 && "string" == typeof p && !le.checkClone && Ke.test(p)))
      return e.each(function (n) {
        var o = e.eq(n);
        m && (t[0] = p.call(this, n, o.html())), q(o, t, r, i);
      });
    if (
      f &&
      ((o = _(t, e[0].ownerDocument, !1, e, i)),
      (s = o.firstChild),
      1 === o.childNodes.length && (o = s),
      s || i)
    ) {
      for (c = (a = me.map(b(o, "script"), E)).length; d < f; d++)
        (u = o),
          d !== h &&
            ((u = me.clone(u, !0, !0)), c && me.merge(a, b(u, "script"))),
          r.call(e[d], u, d);
      if (c)
        for (l = a[a.length - 1].ownerDocument, me.map(a, M), d = 0; d < c; d++)
          (u = a[d]),
            Ue.test(u.type || "") &&
              !qe.access(u, "globalEval") &&
              me.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? me._evalUrl &&
                  !u.noModule &&
                  me._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : n(u.textContent.replace(et, ""), u, l));
    }
    return e;
  }
  function P(e, t, n) {
    for (var r, i = t ? me.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || me.cleanData(b(r)),
        r.parentNode &&
          (n && Be(r) && y(b(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  function F(e, t, n) {
    var r,
      i,
      o,
      s,
      a = e.style;
    return (
      (n = n || nt(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          Be(e) ||
          (s = me.style(e, t)),
        !le.pixelBoxStyles() &&
          tt.test(s) &&
          it.test(t) &&
          ((r = a.width),
          (i = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = r),
          (a.minWidth = i),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function L(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function N(e) {
    var t = me.cssProps[e] || at[e];
    return (
      t ||
      (e in st
        ? e
        : (at[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = ot.length;
                n--;

              )
                if ((e = ot[n] + t) in st) return e;
            })(e) || e))
    );
  }
  function H(e, t, n) {
    var r = He.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function D(e, t, n, r, i, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      c = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (c += me.css(e, n + De[s], !0, i)),
        r
          ? ("content" === n && (c -= me.css(e, "padding" + De[s], !0, i)),
            "margin" !== n &&
              (c -= me.css(e, "border" + De[s] + "Width", !0, i)))
          : ((c += me.css(e, "padding" + De[s], !0, i)),
            "padding" !== n
              ? (c += me.css(e, "border" + De[s] + "Width", !0, i))
              : (a += me.css(e, "border" + De[s] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (c +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - a - 0.5
            )
          ) || 0),
      c
    );
  }
  function O(e, t, n) {
    var r = nt(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === me.css(e, "boxSizing", !1, r),
      s = i,
      a = F(e, t, r),
      c = "offset" + t[0].toUpperCase() + t.slice(1);
    if (tt.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && o(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === me.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === me.css(e, "boxSizing", !1, r)),
        (s = c in e) && (a = e[c])),
      (a = parseFloat(a) || 0) +
        D(e, t, n || (i ? "border" : "content"), s, r, a) +
        "px"
    );
  }
  function B(e, t, n, r, i) {
    return new B.prototype.init(e, t, n, r, i);
  }
  function $() {
    ht &&
      (!1 === he.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame($)
        : e.setTimeout($, me.fx.interval),
      me.fx.tick());
  }
  function I() {
    return (
      e.setTimeout(function () {
        ft = void 0;
      }),
      (ft = Date.now())
    );
  }
  function W(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = De[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function R(e, t, n) {
    for (
      var r,
        i = (V.tweeners[t] || []).concat(V.tweeners["*"]),
        o = 0,
        s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function V(e, t, n) {
    var r,
      i,
      o = 0,
      s = V.prefilters.length,
      a = me.Deferred().always(function () {
        delete c.elem;
      }),
      c = function () {
        if (i) return !1;
        for (
          var t = ft || I(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = 1 - (n / u.duration || 0),
            o = 0,
            s = u.tweens.length;
          o < s;
          o++
        )
          u.tweens[o].run(r);
        return (
          a.notifyWith(e, [u, r, n]),
          r < 1 && s
            ? n
            : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: me.extend({}, t),
        opts: me.extend(
          !0,
          { specialEasing: {}, easing: me.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: ft || I(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = me.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) u.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
              : a.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      l = u.props;
    for (
      (function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((r = h(n)),
            (i = t[r]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = me.cssHooks[r]) && ("expand" in s))
          ) {
            (o = s.expand(o)), delete e[r];
            for (n in o) (n in e) || ((e[n] = o[n]), (t[n] = i));
          } else t[r] = i;
      })(l, u.opts.specialEasing);
      o < s;
      o++
    )
      if ((r = V.prefilters[o].call(u, e, l, u.opts)))
        return (
          de(r.stop) &&
            (me._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      me.map(l, R, u),
      de(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      me.fx.timer(me.extend(c, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  function U(e) {
    return (e.match(ze) || []).join(" ");
  }
  function Y(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function X(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(ze) || [] : [];
  }
  function J(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      me.each(t, function (t, r) {
        n || St.test(e)
          ? i(e, r)
          : J(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== r(t)) i(e, t);
    else for (o in t) J(e + "[" + o + "]", t[o], n, i);
  }
  function Z(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(ze) || [];
      if (de(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function G(e, t, n, r) {
    function i(a) {
      var c;
      return (
        (o[a] = !0),
        me.each(e[a] || [], function (e, a) {
          var u = a(t, n, r);
          return "string" != typeof u || s || o[u]
            ? s
              ? !(c = u)
              : void 0
            : (t.dataTypes.unshift(u), i(u), !1);
        }),
        c
      );
    }
    var o = {},
      s = e === Ht;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function Q(e, t) {
    var n,
      r,
      i = me.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && me.extend(!0, e, r), e;
  }
  var K = [],
    ee = Object.getPrototypeOf,
    te = K.slice,
    ne = K.flat
      ? function (e) {
          return K.flat.call(e);
        }
      : function (e) {
          return K.concat.apply([], e);
        },
    re = K.push,
    ie = K.indexOf,
    oe = {},
    se = oe.toString,
    ae = oe.hasOwnProperty,
    ce = ae.toString,
    ue = ce.call(Object),
    le = {},
    de = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    fe = function (e) {
      return null != e && e === e.window;
    },
    he = e.document,
    pe = { type: !0, src: !0, nonce: !0, noModule: !0 },
    me = function (e, t) {
      return new me.fn.init(e, t);
    };
  (me.fn = me.prototype =
    {
      jquery: "3.5.1",
      constructor: me,
      length: 0,
      toArray: function () {
        return te.call(this);
      },
      get: function (e) {
        return null == e
          ? te.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = me.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return me.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          me.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(te.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          me.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          me.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: re,
      sort: K.sort,
      splice: K.splice,
    }),
    (me.extend = me.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          c = arguments.length,
          u = !1;
        for (
          "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || de(s) || (s = {}),
            a === c && ((s = this), a--);
          a < c;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  s !== r &&
                  (u && r && (me.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = s[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || me.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (s[t] = me.extend(u, o, r)))
                    : void 0 !== r && (s[t] = r));
        return s;
      }),
    me.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== se.call(e)) &&
          (!(t = ee(e)) ||
            ("function" ==
              typeof (n = ae.call(t, "constructor") && t.constructor) &&
              ce.call(n) === ue))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, r) {
        n(e, { nonce: t && t.nonce }, r);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (i(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (i(Object(e))
              ? me.merge(n, "string" == typeof e ? [e] : e)
              : re.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : ie.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) !== s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          o,
          s = 0,
          a = [];
        if (i(e))
          for (r = e.length; s < r; s++)
            null != (o = t(e[s], s, n)) && a.push(o);
        else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
        return ne(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (me.fn[Symbol.iterator] = K[Symbol.iterator]),
    me.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        oe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var we = (function (e) {
    function t(e, t, n, r) {
      var i,
        o,
        s,
        a,
        c,
        u,
        l,
        f = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (A(t), (t = t || j), P)) {
        if (11 !== p && (c = ge.exec(e)))
          if ((i = c[1])) {
            if (9 === p) {
              if (!(s = t.getElementById(i))) return n;
              if (s.id === i) return n.push(s), n;
            } else if (f && (s = f.getElementById(i)) && H(t, s) && s.id === i)
              return n.push(s), n;
          } else {
            if (c[2]) return G.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = c[3]) &&
              y.getElementsByClassName &&
              t.getElementsByClassName
            )
              return G.apply(n, t.getElementsByClassName(i)), n;
          }
        if (
          y.qsa &&
          !V[e + " "] &&
          (!F || !F.test(e)) &&
          (1 !== p || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((l = e), (f = t), 1 === p && (ue.test(e) || ce.test(e)))) {
            for (
              ((f = (ve.test(e) && d(t.parentNode)) || t) === t && y.scope) ||
                ((a = t.getAttribute("id"))
                  ? (a = a.replace(_e, ke))
                  : t.setAttribute("id", (a = D))),
                o = (u = C(e)).length;
              o--;

            )
              u[o] = (a ? "#" + a : ":scope") + " " + h(u[o]);
            l = u.join(",");
          }
          try {
            return G.apply(n, f.querySelectorAll(l)), n;
          } catch (t) {
            V(e, !0);
          } finally {
            a === D && t.removeAttribute("id");
          }
        }
      }
      return S(e.replace(se, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > _.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[D] = !0), e;
    }
    function i(e) {
      var t = j.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) _.attrHandle[n[r]] = t;
    }
    function s(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function c(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && Ce(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function l(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--; )
              n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function d(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function f() {}
    function h(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function p(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        s = n && "parentNode" === o,
        a = $++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
            return !1;
          }
        : function (t, n, c) {
            var u,
              l,
              d,
              f = [B, a];
            if (c) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || s) && e(t, n, c)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || s)
                  if (
                    ((d = t[D] || (t[D] = {})),
                    (l = d[t.uniqueID] || (d[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((u = l[o]) && u[0] === B && u[1] === a)
                      return (f[2] = u[2]);
                    if (((l[o] = f), (f[2] = e(t, n, c)))) return !0;
                  }
            return !1;
          };
    }
    function m(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function w(e, t, n, r, i) {
      for (var o, s = [], a = 0, c = e.length, u = null != t; a < c; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function g(e, n, i, o, s, a) {
      return (
        o && !o[D] && (o = g(o)),
        s && !s[D] && (s = g(s, a)),
        r(function (r, a, c, u) {
          var l,
            d,
            f,
            h = [],
            p = [],
            m = a.length,
            g =
              r ||
              (function (e, n, r) {
                for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                return r;
              })(n || "*", c.nodeType ? [c] : c, []),
            v = !e || (!r && n) ? g : w(g, h, e, c, u),
            b = i ? (s || (r ? e : m || o) ? [] : a) : v;
          if ((i && i(v, b, c, u), o))
            for (l = w(b, p), o(l, [], c, u), d = l.length; d--; )
              (f = l[d]) && (b[p[d]] = !(v[p[d]] = f));
          if (r) {
            if (s || e) {
              if (s) {
                for (l = [], d = b.length; d--; )
                  (f = b[d]) && l.push((v[d] = f));
                s(null, (b = []), l, u);
              }
              for (d = b.length; d--; )
                (f = b[d]) &&
                  (l = s ? K(r, f) : h[d]) > -1 &&
                  (r[l] = !(a[l] = f));
            }
          } else (b = w(b === a ? b.splice(m, b.length) : b)), s ? s(null, a, b, u) : G.apply(a, b);
        })
      );
    }
    function v(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = _.relative[e[0].type],
          s = o || _.relative[" "],
          a = o ? 1 : 0,
          c = p(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          u = p(
            function (e) {
              return K(t, e) > -1;
            },
            s,
            !0
          ),
          l = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== T)) ||
                ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
              return (t = null), i;
            },
          ];
        a < i;
        a++
      )
        if ((n = _.relative[e[a].type])) l = [p(m(l), n)];
        else {
          if ((n = _.filter[e[a].type].apply(null, e[a].matches))[D]) {
            for (r = ++a; r < i && !_.relative[e[r].type]; r++);
            return g(
              a > 1 && m(l),
              a > 1 &&
                h(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              n,
              a < r && v(e.slice(a, r)),
              r < i && v((e = e.slice(r))),
              r < i && h(e)
            );
          }
          l.push(n);
        }
      return m(l);
    }
    var b,
      y,
      _,
      k,
      x,
      C,
      z,
      S,
      T,
      E,
      M,
      A,
      j,
      q,
      P,
      F,
      L,
      N,
      H,
      D = "sizzle" + 1 * new Date(),
      O = e.document,
      B = 0,
      $ = 0,
      I = n(),
      W = n(),
      R = n(),
      V = n(),
      U = function (e, t) {
        return e === t && (M = !0), 0;
      },
      Y = {}.hasOwnProperty,
      X = [],
      J = X.pop,
      Z = X.push,
      G = X.push,
      Q = X.slice,
      K = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      ee =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      te = "[\\x20\\t\\r\\n\\f]",
      ne =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        te +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      re =
        "\\[" +
        te +
        "*(" +
        ne +
        ")(?:" +
        te +
        "*([*^$|!~]?=)" +
        te +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ne +
        "))|)" +
        te +
        "*\\]",
      ie =
        ":(" +
        ne +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        re +
        ")*)|.*)\\)|)",
      oe = new RegExp(te + "+", "g"),
      se = new RegExp(
        "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
        "g"
      ),
      ae = new RegExp("^" + te + "*," + te + "*"),
      ce = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
      ue = new RegExp(te + "|>"),
      le = new RegExp(ie),
      de = new RegExp("^" + ne + "$"),
      fe = {
        ID: new RegExp("^#(" + ne + ")"),
        CLASS: new RegExp("^\\.(" + ne + ")"),
        TAG: new RegExp("^(" + ne + "|[*])"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            te +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            te +
            "*(?:([+-]|)" +
            te +
            "*(\\d+)|))" +
            te +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + ee + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            te +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            te +
            "*((?:-\\d)?\\d*)" +
            te +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      he = /HTML$/i,
      pe = /^(?:input|select|textarea|button)$/i,
      me = /^h\d$/i,
      we = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      be = new RegExp(
        "\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])",
        "g"
      ),
      ye = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ke = function (e, t) {
        return t
          ? "\0" === e
            ? "???"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      xe = function () {
        A();
      },
      Ce = p(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((X = Q.call(O.childNodes)), O.childNodes),
        X[O.childNodes.length].nodeType;
    } catch (e) {
      G = {
        apply: X.length
          ? function (e, t) {
              Z.apply(e, Q.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    (y = t.support = {}),
      (x = t.isXML =
        function (e) {
          var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
          return !he.test(t || (n && n.nodeName) || "HTML");
        }),
      (A = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : O;
          return r != j && 9 === r.nodeType && r.documentElement
            ? ((j = r),
              (q = j.documentElement),
              (P = !x(j)),
              O != j &&
                (n = j.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", xe, !1)
                  : n.attachEvent && n.attachEvent("onunload", xe)),
              (y.scope = i(function (e) {
                return (
                  q.appendChild(e).appendChild(j.createElement("div")),
                  void 0 !== e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (y.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (y.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(j.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (y.getElementsByClassName = we.test(j.getElementsByClassName)),
              (y.getById = i(function (e) {
                return (
                  (q.appendChild(e).id = D),
                  !j.getElementsByName || !j.getElementsByName(D).length
                );
              })),
              y.getById
                ? ((_.filter.ID = function (e) {
                    var t = e.replace(be, ye);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (_.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && P) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((_.filter.ID = function (e) {
                    var t = e.replace(be, ye);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (_.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && P) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (_.find.TAG = y.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : y.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (_.find.CLASS =
                y.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && P)
                    return t.getElementsByClassName(e);
                }),
              (L = []),
              (F = []),
              (y.qsa = we.test(j.querySelectorAll)) &&
                (i(function (e) {
                  var t;
                  (q.appendChild(e).innerHTML =
                    "<a id='" +
                    D +
                    "'></a><select id='" +
                    D +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      F.push("[*^$]=" + te + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      F.push("\\[" + te + "*(?:value|" + ee + ")"),
                    e.querySelectorAll("[id~=" + D + "-]").length ||
                      F.push("~="),
                    (t = j.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      F.push(
                        "\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"
                      ),
                    e.querySelectorAll(":checked").length || F.push(":checked"),
                    e.querySelectorAll("a#" + D + "+*").length ||
                      F.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    F.push("[\\r\\n\\f]");
                }),
                i(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = j.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      F.push("name" + te + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      F.push(":enabled", ":disabled"),
                    (q.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      F.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    F.push(",.*:");
                })),
              (y.matchesSelector = we.test(
                (N =
                  q.matches ||
                  q.webkitMatchesSelector ||
                  q.mozMatchesSelector ||
                  q.oMatchesSelector ||
                  q.msMatchesSelector)
              )) &&
                i(function (e) {
                  (y.disconnectedMatch = N.call(e, "*")),
                    N.call(e, "[s!='']:x"),
                    L.push("!=", ie);
                }),
              (F = F.length && new RegExp(F.join("|"))),
              (L = L.length && new RegExp(L.join("|"))),
              (t = we.test(q.compareDocumentPosition)),
              (H =
                t || we.test(q.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (U = t
                ? function (e, t) {
                    if (e === t) return (M = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!y.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e == j || (e.ownerDocument == O && H(O, e))
                          ? -1
                          : t == j || (t.ownerDocument == O && H(O, t))
                          ? 1
                          : E
                          ? K(E, e) - K(E, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (M = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      c = [t];
                    if (!i || !o)
                      return e == j
                        ? -1
                        : t == j
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : E
                        ? K(E, e) - K(E, t)
                        : 0;
                    if (i === o) return s(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) c.unshift(n);
                    for (; a[r] === c[r]; ) r++;
                    return r
                      ? s(a[r], c[r])
                      : a[r] == O
                      ? -1
                      : c[r] == O
                      ? 1
                      : 0;
                  }),
              j)
            : j;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          (A(e),
          y.matchesSelector &&
            P &&
            !V[n + " "] &&
            (!L || !L.test(n)) &&
            (!F || !F.test(n)))
        )
          try {
            var r = N.call(e, n);
            if (
              r ||
              y.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {
            V(n, !0);
          }
        return t(n, j, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) != j && A(e), H(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) != j && A(e);
        var n = _.attrHandle[t.toLowerCase()],
          r = n && Y.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
        return void 0 !== r
          ? r
          : y.attributes || !P
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.escape = function (e) {
        return (e + "").replace(_e, ke);
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((M = !y.detectDuplicates),
          (E = !y.sortStable && e.slice(0)),
          e.sort(U),
          M)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (E = null), e;
      }),
      (k = t.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += k(t);
          return n;
        }),
      ((_ = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(be, ye)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(be, ye)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return fe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      le.test(n) &&
                      (t = C(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(be, ye).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = I[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) &&
                  I(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(oe, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, c) {
                    var u,
                      l,
                      d,
                      f,
                      h,
                      p,
                      m = o !== s ? "nextSibling" : "previousSibling",
                      w = t.parentNode,
                      g = a && t.nodeName.toLowerCase(),
                      v = !c && !a,
                      b = !1;
                    if (w) {
                      if (o) {
                        for (; m; ) {
                          for (f = t; (f = f[m]); )
                            if (
                              a
                                ? f.nodeName.toLowerCase() === g
                                : 1 === f.nodeType
                            )
                              return !1;
                          p = m = "only" === e && !p && "nextSibling";
                        }
                        return !0;
                      }
                      if (((p = [s ? w.firstChild : w.lastChild]), s && v)) {
                        for (
                          b =
                            (h =
                              (u =
                                (l =
                                  (d = (f = w)[D] || (f[D] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] || [])[0] === B &&
                              u[1]) && u[2],
                            f = h && w.childNodes[h];
                          (f = (++h && f && f[m]) || (b = h = 0) || p.pop());

                        )
                          if (1 === f.nodeType && ++b && f === t) {
                            l[e] = [B, h, b];
                            break;
                          }
                      } else if (
                        (v &&
                          (b = h =
                            (u =
                              (l =
                                (d = (f = t)[D] || (f[D] = {}))[f.uniqueID] ||
                                (d[f.uniqueID] = {}))[e] || [])[0] === B &&
                            u[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (f = (++h && f && f[m]) || (b = h = 0) || p.pop()) &&
                          ((a
                            ? f.nodeName.toLowerCase() !== g
                            : 1 !== f.nodeType) ||
                            !++b ||
                            (v &&
                              ((l =
                                (d = f[D] || (f[D] = {}))[f.uniqueID] ||
                                (d[f.uniqueID] = {}))[e] = [B, b]),
                            f !== t));

                        );
                      return (b -= i) === r || (b % r == 0 && b / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  _.pseudos[e] ||
                  _.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[D]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  _.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                          e[(r = K(e, i[s]))] = !(t[r] = i[s]);
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = z(e.replace(se, "$1"));
              return i[D]
                ? r(function (e, t, n, r) {
                    for (var o, s = i(e, null, r, []), a = e.length; a--; )
                      (o = s[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(be, ye)),
                function (t) {
                  return (t.textContent || k(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                de.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(be, ye).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = P
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === q;
            },
            focus: function (e) {
              return (
                e === j.activeElement &&
                (!j.hasFocus || j.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: u(!1),
            disabled: u(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !_.pseudos.empty(e);
            },
            header: function (e) {
              return me.test(e.nodeName);
            },
            input: function (e) {
              return pe.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (e, t) {
              return [t - 1];
            }),
            eq: l(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: l(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: l(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: l(function (e, t, n) {
              for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: l(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = _.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      _.pseudos[b] = a(b);
    for (b in { submit: !0, reset: !0 }) _.pseudos[b] = c(b);
    return (
      (f.prototype = _.filters = _.pseudos),
      (_.setFilters = new f()),
      (C = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            s,
            a,
            c,
            u,
            l = W[e + " "];
          if (l) return n ? 0 : l.slice(0);
          for (a = e, c = [], u = _.preFilter; a; ) {
            (r && !(i = ae.exec(a))) ||
              (i && (a = a.slice(i[0].length) || a), c.push((o = []))),
              (r = !1),
              (i = ce.exec(a)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(se, " ") }),
                (a = a.slice(r.length)));
            for (s in _.filter)
              !(i = fe[s].exec(a)) ||
                (u[s] && !(i = u[s](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: s, matches: i }),
                (a = a.slice(r.length)));
            if (!r) break;
          }
          return n ? a.length : a ? t.error(e) : W(e, c).slice(0);
        }),
      (z = t.compile =
        function (e, n) {
          var i,
            o = [],
            s = [],
            a = R[e + " "];
          if (!a) {
            for (n || (n = C(e)), i = n.length; i--; )
              (a = v(n[i]))[D] ? o.push(a) : s.push(a);
            (a = R(
              e,
              (function (e, n) {
                var i = n.length > 0,
                  o = e.length > 0,
                  s = function (r, s, a, c, u) {
                    var l,
                      d,
                      f,
                      h = 0,
                      p = "0",
                      m = r && [],
                      g = [],
                      v = T,
                      b = r || (o && _.find.TAG("*", u)),
                      y = (B += null == v ? 1 : Math.random() || 0.1),
                      k = b.length;
                    for (
                      u && (T = s == j || s || u);
                      p !== k && null != (l = b[p]);
                      p++
                    ) {
                      if (o && l) {
                        for (
                          d = 0, s || l.ownerDocument == j || (A(l), (a = !P));
                          (f = e[d++]);

                        )
                          if (f(l, s || j, a)) {
                            c.push(l);
                            break;
                          }
                        u && (B = y);
                      }
                      i && ((l = !f && l) && h--, r && m.push(l));
                    }
                    if (((h += p), i && p !== h)) {
                      for (d = 0; (f = n[d++]); ) f(m, g, s, a);
                      if (r) {
                        if (h > 0)
                          for (; p--; ) m[p] || g[p] || (g[p] = J.call(c));
                        g = w(g);
                      }
                      G.apply(c, g),
                        u &&
                          !r &&
                          g.length > 0 &&
                          h + n.length > 1 &&
                          t.uniqueSort(c);
                    }
                    return u && ((B = y), (T = v)), m;
                  };
                return i ? r(s) : s;
              })(s, o)
            )).selector = e;
          }
          return a;
        }),
      (S = t.select =
        function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            c,
            u = "function" == typeof e && e,
            l = !r && C((e = u.selector || e));
          if (((n = n || []), 1 === l.length)) {
            if (
              (o = l[0] = l[0].slice(0)).length > 2 &&
              "ID" === (s = o[0]).type &&
              9 === t.nodeType &&
              P &&
              _.relative[o[1].type]
            ) {
              if (!(t = (_.find.ID(s.matches[0].replace(be, ye), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = fe.needsContext.test(e) ? 0 : o.length;
              i-- && ((s = o[i]), !_.relative[(a = s.type)]);

            )
              if (
                (c = _.find[a]) &&
                (r = c(
                  s.matches[0].replace(be, ye),
                  (ve.test(o[0].type) && d(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && h(o))))
                  return G.apply(n, r), n;
                break;
              }
          }
          return (
            (u || z(e, l))(
              r,
              t,
              !P,
              n,
              !t || (ve.test(e) && d(t.parentNode)) || t
            ),
            n
          );
        }),
      (y.sortStable = D.split("").sort(U).join("") === D),
      (y.detectDuplicates = !!M),
      A(),
      (y.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(j.createElement("fieldset"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (y.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(ee, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      t
    );
  })(e);
  (me.find = we),
    (me.expr = we.selectors),
    (me.expr[":"] = me.expr.pseudos),
    (me.uniqueSort = me.unique = we.uniqueSort),
    (me.text = we.getText),
    (me.isXMLDoc = we.isXML),
    (me.contains = we.contains),
    (me.escapeSelector = we.escape);
  var ge = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && me(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    ve = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    be = me.expr.match.needsContext,
    ye = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (me.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? me.find.matchesSelector(r, e)
          ? [r]
          : []
        : me.find.matches(
            e,
            me.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    me.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            me(e).filter(function () {
              for (t = 0; t < r; t++) if (me.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) me.find(e, i[t], n);
        return r > 1 ? me.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(
          this,
          "string" == typeof e && be.test(e) ? me(e) : e || [],
          !1
        ).length;
      },
    });
  var _e,
    ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((me.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || _e), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : ke.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof me ? t[0] : t),
          me.merge(
            this,
            me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : he, !0)
          ),
          ye.test(r[1]) && me.isPlainObject(t))
        )
          for (r in t) de(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = he.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : de(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(me)
      : me.makeArray(e, this);
  }).prototype = me.fn),
    (_e = me(he));
  var xe = /^(?:parents|prev(?:Until|All))/,
    Ce = { children: !0, contents: !0, next: !0, prev: !0 };
  me.fn.extend({
    has: function (e) {
      var t = me(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (me.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        s = "string" != typeof e && me(e);
      if (!be.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && me.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? ie.call(me(e), this[0])
          : ie.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    me.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ge(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ge(e, "parentNode", n);
        },
        next: function (e) {
          return a(e, "nextSibling");
        },
        prev: function (e) {
          return a(e, "previousSibling");
        },
        nextAll: function (e) {
          return ge(e, "nextSibling");
        },
        prevAll: function (e) {
          return ge(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ge(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ge(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ve((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ve(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && ee(e.contentDocument)
            ? e.contentDocument
            : (o(e, "template") && (e = e.content || e),
              me.merge([], e.childNodes));
        },
      },
      function (e, t) {
        me.fn[e] = function (n, r) {
          var i = me.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = me.filter(r, i)),
            this.length > 1 &&
              (Ce[e] || me.uniqueSort(i), xe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var ze = /[^\x20\t\r\n\f]+/g;
  (me.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              me.each(e.match(ze) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : me.extend({}, e);
    var t,
      n,
      i,
      o,
      s = [],
      a = [],
      c = -1,
      u = function () {
        for (o = o || e.once, i = t = !0; a.length; c = -1)
          for (n = a.shift(); ++c < s.length; )
            !1 === s[c].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((c = s.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (s = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            s &&
              (n && !t && ((c = s.length - 1), a.push(n)),
              (function t(n) {
                me.each(n, function (n, i) {
                  de(i)
                    ? (e.unique && l.has(i)) || s.push(i)
                    : i && i.length && "string" !== r(i) && t(i);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            me.each(arguments, function (e, t) {
              for (var n; (n = me.inArray(t, s, n)) > -1; )
                s.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? me.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (o = a = []), (s = n = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (o = a = []), n || t || (s = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return l;
  }),
    me.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              me.Callbacks("memory"),
              me.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              me.Callbacks("once memory"),
              me.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              me.Callbacks("once memory"),
              me.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return me
                .Deferred(function (t) {
                  me.each(n, function (n, r) {
                    var i = de(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && de(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              function o(t, n, r, i) {
                return function () {
                  var a = this,
                    l = arguments,
                    d = function () {
                      var e, d;
                      if (!(t < s)) {
                        if ((e = r.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (d =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          de(d)
                            ? i
                              ? d.call(e, o(s, n, c, i), o(s, n, u, i))
                              : (s++,
                                d.call(
                                  e,
                                  o(s, n, c, i),
                                  o(s, n, u, i),
                                  o(s, n, c, n.notifyWith)
                                ))
                            : (r !== c && ((a = void 0), (l = [e])),
                              (i || n.resolveWith)(a, l));
                      }
                    },
                    f = i
                      ? d
                      : function () {
                          try {
                            d();
                          } catch (e) {
                            me.Deferred.exceptionHook &&
                              me.Deferred.exceptionHook(e, f.stackTrace),
                              t + 1 >= s &&
                                (r !== u && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? f()
                    : (me.Deferred.getStackHook &&
                        (f.stackTrace = me.Deferred.getStackHook()),
                      e.setTimeout(f));
                };
              }
              var s = 0;
              return me
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, de(i) ? i : c, e.notifyWith)),
                    n[1][3].add(o(0, e, de(t) ? t : c)),
                    n[2][3].add(o(0, e, de(r) ? r : u));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? me.extend(e, i) : i;
            },
          },
          o = {};
        return (
          me.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (i[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    r = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = s.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = te.call(arguments),
          o = me.Deferred(),
          s = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? te.call(arguments) : n),
                --t || o.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          (l(e, o.done(s(n)).resolve, o.reject, !t),
          "pending" === o.state() || de(i[n] && i[n].then))
        )
          return o.then();
        for (; n--; ) l(i[n], s(n), o.reject);
        return o.promise();
      },
    });
  var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (me.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      Se.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (me.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Te = me.Deferred();
  (me.fn.ready = function (e) {
    return (
      Te.then(e).catch(function (e) {
        me.readyException(e);
      }),
      this
    );
  }),
    me.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --me.readyWait : me.isReady) ||
          ((me.isReady = !0),
          (!0 !== e && --me.readyWait > 0) || Te.resolveWith(he, [me]));
      },
    }),
    (me.ready.then = Te.then),
    "complete" === he.readyState ||
    ("loading" !== he.readyState && !he.documentElement.doScroll)
      ? e.setTimeout(me.ready)
      : (he.addEventListener("DOMContentLoaded", d),
        e.addEventListener("load", d));
  var Ee = function (e, t, n, i, o, s, a) {
      var c = 0,
        u = e.length,
        l = null == n;
      if ("object" === r(n)) {
        o = !0;
        for (c in n) Ee(e, t, c, n[c], !0, s, a);
      } else if (
        void 0 !== i &&
        ((o = !0),
        de(i) || (a = !0),
        l &&
          (a
            ? (t.call(e, i), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(me(e), n);
              }))),
        t)
      )
        for (; c < u; c++) t(e[c], n, a ? i : i.call(e[c], c, t(e[c], n)));
      return o ? e : l ? t.call(e) : u ? t(e[0], n) : s;
    },
    Me = /^-ms-/,
    Ae = /-([a-z])/g,
    je = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (p.uid = 1),
    (p.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            je(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[h(t)] = n;
        else for (r in t) i[h(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in r
              ? [t]
              : t.match(ze) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || me.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !me.isEmptyObject(t);
      },
    });
  var qe = new p(),
    Pe = new p(),
    Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Le = /[A-Z]/g;
  me.extend({
    hasData: function (e) {
      return Pe.hasData(e) || qe.hasData(e);
    },
    data: function (e, t, n) {
      return Pe.access(e, t, n);
    },
    removeData: function (e, t) {
      Pe.remove(e, t);
    },
    _data: function (e, t, n) {
      return qe.access(e, t, n);
    },
    _removeData: function (e, t) {
      qe.remove(e, t);
    },
  }),
    me.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Pe.get(o)), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (r = s[n].name).indexOf("data-") &&
                ((r = h(r.slice(5))), m(o, r, i[r]));
            qe.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Pe.set(this, e);
            })
          : Ee(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = Pe.get(o, e))) return n;
                  if (void 0 !== (n = m(o, e))) return n;
                } else
                  this.each(function () {
                    Pe.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Pe.remove(this, e);
        });
      },
    }),
    me.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = qe.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = qe.access(e, t, me.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = me.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = me._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                me.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          qe.get(e, n) ||
          qe.access(e, n, {
            empty: me.Callbacks("once memory").add(function () {
              qe.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    me.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? me.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          me.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = me.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = qe.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    He = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
    De = ["Top", "Right", "Bottom", "Left"],
    Oe = he.documentElement,
    Be = function (e) {
      return me.contains(e.ownerDocument, e);
    },
    $e = { composed: !0 };
  Oe.getRootNode &&
    (Be = function (e) {
      return (
        me.contains(e.ownerDocument, e) || e.getRootNode($e) === e.ownerDocument
      );
    });
  var Ie = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && Be(e) && "none" === me.css(e, "display"))
      );
    },
    We = {};
  me.fn.extend({
    show: function () {
      return v(this, !0);
    },
    hide: function () {
      return v(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ie(this) ? me(this).show() : me(this).hide();
          });
    },
  });
  var Re = /^(?:checkbox|radio)$/i,
    Ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ue = /^$|^module$|\/(?:java|ecma)script/i;
  !(function () {
    var e = he.createDocumentFragment().appendChild(he.createElement("div")),
      t = he.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (le.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (le.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      (e.innerHTML = "<option></option>"),
      (le.option = !!e.lastChild);
  })();
  var Ye = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
    (Ye.th = Ye.td),
    le.option ||
      (Ye.optgroup = Ye.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var Xe = /<|&#?\w+;/,
    Je = /^key/,
    Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ge = /^([^.]*)(?:\.(.+)|)/;
  (me.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        s,
        a,
        c,
        u,
        l,
        d,
        f,
        h,
        p,
        m,
        w = qe.get(e);
      if (je(e))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && me.find.matchesSelector(Oe, i),
            n.guid || (n.guid = me.guid++),
            (c = w.events) || (c = w.events = Object.create(null)),
            (s = w.handle) ||
              (s = w.handle =
                function (t) {
                  return void 0 !== me && me.event.triggered !== t.type
                    ? me.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            u = (t = (t || "").match(ze) || [""]).length;
          u--;

        )
          (h = m = (a = Ge.exec(t[u]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h &&
              ((d = me.event.special[h] || {}),
              (h = (i ? d.delegateType : d.bindType) || h),
              (d = me.event.special[h] || {}),
              (l = me.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && me.expr.match.needsContext.test(i),
                  namespace: p.join("."),
                },
                o
              )),
              (f = c[h]) ||
                (((f = c[h] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, r, p, s)) ||
                  (e.addEventListener && e.addEventListener(h, s))),
              d.add &&
                (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? f.splice(f.delegateCount++, 0, l) : f.push(l),
              (me.event.global[h] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        c,
        u,
        l,
        d,
        f,
        h,
        p,
        m,
        w = qe.hasData(e) && qe.get(e);
      if (w && (c = w.events)) {
        for (u = (t = (t || "").match(ze) || [""]).length; u--; )
          if (
            ((a = Ge.exec(t[u]) || []),
            (h = m = a[1]),
            (p = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = me.event.special[h] || {},
                f = c[(h = (r ? d.delegateType : d.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = f.length;
              o--;

            )
              (l = f[o]),
                (!i && m !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (a && !a.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (f.splice(o, 1),
                  l.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, l));
            s &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, p, w.handle)) ||
                me.removeEvent(e, h, w.handle),
              delete c[h]);
          } else for (h in c) me.event.remove(e, h + t[u], n, r, !0);
        me.isEmptyObject(c) && qe.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = new Array(arguments.length),
        c = me.event.fix(e),
        u = (qe.get(this, "events") || Object.create(null))[c.type] || [],
        l = me.event.special[c.type] || {};
      for (a[0] = c, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((c.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, c))
      ) {
        for (
          s = me.event.handlers.call(this, c, u), t = 0;
          (i = s[t++]) && !c.isPropagationStopped();

        )
          for (
            c.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !c.isImmediatePropagationStopped();

          )
            (c.rnamespace &&
              !1 !== o.namespace &&
              !c.rnamespace.test(o.namespace)) ||
              ((c.handleObj = o),
              (c.data = o.data),
              void 0 !==
                (r = (
                  (me.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) &&
                !1 === (c.result = r) &&
                (c.preventDefault(), c.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, c), c.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s,
        a = [],
        c = t.delegateCount,
        u = e.target;
      if (c && u.nodeType && !("click" === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < c; n++)
              void 0 === s[(i = (r = t[n]).selector + " ")] &&
                (s[i] = r.needsContext
                  ? me(i, this).index(u) > -1
                  : me.find(i, this, null, [u]).length),
                s[i] && o.push(r);
            o.length && a.push({ elem: u, handlers: o });
          }
      return (
        (u = this), c < t.length && a.push({ elem: u, handlers: t.slice(c) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(me.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: de(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[me.expando] ? e : new me.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            Re.test(t.type) && t.click && o(t, "input") && S(t, "click", k), !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            Re.test(t.type) && t.click && o(t, "input") && S(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (Re.test(t.type) &&
              t.click &&
              o(t, "input") &&
              qe.get(t, "click")) ||
            o(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (me.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (me.Event = function (e, t) {
      if (!(this instanceof me.Event)) return new me.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? k
              : x),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && me.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[me.expando] = !0);
    }),
    (me.Event.prototype = {
      constructor: me.Event,
      isDefaultPrevented: x,
      isPropagationStopped: x,
      isImmediatePropagationStopped: x,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = k),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = k),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = k),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    me.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Je.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ze.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      me.event.addProp
    ),
    me.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      me.event.special[e] = {
        setup: function () {
          return S(this, e, C), !1;
        },
        trigger: function () {
          return S(this, e), !0;
        },
        delegateType: t,
      };
    }),
    me.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        me.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || me.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    me.fn.extend({
      on: function (e, t, n, r) {
        return z(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return z(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            me(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = x),
          this.each(function () {
            me.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Qe = /<script|<style|<link/i,
    Ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  me.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a = e.cloneNode(!0),
        c = Be(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          me.isXMLDoc(e)
        )
      )
        for (s = b(a), r = 0, i = (o = b(e)).length; r < i; r++) j(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || b(e), s = s || b(a), r = 0, i = o.length; r < i; r++)
            A(o[r], s[r]);
        else A(e, a);
      return (s = b(a, "script")).length > 0 && y(s, !c && b(e, "script")), a;
    },
    cleanData: function (e) {
      for (var t, n, r, i = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (je(n)) {
          if ((t = n[qe.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? me.event.remove(n, r) : me.removeEvent(n, r, t.handle);
            n[qe.expando] = void 0;
          }
          n[Pe.expando] && (n[Pe.expando] = void 0);
        }
    },
  }),
    me.fn.extend({
      detach: function (e) {
        return P(this, e, !0);
      },
      remove: function (e) {
        return P(this, e);
      },
      text: function (e) {
        return Ee(
          this,
          function (e) {
            return void 0 === e
              ? me.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return q(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            T(this, e).appendChild(e);
          }
        });
      },
      prepend: function () {
        return q(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = T(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return q(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return q(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (me.cleanData(b(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return me.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Ee(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Qe.test(e) &&
              !Ye[(Ve.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = me.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (me.cleanData(b(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return q(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            me.inArray(this, e) < 0 &&
              (me.cleanData(b(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    me.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        me.fn[e] = function (e) {
          for (var n, r = [], i = me(e), o = i.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)),
              me(i[s])[t](n),
              re.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var tt = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
    nt = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    rt = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      r = n.call(e);
      for (i in t) e.style[i] = o[i];
      return r;
    },
    it = new RegExp(De.join("|"), "i");
  !(function () {
    function t() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          Oe.appendChild(u).appendChild(l);
        var t = e.getComputedStyle(l);
        (r = "1%" !== t.top),
          (c = 12 === n(t.marginLeft)),
          (l.style.right = "60%"),
          (s = 36 === n(t.right)),
          (i = 36 === n(t.width)),
          (l.style.position = "absolute"),
          (o = 12 === n(l.offsetWidth / 3)),
          Oe.removeChild(u),
          (l = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      i,
      o,
      s,
      a,
      c,
      u = he.createElement("div"),
      l = he.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      me.extend(le, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), c;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, r, i;
          return (
            null == a &&
              ((t = he.createElement("table")),
              (n = he.createElement("tr")),
              (r = he.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              Oe.appendChild(t).appendChild(n).appendChild(r),
              (i = e.getComputedStyle(n)),
              (a = parseInt(i.height) > 3),
              Oe.removeChild(t)),
            a
          );
        },
      }));
  })();
  var ot = ["Webkit", "Moz", "ms"],
    st = he.createElement("div").style,
    at = {},
    ct = /^(none|table(?!-c[ea]).+)/,
    ut = /^--/,
    lt = { position: "absolute", visibility: "hidden", display: "block" },
    dt = { letterSpacing: "0", fontWeight: "400" };
  me.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = F(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = h(t),
          c = ut.test(t),
          u = e.style;
        if (
          (c || (t = N(a)),
          (s = me.cssHooks[t] || me.cssHooks[a]),
          void 0 === n)
        )
          return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
        "string" == (o = typeof n) &&
          (i = He.exec(n)) &&
          i[1] &&
          ((n = w(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              c ||
              (n += (i && i[3]) || (me.cssNumber[a] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
              (c ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = h(t);
      return (
        ut.test(t) || (t = N(a)),
        (s = me.cssHooks[t] || me.cssHooks[a]) &&
          "get" in s &&
          (i = s.get(e, !0, n)),
        void 0 === i && (i = F(e, t, r)),
        "normal" === i && t in dt && (i = dt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    me.each(["height", "width"], function (e, t) {
      me.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ct.test(me.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? O(e, t, r)
              : rt(e, lt, function () {
                  return O(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = nt(e),
            s = !le.scrollboxSize() && "absolute" === o.position,
            a = (s || r) && "border-box" === me.css(e, "boxSizing", !1, o),
            c = r ? D(e, t, r, a, o) : 0;
          return (
            a &&
              s &&
              (c -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  D(e, t, "border", !1, o) -
                  0.5
              )),
            c &&
              (i = He.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = me.css(e, t))),
            H(0, n, c)
          );
        },
      };
    }),
    (me.cssHooks.marginLeft = L(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(F(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              rt(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    me.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (me.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + De[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (me.cssHooks[e + t].set = H);
    }),
    me.fn.extend({
      css: function (e, t) {
        return Ee(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (r = nt(e), i = t.length; s < i; s++)
                o[t[s]] = me.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? me.style(e, t, n) : me.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (me.Tween = B),
    ((B.prototype = {
      constructor: B,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || me.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (me.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = B.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                me.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : B.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = B.prototype),
    ((B.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = me.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          me.fx.step[e.prop]
            ? me.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!me.cssHooks[e.prop] && null == e.elem.style[N(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : me.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = B.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (me.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (me.fx = B.prototype.init),
    (me.fx.step = {});
  var ft,
    ht,
    pt = /^(?:toggle|show|hide)$/,
    mt = /queueHooks$/;
  (me.Animation = me.extend(V, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return w(n.elem, e, He.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      de(e) ? ((t = e), (e = ["*"])) : (e = e.match(ze));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (V.tweeners[n] = V.tweeners[n] || []),
          V.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          c,
          u,
          l,
          d = "width" in t || "height" in t,
          f = this,
          h = {},
          p = e.style,
          m = e.nodeType && Ie(e),
          w = qe.get(e, "fxshow");
        n.queue ||
          (null == (s = me._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          f.always(function () {
            f.always(function () {
              s.unqueued--, me.queue(e, "fx").length || s.empty.fire();
            });
          }));
        for (r in t)
          if (((i = t[r]), pt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (m ? "hide" : "show"))
            ) {
              if ("show" !== i || !w || void 0 === w[r]) continue;
              m = !0;
            }
            h[r] = (w && w[r]) || me.style(e, r);
          }
        if ((c = !me.isEmptyObject(t)) || !me.isEmptyObject(h)) {
          d &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = w && w.display) && (u = qe.get(e, "display")),
            "none" === (l = me.css(e, "display")) &&
              (u
                ? (l = u)
                : (v([e], !0),
                  (u = e.style.display || u),
                  (l = me.css(e, "display")),
                  v([e]))),
            ("inline" === l || ("inline-block" === l && null != u)) &&
              "none" === me.css(e, "float") &&
              (c ||
                (f.done(function () {
                  p.display = u;
                }),
                null == u && ((l = p.display), (u = "none" === l ? "" : l))),
              (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              f.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (c = !1);
          for (r in h)
            c ||
              (w
                ? "hidden" in w && (m = w.hidden)
                : (w = qe.access(e, "fxshow", { display: u })),
              o && (w.hidden = !m),
              m && v([e], !0),
              f.done(function () {
                m || v([e]), qe.remove(e, "fxshow");
                for (r in h) me.style(e, r, h[r]);
              })),
              (c = R(m ? w[r] : 0, r, f)),
              r in w ||
                ((w[r] = c.start), m && ((c.end = c.start), (c.start = 0)));
        }
      },
    ],
    prefilter: function (e, t) {
      t ? V.prefilters.unshift(e) : V.prefilters.push(e);
    },
  })),
    (me.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? me.extend({}, e)
          : {
              complete: n || (!n && t) || (de(e) && e),
              duration: e,
              easing: (n && t) || (t && !de(t) && t),
            };
      return (
        me.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in me.fx.speeds
              ? (r.duration = me.fx.speeds[r.duration])
              : (r.duration = me.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          de(r.old) && r.old.call(this), r.queue && me.dequeue(this, r.queue);
        }),
        r
      );
    }),
    me.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Ie)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = me.isEmptyObject(e),
          o = me.speed(t, n, r),
          s = function () {
            var t = V(this, me.extend({}, e), o);
            (i || qe.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = me.timers,
              s = qe.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else for (i in s) s[i] && s[i].stop && mt.test(i) && r(s[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || me.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = qe.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = me.timers,
              s = r ? r.length : 0;
            for (
              n.finish = !0,
                me.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    me.each(["toggle", "show", "hide"], function (e, t) {
      var n = me.fn[t];
      me.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(W(t, !0), e, r, i);
      };
    }),
    me.each(
      {
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        me.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (me.timers = []),
    (me.fx.tick = function () {
      var e,
        t = 0,
        n = me.timers;
      for (ft = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || me.fx.stop(), (ft = void 0);
    }),
    (me.fx.timer = function (e) {
      me.timers.push(e), me.fx.start();
    }),
    (me.fx.interval = 13),
    (me.fx.start = function () {
      ht || ((ht = !0), $());
    }),
    (me.fx.stop = function () {
      ht = null;
    }),
    (me.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (me.fn.delay = function (t, n) {
      return (
        (t = me.fx ? me.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = he.createElement("input"),
        t = he.createElement("select").appendChild(he.createElement("option"));
      (e.type = "checkbox"),
        (le.checkOn = "" !== e.value),
        (le.optSelected = t.selected),
        ((e = he.createElement("input")).value = "t"),
        (e.type = "radio"),
        (le.radioValue = "t" === e.value);
    })();
  var wt,
    gt = me.expr.attrHandle;
  me.fn.extend({
    attr: function (e, t) {
      return Ee(this, me.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        me.removeAttr(this, e);
      });
    },
  }),
    me.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? me.prop(e, t, n)
            : ((1 === o && me.isXMLDoc(e)) ||
                (i =
                  me.attrHooks[t.toLowerCase()] ||
                  (me.expr.match.bool.test(t) ? wt : void 0)),
              void 0 !== n
                ? null === n
                  ? void me.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = me.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(ze);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (wt = {
      set: function (e, t, n) {
        return !1 === t ? me.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    me.each(me.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = gt[t] || me.find.attr;
      gt[t] = function (e, t, r) {
        var i,
          o,
          s = t.toLowerCase();
        return (
          r ||
            ((o = gt[s]),
            (gt[s] = i),
            (i = null != n(e, t, r) ? s : null),
            (gt[s] = o)),
          i
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    bt = /^(?:a|area)$/i;
  me.fn.extend({
    prop: function (e, t) {
      return Ee(this, me.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[me.propFix[e] || e];
      });
    },
  }),
    me.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && me.isXMLDoc(e)) ||
              ((t = me.propFix[t] || t), (i = me.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = me.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (me.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    me.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        me.propFix[this.toLowerCase()] = this;
      }
    ),
    me.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          c = 0;
        if (de(e))
          return this.each(function (t) {
            me(this).addClass(e.call(this, t, Y(this)));
          });
        if ((t = X(e)).length)
          for (; (n = this[c++]); )
            if (((i = Y(n)), (r = 1 === n.nodeType && " " + U(i) + " "))) {
              for (s = 0; (o = t[s++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (a = U(r)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          c = 0;
        if (de(e))
          return this.each(function (t) {
            me(this).removeClass(e.call(this, t, Y(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = X(e)).length)
          for (; (n = this[c++]); )
            if (((i = Y(n)), (r = 1 === n.nodeType && " " + U(i) + " "))) {
              for (s = 0; (o = t[s++]); )
                for (; r.indexOf(" " + o + " ") > -1; )
                  r = r.replace(" " + o + " ", " ");
              i !== (a = U(r)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : de(e)
          ? this.each(function (n) {
              me(this).toggleClass(e.call(this, n, Y(this), t), t);
            })
          : this.each(function () {
              var t, i, o, s;
              if (r)
                for (i = 0, o = me(this), s = X(e); (t = s[i++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = Y(this)) && qe.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : qe.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && (" " + U(Y(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  me.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = de(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, me(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = me.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  me.valHooks[this.type] ||
                  me.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            me.valHooks[i.type] || me.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(yt, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    me.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = me.find.attr(e, "value");
            return null != t ? t : U(me.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              c = a ? null : [],
              u = a ? s + 1 : i.length;
            for (r = s < 0 ? u : a ? s : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === s) &&
                !n.disabled &&
                (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
              ) {
                if (((t = me(n).val()), a)) return t;
                c.push(t);
              }
            return c;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = me.makeArray(t), s = i.length;
              s--;

            )
              ((r = i[s]).selected =
                me.inArray(me.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    me.each(["radio", "checkbox"], function () {
      (me.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = me.inArray(me(e).val(), t) > -1);
        },
      }),
        le.checkOn ||
          (me.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (le.focusin = "onfocusin" in e);
  var _t = /^(?:focusinfocus|focusoutblur)$/,
    kt = function (e) {
      e.stopPropagation();
    };
  me.extend(me.event, {
    trigger: function (t, n, r, i) {
      var o,
        s,
        a,
        c,
        u,
        l,
        d,
        f,
        h = [r || he],
        p = ae.call(t, "type") ? t.type : t,
        m = ae.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = f = a = r = r || he),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !_t.test(p + me.event.triggered) &&
          (p.indexOf(".") > -1 && ((p = (m = p.split(".")).shift()), m.sort()),
          (u = p.indexOf(":") < 0 && "on" + p),
          (t = t[me.expando] ? t : new me.Event(p, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = m.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : me.makeArray(n, [t])),
          (d = me.event.special[p] || {}),
          i || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!i && !d.noBubble && !fe(r)) {
          for (
            c = d.delegateType || p, _t.test(c + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            h.push(s), (a = s);
          a === (r.ownerDocument || he) &&
            h.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
          (f = s),
            (t.type = o > 1 ? c : d.bindType || p),
            (l =
              (qe.get(s, "events") || Object.create(null))[t.type] &&
              qe.get(s, "handle")) && l.apply(s, n),
            (l = u && s[u]) &&
              l.apply &&
              je(s) &&
              ((t.result = l.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = p),
          i ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(h.pop(), n)) ||
            !je(r) ||
            (u &&
              de(r[p]) &&
              !fe(r) &&
              ((a = r[u]) && (r[u] = null),
              (me.event.triggered = p),
              t.isPropagationStopped() && f.addEventListener(p, kt),
              r[p](),
              t.isPropagationStopped() && f.removeEventListener(p, kt),
              (me.event.triggered = void 0),
              a && (r[u] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = me.extend(new me.Event(), n, { type: e, isSimulated: !0 });
      me.event.trigger(r, null, t);
    },
  }),
    me.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          me.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return me.event.trigger(e, t, n, !0);
      },
    }),
    le.focusin ||
      me.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          me.event.simulate(t, e.target, me.event.fix(e));
        };
        me.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              i = qe.access(r, t);
            i || r.addEventListener(e, n, !0), qe.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              i = qe.access(r, t) - 1;
            i
              ? qe.access(r, t, i)
              : (r.removeEventListener(e, n, !0), qe.remove(r, t));
          },
        };
      });
  var xt = e.location,
    Ct = { guid: Date.now() },
    zt = /\?/;
  me.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        me.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Tt = /\r?\n/g,
    Et = /^(?:submit|button|image|reset|file)$/i,
    Mt = /^(?:input|select|textarea|keygen)/i;
  (me.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = de(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !me.isPlainObject(e)))
      me.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) J(n, e[n], t, i);
    return r.join("&");
  }),
    me.fn.extend({
      serialize: function () {
        return me.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = me.prop(this, "elements");
          return e ? me.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !me(this).is(":disabled") &&
              Mt.test(this.nodeName) &&
              !Et.test(e) &&
              (this.checked || !Re.test(e))
            );
          })
          .map(function (e, t) {
            var n = me(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? me.map(n, function (e) {
                  return { name: t.name, value: e.replace(Tt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Tt, "\r\n") };
          })
          .get();
      },
    });
  var At = /%20/g,
    jt = /#.*$/,
    qt = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    Lt = /^\/\//,
    Nt = {},
    Ht = {},
    Dt = "*/".concat("*"),
    Ot = he.createElement("a");
  (Ot.href = xt.href),
    me.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            xt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Dt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": me.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Q(Q(e, me.ajaxSettings), t) : Q(me.ajaxSettings, e);
      },
      ajaxPrefilter: Z(Nt),
      ajaxTransport: Z(Ht),
      ajax: function (t, n) {
        function r(t, n, r, a) {
          var u,
            f,
            h,
            y,
            _,
            k = n;
          l ||
            ((l = !0),
            c && e.clearTimeout(c),
            (i = void 0),
            (s = a || ""),
            (x.readyState = t > 0 ? 4 : 0),
            (u = (t >= 200 && t < 300) || 304 === t),
            r &&
              (y = (function (e, t, n) {
                for (
                  var r, i, o, s, a = e.contents, c = e.dataTypes;
                  "*" === c[0];

                )
                  c.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      c.unshift(i);
                      break;
                    }
                if (c[0] in n) o = c[0];
                else {
                  for (i in n) {
                    if (!c[0] || e.converters[i + " " + c[0]]) {
                      o = i;
                      break;
                    }
                    s || (s = i);
                  }
                  o = o || s;
                }
                if (o) return o !== c[0] && c.unshift(o), n[o];
              })(p, x, r)),
            !u &&
              me.inArray("script", p.dataTypes) > -1 &&
              (p.converters["text script"] = function () {}),
            (y = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                c,
                u = {},
                l = e.dataTypes.slice();
              if (l[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
              for (o = l.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (c = o),
                  (o = l.shift()))
                )
                  if ("*" === o) o = c;
                  else if ("*" !== c && c !== o) {
                    if (!(s = u[c + " " + o] || u["* " + o]))
                      for (i in u)
                        if (
                          (a = i.split(" "))[1] === o &&
                          (s = u[c + " " + a[0]] || u["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = u[i])
                            : !0 !== u[i] && ((o = a[0]), l.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + c + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(p, y, x, u)),
            u
              ? (p.ifModified &&
                  ((_ = x.getResponseHeader("Last-Modified")) &&
                    (me.lastModified[o] = _),
                  (_ = x.getResponseHeader("etag")) && (me.etag[o] = _)),
                204 === t || "HEAD" === p.type
                  ? (k = "nocontent")
                  : 304 === t
                  ? (k = "notmodified")
                  : ((k = y.state), (f = y.data), (u = !(h = y.error))))
              : ((h = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
            (x.status = t),
            (x.statusText = (n || k) + ""),
            u ? g.resolveWith(m, [f, k, x]) : g.rejectWith(m, [x, k, h]),
            x.statusCode(b),
            (b = void 0),
            d && w.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? f : h]),
            v.fireWith(m, [x, k]),
            d &&
              (w.trigger("ajaxComplete", [x, p]),
              --me.active || me.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          s,
          a,
          c,
          u,
          l,
          d,
          f,
          h,
          p = me.ajaxSetup({}, n),
          m = p.context || p,
          w = p.context && (m.nodeType || m.jquery) ? me(m) : me.event,
          g = me.Deferred(),
          v = me.Callbacks("once memory"),
          b = p.statusCode || {},
          y = {},
          _ = {},
          k = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (l) {
                if (!a)
                  for (a = {}; (t = Pt.exec(s)); )
                    a[t[1].toLowerCase() + " "] = (
                      a[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return l ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == l &&
                  ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                  (y[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == l && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (l) x.always(e[x.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || k;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          (g.promise(x),
          (p.url = ((t || p.url || xt.href) + "").replace(
            Lt,
            xt.protocol + "//"
          )),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(ze) || [""]),
          null == p.crossDomain)
        ) {
          u = he.createElement("a");
          try {
            (u.href = p.url),
              (u.href = u.href),
              (p.crossDomain =
                Ot.protocol + "//" + Ot.host != u.protocol + "//" + u.host);
          } catch (e) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = me.param(p.data, p.traditional)),
          G(Nt, p, n, x),
          l)
        )
          return x;
        (d = me.event && p.global) &&
          0 == me.active++ &&
          me.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !Ft.test(p.type)),
          (o = p.url.replace(jt, "")),
          p.hasContent
            ? p.data &&
              p.processData &&
              0 ===
                (p.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (p.data = p.data.replace(At, "+"))
            : ((h = p.url.slice(o.length)),
              p.data &&
                (p.processData || "string" == typeof p.data) &&
                ((o += (zt.test(o) ? "&" : "?") + p.data), delete p.data),
              !1 === p.cache &&
                ((o = o.replace(qt, "$1")),
                (h = (zt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + h)),
              (p.url = o + h)),
          p.ifModified &&
            (me.lastModified[o] &&
              x.setRequestHeader("If-Modified-Since", me.lastModified[o]),
            me.etag[o] && x.setRequestHeader("If-None-Match", me.etag[o])),
          ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
            x.setRequestHeader("Content-Type", p.contentType),
          x.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + Dt + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (f in p.headers) x.setRequestHeader(f, p.headers[f]);
        if (p.beforeSend && (!1 === p.beforeSend.call(m, x, p) || l))
          return x.abort();
        if (
          ((k = "abort"),
          v.add(p.complete),
          x.done(p.success),
          x.fail(p.error),
          (i = G(Ht, p, n, x)))
        ) {
          if (((x.readyState = 1), d && w.trigger("ajaxSend", [x, p]), l))
            return x;
          p.async &&
            p.timeout > 0 &&
            (c = e.setTimeout(function () {
              x.abort("timeout");
            }, p.timeout));
          try {
            (l = !1), i.send(y, r);
          } catch (e) {
            if (l) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return x;
      },
      getJSON: function (e, t, n) {
        return me.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return me.get(e, void 0, t, "script");
      },
    }),
    me.each(["get", "post"], function (e, t) {
      me[t] = function (e, n, r, i) {
        return (
          de(n) && ((i = i || r), (r = n), (n = void 0)),
          me.ajax(
            me.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              me.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    me.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (me._evalUrl = function (e, t, n) {
      return me.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          me.globalEval(e, t, n);
        },
      });
    }),
    me.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (de(e) && (e = e.call(this[0])),
            (t = me(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return de(e)
          ? this.each(function (t) {
              me(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = me(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = de(e);
        return this.each(function (n) {
          me(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              me(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (me.expr.pseudos.hidden = function (e) {
      return !me.expr.pseudos.visible(e);
    }),
    (me.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (me.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = me.ajaxSettings.xhr();
  (le.cors = !!$t && "withCredentials" in $t),
    (le.ajax = $t = !!$t),
    me.ajaxTransport(function (t) {
      var n, r;
      if (le.cors || ($t && !t.crossDomain))
        return {
          send: function (i, o) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (s in i) a.setRequestHeader(s, i[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        Bt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (r = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = r)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    me.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    me.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return me.globalEval(e), e;
        },
      },
    }),
    me.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    me.ajaxTransport("script", function (e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, n;
        return {
          send: function (r, i) {
            (t = me("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              he.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var It = [],
    Wt = /(=)\?(?=&|$)|\?\?/;
  me.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = It.pop() || me.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    me.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (Wt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Wt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            de(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Wt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (zt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return s || me.error(i + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            s = arguments;
          }),
          r.always(function () {
            void 0 === o ? me(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), It.push(i)),
              s && de(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument = (function () {
      var e = he.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (me.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var r, i, o;
      return (
        t ||
          (le.createHTMLDocument
            ? (((r = (t =
                he.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = he.location.href),
              t.head.appendChild(r))
            : (t = he)),
        (i = ye.exec(e)),
        (o = !n && []),
        i
          ? [t.createElement(i[1])]
          : ((i = _([e], t, o)),
            o && o.length && me(o).remove(),
            me.merge([], i.childNodes))
      );
    }),
    (me.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((r = U(e.slice(a))), (e = e.slice(0, a))),
        de(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        s.length > 0 &&
          me
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(r ? me("<div>").append(me.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (me.expr.pseudos.animated = function (e) {
      return me.grep(me.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (me.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          c,
          u = me.css(e, "position"),
          l = me(e),
          d = {};
        "static" === u && (e.style.position = "relative"),
          (a = l.offset()),
          (o = me.css(e, "top")),
          (c = me.css(e, "left")),
          ("absolute" === u || "fixed" === u) && (o + c).indexOf("auto") > -1
            ? ((s = (r = l.position()).top), (i = r.left))
            : ((s = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
          de(t) && (t = t.call(e, n, me.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + i),
          "using" in t
            ? t.using.call(e, d)
            : ("number" == typeof d.top && (d.top += "px"),
              "number" == typeof d.left && (d.left += "px"),
              l.css(d));
      },
    }),
    me.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                me.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === me.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === me.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = me(e).offset()).top += me.css(e, "borderTopWidth", !0)),
              (i.left += me.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - me.css(r, "marginTop", !0),
            left: t.left - i.left - me.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === me.css(e, "position");

          )
            e = e.offsetParent;
          return e || Oe;
        });
      },
    }),
    me.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function (r) {
          return Ee(
            this,
            function (e, r, i) {
              var o;
              if (
                (fe(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    me.each(["top", "left"], function (e, t) {
      me.cssHooks[t] = L(le.pixelPosition, function (e, n) {
        if (n)
          return (n = F(e, t)), tt.test(n) ? me(e).position()[t] + "px" : n;
      });
    }),
    me.each({ Height: "height", Width: "width" }, function (e, t) {
      me.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          me.fn[r] = function (i, o) {
            var s = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");
            return Ee(
              this,
              function (t, n, i) {
                var o;
                return fe(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? me.css(t, n, a)
                  : me.style(t, n, i, a);
              },
              t,
              s ? i : void 0,
              s
            );
          };
        }
      );
    }),
    me.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        me.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    me.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    me.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        me.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (me.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), de(e)))
      return (
        (r = te.call(arguments, 2)),
        (i = function () {
          return e.apply(t || this, r.concat(te.call(arguments)));
        }),
        (i.guid = e.guid = e.guid || me.guid++),
        i
      );
  }),
    (me.holdReady = function (e) {
      e ? me.readyWait++ : me.ready(!0);
    }),
    (me.isArray = Array.isArray),
    (me.parseJSON = JSON.parse),
    (me.nodeName = o),
    (me.isFunction = de),
    (me.isWindow = fe),
    (me.camelCase = h),
    (me.type = r),
    (me.now = Date.now),
    (me.isNumeric = function (e) {
      var t = me.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (me.trim = function (e) {
      return null == e ? "" : (e + "").replace(Rt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return me;
      });
  var Vt = e.jQuery,
    Ut = e.$;
  return (
    (me.noConflict = function (t) {
      return (
        e.$ === me && (e.$ = Ut), t && e.jQuery === me && (e.jQuery = Vt), me
      );
    }),
    void 0 === t && (e.jQuery = e.$ = me),
    me
  );
}),
  (function (e) {
    "use strict";
    (e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        r = this;
      e(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      return (
        setTimeout(function () {
          n || e(r).trigger(e.support.transition.end);
        }, t),
        this
      );
    }),
      e(function () {
        (e.support.transition = (function () {
          var e = document.createElement("bootstrap"),
            t = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
          return !1;
        })()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    (e.fn.fitVids = function (t) {
      var n = { customSelector: null, ignore: null };
      if (!document.getElementById("fit-vids-style")) {
        var r = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("div");
        (i.innerHTML =
          '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
          r.appendChild(i.childNodes[1]);
      }
      return (
        t && e.extend(n, t),
        this.each(function () {
          var t = [
            'iframe[src*="player.vimeo.com"]',
            'iframe[src*="youtube.com"]',
            'iframe[src*="youtube-nocookie.com"]',
            'iframe[src*="kickstarter.com"][src*="video.html"]',
            "object",
            "embed",
          ];
          n.customSelector && t.push(n.customSelector);
          var r = ".fitvidsignore";
          n.ignore && (r = r + ", " + n.ignore);
          var i = e(this).find(t.join(","));
          (i = (i = i.not("object object")).not(r)).each(function () {
            var t = e(this);
            if (
              !(
                t.parents(r).length > 0 ||
                ("embed" === this.tagName.toLowerCase() &&
                  t.parent("object").length) ||
                t.parent(".fluid-width-video-wrapper").length
              )
            ) {
              t.css("height") ||
                t.css("width") ||
                (!isNaN(t.attr("height")) && !isNaN(t.attr("width"))) ||
                (t.attr("height", 9), t.attr("width", 16));
              var n =
                ("object" === this.tagName.toLowerCase() ||
                (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)))
                  ? parseInt(t.attr("height"), 10)
                  : t.height()) /
                (isNaN(parseInt(t.attr("width"), 10))
                  ? t.width()
                  : parseInt(t.attr("width"), 10));
              if (!t.attr("name")) {
                var i = "fitvid" + e.fn.fitVids._count;
                t.attr("name", i), e.fn.fitVids._count++;
              }
              t
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * n + "%"),
                t.removeAttr("height").removeAttr("width");
            }
          });
        })
      );
    }),
      (e.fn.fitVids._count = 0);
  })(window.jQuery || window.Zepto),
  (function (e) {
    "use strict";
    function t(e, t) {
      var n =
        "icon icon--" +
        e +
        " " +
        ((t = t || {}).size ? "icon--" + t.size : "") +
        " " +
        (t.class || "");
      return (
        "<div class='" +
        n +
        "'>" +
        (function (e, t) {
          return t.indexOf("spinner") > -1
            ? "<div class='icon__spinner'>" + e + "</div>"
            : e;
        })(
          "<svg class='icon__cnt'><use xlink:href='#" + e + "-icon' /></svg>",
          n
        ) +
        "</div>"
      );
    }
    e.addEventListener("DOMContentLoaded", function () {
      e
        .querySelector("body")
        .insertAdjacentHTML(
          "afterbegin",
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ei-sprite" style="display:none"><symbol id=\'ei-archive-icon\' viewBox=\'0 0 50 50\'><path d="M42 20h-2v-5c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1v5H8v-5c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v5z"></path><path d="M37 40H13c-1.7 0-3-1.3-3-3V20h2v17c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V20h2v17c0 1.7-1.3 3-3 3z"></path><path d="M29 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path d="M8 18h34v2H8z"></path></symbol><symbol id=\'ei-arrow-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25 34.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path><path d="M24 16h2v17h-2z"></path></symbol><symbol id=\'ei-arrow-left-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"></path><path d="M17 24h17v2H17z"></path></symbol><symbol id=\'ei-arrow-right-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M24.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"></path><path d="M16 24h17v2H16z"></path></symbol><symbol id=\'ei-arrow-up-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M33.3 26.7L25 18.4l-8.3 8.3-1.4-1.4 9.7-9.7 9.7 9.7z"></path><path d="M24 17h2v17h-2z"></path></symbol><symbol id=\'ei-bell-icon\' viewBox=\'0 0 50 50\'><path d="M42 36c-6.5 0-7.4-6.3-8.2-11.9C32.9 17.9 32.1 12 25 12s-7.9 5.9-8.8 12.1C15.4 29.7 14.5 36 8 36v-2c4.6 0 5.3-3.9 6.2-10.1.9-6.2 2-13.9 10.8-13.9s9.9 7.7 10.8 13.9C36.7 30.1 37.4 34 42 34v2z"></path><path d="M25 40c-2.8 0-5-2.2-5-5h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 2.8-2.2 5-5 5z"></path><path d="M8 34h34v2H8z"></path><path d="M27 10c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5.9-2 2-2 2 .9 2 2z"></path></symbol><symbol id=\'ei-calendar-icon\' viewBox=\'0 0 50 50\'><path d="M37 38H13c-1.7 0-3-1.3-3-3V13c0-1.7 1.1-3 2.5-3H14v2h-1.5c-.2 0-.5.4-.5 1v22c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V13c0-.6-.3-1-.5-1H36v-2h1.5c1.4 0 2.5 1.3 2.5 3v22c0 1.7-1.3 3-3 3z"></path><path d="M17 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z"></path><path d="M33 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z"></path><path d="M20 10h10v2H20z"></path><path d="M12 16h26v2H12z"></path><path d="M34 20h2v2h-2z"></path><path d="M30 20h2v2h-2z"></path><path d="M26 20h2v2h-2z"></path><path d="M22 20h2v2h-2z"></path><path d="M18 20h2v2h-2z"></path><path d="M34 24h2v2h-2z"></path><path d="M30 24h2v2h-2z"></path><path d="M26 24h2v2h-2z"></path><path d="M22 24h2v2h-2z"></path><path d="M18 24h2v2h-2z"></path><path d="M14 24h2v2h-2z"></path><path d="M34 28h2v2h-2z"></path><path d="M30 28h2v2h-2z"></path><path d="M26 28h2v2h-2z"></path><path d="M22 28h2v2h-2z"></path><path d="M18 28h2v2h-2z"></path><path d="M14 28h2v2h-2z"></path><path d="M30 32h2v2h-2z"></path><path d="M26 32h2v2h-2z"></path><path d="M22 32h2v2h-2z"></path><path d="M18 32h2v2h-2z"></path><path d="M14 32h2v2h-2z"></path></symbol><symbol id=\'ei-camera-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><circle cx="35" cy="18" r="1"></circle><path d="M12 12h4v1h-4z"></path><path d="M25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z"></path></symbol><symbol id=\'ei-cart-icon\' viewBox=\'0 0 50 50\'><path d="M35 34H13c-.3 0-.6-.2-.8-.4s-.2-.6-.1-.9l1.9-4.8L12.1 10H6V8h7c.5 0 .9.4 1 .9l2 19c0 .2 0 .3-.1.5L14.5 32H36l-1 2z"></path><path d="M15.2 29l-.4-2L38 22.2V14H14v-2h25c.6 0 1 .4 1 1v10c0 .5-.3.9-.8 1l-24 5z"></path><path d="M36 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M12 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id=\'ei-chart-icon\' viewBox=\'0 0 50 50\'><path d="M18 36h-2V26h-4v10h-2V24h8z"></path><path d="M28 36h-2V20h-4v16h-2V18h8z"></path><path d="M38 36h-2V14h-4v22h-2V12h8z"></path><path d="M8 36h32v2H8z"></path></symbol><symbol id=\'ei-check-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M23 32.4l-8.7-8.7 1.4-1.4 7.3 7.3 11.3-11.3 1.4 1.4z"></path></symbol><symbol id=\'ei-chevron-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 32.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path></symbol><symbol id=\'ei-chevron-left-icon\' viewBox=\'0 0 50 50\'><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"></path></symbol><symbol id=\'ei-chevron-right-icon\' viewBox=\'0 0 50 50\'><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"></path></symbol><symbol id=\'ei-chevron-up-icon\' viewBox=\'0 0 50 50\'><path d="M33.3 28.7L25 20.4l-8.3 8.3-1.4-1.4 9.7-9.7 9.7 9.7z"></path></symbol><symbol id=\'ei-clock-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M30.3 33.7L24 27.4V16h2v10.6l5.7 5.7z"></path></symbol><symbol id=\'ei-close-o-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M32.283 16.302l1.414 1.415-15.98 15.98-1.414-1.414z"></path><path d="M17.717 16.302l15.98 15.98-1.414 1.415-15.98-15.98z"></path></symbol><symbol id=\'ei-close-icon\' viewBox=\'0 0 50 50\'><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path></symbol><symbol id=\'ei-comment-icon\' viewBox=\'0 0 50 50\'><path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12 0 6.4 3.9 9.4 7.2 10.7l.7.3-.1.8c-.2 1.6-.5 3-1.1 4.2 3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z"></path></symbol><symbol id=\'ei-credit-card-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M9 16h32v6H9z"></path><path d="M12 26h1v2h-1z"></path><path d="M14 26h1v2h-1z"></path><path d="M16 26h1v2h-1z"></path><path d="M19 26h1v2h-1z"></path><path d="M21 26h1v2h-1z"></path><path d="M23 26h1v2h-1z"></path><path d="M26 26h1v2h-1z"></path><path d="M28 26h1v2h-1z"></path><path d="M30 26h1v2h-1z"></path><path d="M33 26h1v2h-1z"></path><path d="M35 26h1v2h-1z"></path><path d="M37 26h1v2h-1z"></path></symbol><symbol id=\'ei-envelope-icon\' viewBox=\'0 0 50 50\'><path opacity=".9" d="M31.796 24.244l9.97 9.97-1.415 1.414-9.97-9.97z"></path><path opacity=".9" d="M18.278 24.287l1.414 1.414-9.9 9.9-1.414-1.41z"></path><path d="M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4 12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5 1.4 1.4-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z"></path><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path></symbol><symbol id=\'ei-exclamation-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M24 32h2v2h-2z"></path><path d="M25.6 30h-1.2l-.4-8v-6h2v6z"></path></symbol><symbol id=\'ei-external-link-icon\' viewBox=\'0 0 50 50\'><path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path><path d="M40 20h-2v-8h-8v-2h10z"></path><path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path></symbol><symbol id=\'ei-eye-icon\' viewBox=\'0 0 50 50\'><path d="M25 36C13.5 36 8.3 25.9 8.1 25.4c-.1-.3-.1-.6 0-.9C8.3 24.1 13.5 14 25 14s16.7 10.1 16.9 10.6c.1.3.1.6 0 .9-.2.4-5.4 10.5-16.9 10.5zM10.1 25c1.1 1.9 5.9 9 14.9 9s13.7-7.1 14.9-9c-1.1-1.9-5.9-9-14.9-9s-13.7 7.1-14.9 9z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><path d="M25 30c-2.8 0-5-2.2-5-5 0-.6.4-1 1-1s1 .4 1 1c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3c-.6 0-1-.4-1-1s.4-1 1-1c2.8 0 5 2.2 5 5s-2.2 5-5 5z"></path></symbol><symbol id=\'ei-gear-icon\' viewBox=\'0 0 50 50\'><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><path d="M27.7 44h-5.4l-1.5-4.6c-1-.3-2-.7-2.9-1.2l-4.4 2.2-3.8-3.8 2.2-4.4c-.5-.9-.9-1.9-1.2-2.9L6 27.7v-5.4l4.6-1.5c.3-1 .7-2 1.2-2.9l-2.2-4.4 3.8-3.8 4.4 2.2c.9-.5 1.9-.9 2.9-1.2L22.3 6h5.4l1.5 4.6c1 .3 2 .7 2.9 1.2l4.4-2.2 3.8 3.8-2.2 4.4c.5.9.9 1.9 1.2 2.9l4.6 1.5v5.4l-4.6 1.5c-.3 1-.7 2-1.2 2.9l2.2 4.4-3.8 3.8-4.4-2.2c-.9.5-1.9.9-2.9 1.2L27.7 44zm-4-2h2.6l1.4-4.3.5-.1c1.2-.3 2.3-.8 3.4-1.4l.5-.3 4 2 1.8-1.8-2-4 .3-.5c.6-1 1.1-2.2 1.4-3.4l.1-.5 4.3-1.4v-2.6l-4.3-1.4-.1-.5c-.3-1.2-.8-2.3-1.4-3.4l-.3-.5 2-4-1.8-1.8-4 2-.5-.3c-1.1-.6-2.2-1.1-3.4-1.4l-.5-.1L26.3 8h-2.6l-1.4 4.3-.5.1c-1.2.3-2.3.8-3.4 1.4l-.5.3-4-2-1.8 1.8 2 4-.3.5c-.6 1-1.1 2.2-1.4 3.4l-.1.5L8 23.7v2.6l4.3 1.4.1.5c.3 1.2.8 2.3 1.4 3.4l.3.5-2 4 1.8 1.8 4-2 .5.3c1.1.6 2.2 1.1 3.4 1.4l.5.1 1.4 4.3z"></path></symbol><symbol id=\'ei-heart-icon\' viewBox=\'0 0 50 50\'><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"></path></symbol><symbol id=\'ei-image-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M35.3 37.7L19 22.4 9.7 31l-1.4-1.4 10.7-10 17.7 16.7z"></path><path d="M40.4 32.7L35 28.3 30.5 32l-1.3-1.6 5.8-4.7 6.6 5.4z"></path></symbol><symbol id=\'ei-like-icon\' viewBox=\'0 0 50 50\'><path d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5 0-5.8-1.6-7-3-7-.9 0-1.6.1-2.5.6-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9 1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3 0-.3 0-.5-.1-.7 1.2-.5 2.1-1.5 2.1-2.8 0-.6-.1-1.1-.3-1.6.8-.5 1.5-1.4 1.5-2.4 0-.6-.3-1.2-.6-1.7.8-.6 1.4-1.6 1.4-2.6zm-2.1 0c0 1.3-1.3 1.4-1.5 2-.2.7.8.9.8 2.1 0 1.2-1.5 1.2-1.7 1.9-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5-.3.5 0 .7 0 1.8 0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1.2 0 1 1.2 1 5 0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2z"></path><path d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm-6-16v14h6V22h-6z"></path></symbol><symbol id=\'ei-link-icon\' viewBox=\'0 0 50 50\'><path d="M24 30.2c0 .2.1.5.1.8 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-2.8 0-5.1-2.3-5.1-5.1 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5.3 0 .5 0 .8.1l1.5-1.5c-.7-.3-1.5-.4-2.3-.4-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 3.8 3.1 6.9 6.9 6.9 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-.8-.1-1.6-.4-2.3L24 30.2z"></path><path d="M33 10.1c-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 .8.1 1.6.4 2.3l1.5-1.5c0-.2-.1-.5-.1-.8 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5 2.8 0 5.1 2.3 5.1 5.1 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-.3 0-.5 0-.8-.1l-1.5 1.5c.7.3 1.5.4 2.3.4 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-3.8-3.1-6.9-6.9-6.9z"></path><path d="M20 31c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z"></path></symbol><symbol id=\'ei-location-icon\' viewBox=\'0 0 50 50\'><path d="M25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7l-.8.8zM25 8c-6.1 0-11 4.9-11 11 0 6.4 8.4 17.2 11 20.4 2.6-3.2 11-14 11-20.4 0-6.1-4.9-11-11-11z"></path><path d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path></symbol><symbol id=\'ei-lock-icon\' viewBox=\'0 0 50 50\'><path d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9v4z"></path><path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z"></path><circle cx="25" cy="28" r="2"></circle><path d="M25.5 28h-1l-1 6h3z"></path></symbol><symbol id=\'ei-minus-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M16 24h18v2H16z"></path></symbol><symbol id=\'ei-navicon-icon\' viewBox=\'0 0 50 50\'><path d="M10 12h30v4H10z"></path><path d="M10 22h30v4H10z"></path><path d="M10 32h30v4H10z"></path></symbol><symbol id=\'ei-paperclip-icon\' viewBox=\'0 0 50 50\'><path d="M13.8 39.6c-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5l17-17c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3L25.1 36.4 23.7 35l12.7-12.7c2.3-2.3 2.3-6.1 0-8.5-2.3-2.3-6.1-2.3-8.5 0l-17 17c-.8.8-1.2 1.8-1.2 2.8 0 1.1.4 2.1 1.2 2.8 1.6 1.6 4.1 1.6 5.7 0l12.7-12.7c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L18 29.3l-1.4-1.4 8.5-8.5c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L18 37.8c-1.1 1.2-2.7 1.8-4.2 1.8z"></path></symbol><symbol id=\'ei-pencil-icon\' viewBox=\'0 0 50 50\'><path d="M9.6 40.4l2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9l-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z"></path><path d="M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z"></path><path d="M29.298 19.287l1.414 1.414-13.01 13.02-1.414-1.41z"></path><path d="M11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39z"></path><path d="M35 22.4L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z"></path></symbol><symbol id=\'ei-play-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M20 33.7V16.3L35 25l-15 8.7zm2-14v10.5l9-5.3-9-5.2z"></path></symbol><symbol id=\'ei-plus-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M16 24h18v2H16z"></path><path d="M24 16h2v18h-2z"></path></symbol><symbol id=\'ei-pointer-icon\' viewBox=\'0 0 50 50\'><path d="M33 38H21c-.6 0-1-.4-1-1 0-1.5-.7-2.4-1.8-3.8-.6-.7-1.3-1.6-2-2.7-1.9-3-3.6-6.6-4-7.9-.4-1.3-.1-2.2.3-2.7.4-.6 1.2-.9 2.1-.9 1.2 0 2.4 1 3.5 2.3V11c0-1.7 1.3-3 3-3s3 1.3 3 3v4.2c.3-.1.6-.2 1-.2 1.1 0 2 .6 2.5 1.4.4-.3.9-.4 1.4-.4 1.4 0 2.5.9 2.9 2.2.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3v3c0 2.6-.5 4.7-1 6.7s-1 3.9-1 6.3c0 .6-.4 1-1 1zm-11.1-2H32c.1-2.2.6-4 1-5.8.5-2 1-3.9 1-6.2v-3c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-9c0-.6-.4-1-1-1s-1 .4-1 1v15c0 .6-.4 1-1 1s-1-.4-1-1v-.8c-.9-2.3-2.8-4.2-3.5-4.2-.2 0-.4 0-.5.1-.1.1-.1.4 0 .9.3 1.1 1.8 4.3 3.8 7.5.6 1 1.2 1.7 1.8 2.5 1.1 1.2 2.1 2.3 2.3 4z"></path></symbol><symbol id=\'ei-question-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M19.8 19.6c.3-.8.6-1.4 1.2-1.9.5-.5 1.1-.9 1.9-1.2s1.6-.4 2.5-.4c.7 0 1.4.1 2 .3.6.2 1.2.5 1.7.9s.9.9 1.1 1.5c.3.6.4 1.3.4 2 0 1-.2 1.8-.6 2.5s-1 1.3-1.6 2l-1.3 1.3c-.3.3-.6.6-.7.9-.2.3-.3.7-.3 1.1-.1.4-.1.7-.1 1.5h-1.6c0-.8 0-1.1.1-1.7.1-.5.3-1 .5-1.5.2-.4.5-.8.9-1.2.4-.4.9-.8 1.4-1.4.5-.5.9-1 1.2-1.5s.5-1.2.5-1.8c0-.5-.1-1-.3-1.4-.2-.4-.5-.8-.8-1.1-.3-.3-.7-.5-1.2-.7-.5-.2-.9-.3-1.4-.3-.7 0-1.3.1-1.8.4-.5.2-1 .6-1.3 1-.3.4-.6.9-.8 1.5s-.4.9-.4 1.6h-1.6c0-.9.1-1.6.4-2.4zM26 32v2h-2v-2h2z"></path></symbol><symbol id=\'ei-redo-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-7.2 0-13-5.8-13-13s5.8-13 13-13c5.4 0 10.1 3.4 11.9 8.7l-1.9.7c-1.5-4.6-5.4-7.4-10-7.4-6.1 0-11 4.9-11 11s4.9 11 11 11c4.3 0 8.2-2.5 10-6.4l1.8.8C34.7 35 30.1 38 25 38z"></path><path d="M38 22h-8v-2h6v-6h2z"></path></symbol><symbol id=\'ei-refresh-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z"></path><path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z"></path><path d="M18 24h-2v-6h-6v-2h8z"></path><path d="M40 34h-8v-8h2v6h6z"></path></symbol><symbol id=\'ei-retweet-icon\' viewBox=\'0 0 50 50\'><path d="M38 35h-2V17c0-.6-.4-1-1-1H18v-2h17c1.7 0 3 1.3 3 3v18z"></path><path d="M37 36.5l-6.8-7.8 1.6-1.4 5.2 6.2 5.2-6.2 1.6 1.4z"></path><path d="M32 36H15c-1.7 0-3-1.3-3-3V15h2v18c0 .6.4 1 1 1h17v2z"></path><path d="M18.2 22.7L13 16.5l-5.2 6.2-1.6-1.4 6.8-7.8 6.8 7.8z"></path></symbol><symbol id=\'ei-sc-facebook-icon\' viewBox=\'0 0 50 50\'><path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path></symbol><symbol id=\'ei-sc-github-icon\' viewBox=\'0 0 50 50\'><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"></path></symbol><symbol id=\'ei-sc-google-plus-icon\' viewBox=\'0 0 50 50\'><path d="M18 23v4.8h7.9c-.3 2.1-2.4 6-7.9 6-4.8 0-8.7-4-8.7-8.8s3.9-8.8 8.7-8.8c2.7 0 4.5 1.2 5.6 2.2l3.8-3.7C24.9 12.4 21.8 11 18 11c-7.7 0-14 6.3-14 14s6.3 14 14 14c8.1 0 13.4-5.7 13.4-13.7 0-.9-.1-1.6-.2-2.3H18z"></path><path d="M48 23h-4v-4h-4v4h-4v4h4v4h4v-4h4z"></path></symbol><symbol id=\'ei-sc-instagram-icon\' viewBox=\'0 0 50 50\'><path d="M25 12c-3.53 0-3.973.015-5.36.078-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5 6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36.063 1.384.283 2.329.604 3.155.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604 1.387.063 1.83.078 5.36.078 3.53 0 3.973-.015 5.36-.078 1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5 6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.387.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303 6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076 1.267.058 1.956.27 2.414.448.607.236 1.04.517 1.495.972.455.455.736.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495 4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972 4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076"></path><path d="M25 18a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0"></path></symbol><symbol id=\'ei-sc-linkedin-icon\' viewBox=\'0 0 50 50\'><path d="M36.1 12H13.9c-1.1 0-1.9.8-1.9 1.9v22.2c0 1 .9 1.9 1.9 1.9h22.2c1.1 0 1.9-.8 1.9-1.9V13.9c0-1.1-.9-1.9-1.9-1.9zM20 34h-4V22h4v12zm-2-13.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM34 34h-4v-6c0-1.6-.4-3.2-2-3.2s-2 1.6-2 3.2v6h-4V22h4v1.4h.2c.5-1 1.8-1.8 3.3-1.8 3.7 0 4.5 2.4 4.5 5.4v7z"></path></symbol><symbol id=\'ei-sc-odnoklassniki-icon\' viewBox=\'0 0 50 50\'><path d="M25 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-12.2c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2-1.9-4.2-4.2-4.2z"></path><path d="M33.6 26.8c-.7-.9-1.9-1-2.8-.4 0 0-2.2 1.6-5.8 1.6-3.6 0-5.8-1.6-5.8-1.6-.9-.7-2.1-.5-2.8.4-.7.9-.5 2.1.4 2.8.1.1 2.2 1.7 5.7 2.2l-5.3 5.4c-.8.8-.8 2.1 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5-5.1 5 5.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8l-5.3-5.4c3.5-.6 5.6-2.2 5.7-2.2.9-.7 1.1-2 .4-2.8z"></path></symbol><symbol id=\'ei-sc-pinterest-icon\' viewBox=\'0 0 50 50\'><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.4 4 11.8 9.5 14-.1-1.2-.2-3 .1-4.3.3-1.2 1.8-7.5 1.8-7.5s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 1.9 1 1.9 2.1 0 1.3-.8 3.2-1.2 5-.4 1.5.7 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.3-6.1-4.3 0-6.8 3.2-6.8 6.5 0 1.3.5 2.7 1.1 3.4.1.1.1.3.1.4-.1.5-.4 1.5-.4 1.7-.1.3-.2.3-.5.2-1.9-.9-3-3.6-3-5.8 0-4.7 3.4-9.1 9.9-9.1 5.2 0 9.2 3.7 9.2 8.7 0 5.2-3.3 9.3-7.8 9.3-1.5 0-2.9-.8-3.4-1.7 0 0-.8 2.9-.9 3.6-.3 1.3-1.3 2.9-1.9 3.9 1.4.5 2.9.7 4.4.7 8.3 0 15-6.7 15-15s-6.7-15-15-15z"></path></symbol><symbol id=\'ei-sc-skype-icon\' viewBox=\'0 0 50 50\'><path d="M38 27.3c.1-.8.2-1.6.2-2.4 0-1.8-.3-3.5-1-5.1-.7-1.6-1.6-3-2.8-4.2-1.2-1.2-2.6-2.2-4.2-2.8-1.6-.7-3.4-1-5.1-1-.8 0-1.7.1-2.5.2-1.1-.6-2.4-.9-3.7-.9-2.1 0-4.1.8-5.5 2.3-1.5 1.5-2.3 3.4-2.3 5.5 0 1.3.3 2.6 1 3.8-.1.7-.2 1.5-.2 2.3 0 1.8.3 3.5 1 5.1.7 1.6 1.6 3 2.8 4.2 1.2 1.2 2.6 2.2 4.2 2.8 1.6.7 3.4 1 5.1 1 .8 0 1.6-.1 2.3-.2 1.2.7 2.5 1 3.9 1 2.1 0 4.1-.8 5.5-2.3 1.5-1.5 2.3-3.4 2.3-5.5 0-1.3-.3-2.6-1-3.8zM25.1 33c-4.7 0-6.8-2.3-6.8-4 0-.9.7-1.5 1.6-1.5 2 0 1.5 2.9 5.2 2.9 1.9 0 3-1 3-2.1 0-.6-.3-1.4-1.6-1.7l-4.2-1c-3.4-.8-4-2.7-4-4.4 0-3.6 3.3-4.9 6.5-4.9 2.9 0 6.3 1.6 6.3 3.7 0 .9-.8 1.4-1.7 1.4-1.7 0-1.4-2.4-4.9-2.4-1.7 0-2.7.8-2.7 1.9 0 1.1 1.4 1.5 2.5 1.7l3.1.7c3.4.8 4.2 2.7 4.2 4.6.1 2.9-2.1 5.1-6.5 5.1z"></path></symbol><symbol id=\'ei-sc-soundcloud-icon\' viewBox=\'0 0 50 50\'><path d="M40 24h-.2c-.9-4.6-5-8-9.8-8-3.1 0-5.9 1.4-7.7 3.7-.2.3-.3.6-.3 1.2l-.4 9.1.4 5.5c0 .3.3.5.5.5H40c3.3 0 6-2.7 6-6s-2.7-6-6-6z"></path><path d="M18.9 20c-.3 0-.5.2-.5.5l-.8 9v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-9c0-.3-.3-.5-.5-.5h-.4z"></path><path d="M14.9 21c-.3 0-.5.2-.5.5l-.8 8v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-8c0-.3-.3-.5-.5-.5h-.4z"></path><path d="M11 24c-.3 0-.5.2-.6.5l-.8 5v1l.8 5c0 .3.3.5.6.5s.5-.2.6-.5l.8-5v-1l-.8-5c-.1-.3-.3-.5-.6-.5z"></path><path d="M7 23c-.3 0-.5.2-.6.5l-.9 6v1l.8 5c.2.3.4.5.7.5.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.9-6c0-.3-.2-.5-.5-.5z"></path><path d="M3.3 26c-.3 0-.5.2-.6.5l-.6 3c-.1.3-.1.7 0 1l.6 4c.1.3.3.5.6.5s.5-.2.6-.5l.6-4v-1l-.6-3c-.1-.3-.3-.5-.6-.5z"></path></symbol><symbol id=\'ei-sc-telegram-icon\' viewBox=\'0 0 50 50\'><path d="M37.1 13L9.4 24c-.9.3-.8 1.6.1 1.9l7 2.2 2.8 8.8c.2.7 1.1.9 1.6.4l4.1-3.8 7.8 5.7c.6.4 1.4.1 1.6-.6l5.4-23.2c.3-1.7-1.2-3-2.7-2.4zM20.9 29.8L20 35l-2-7.2L37.5 15 20.9 29.8z"></path></symbol><symbol id=\'ei-sc-tumblr-icon\' viewBox=\'0 0 50 50\'><path d="M30.9 32.4c-.5.2-1.5.5-2.3.5-2.2.1-2.7-1.6-2.7-2.8v-8.7h5.6v-4.2H26V10h-4.1c-.1 0-.2.1-.2.2-.2 2.2-1.3 6-5.5 7.5v3.6H19v9.1c0 3.1 2.3 7.6 8.4 7.5 2.1 0 4.3-.9 4.8-1.6l-1.3-3.9z"></path></symbol><symbol id=\'ei-sc-twitter-icon\' viewBox=\'0 0 50 50\'><path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path></symbol><symbol id=\'ei-sc-vimeo-icon\' viewBox=\'0 0 50 50\'><path d="M38 19.6c-.1 2.7-2 6.4-5.6 11.1-3.8 4.9-7 7.4-9.6 7.4-1.6 0-3-1.5-4.1-4.5-.7-2.7-1.5-5.5-2.2-8.2-.8-3-1.7-4.5-2.7-4.5-.2 0-.9.4-2.2 1.3l-1.3-1.7c1.4-1.2 2.7-2.4 4-3.6 1.8-1.6 3.2-2.4 4.1-2.5 2.2-.2 3.5 1.3 4 4.4.5 3.4.9 5.5 1.1 6.4.6 2.8 1.3 4.2 2.1 4.2.6 0 1.5-.9 2.6-2.8 1.2-1.8 1.8-3.2 1.9-4.2.2-1.6-.5-2.4-1.9-2.4-.7 0-1.3.2-2 .5 1.4-4.5 4-6.6 7.8-6.5 2.8.1 4.2 1.9 4 5.6z"></path></symbol><symbol id=\'ei-sc-vk-icon\' viewBox=\'0 0 50 50\'><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1 35.9h2s.6-.1.9-.4c.3-.3.3-.9.3-.9s0-2.6 1.2-3c1.2-.4 2.8 2.6 4.4 3.7 1.2.9 2.1.7 2.1.7l4.4-.1s2.3-.1 1.2-2c-.1-.1-.6-1.3-3.3-3.8-2.8-2.6-2.4-2.1.9-6.6 2-2.7 2.8-4.3 2.6-5.1-.2-.7-1.7-.5-1.7-.5h-5s-.4-.1-.6.1c-.3.2-.4.5-.4.5s-.8 2.1-1.8 3.9c-2.2 3.7-3.1 3.9-3.4 3.7-.8-.5-.6-2.2-.6-3.3 0-3.6.6-5.1-1.1-5.5-.5-.1-.9-.2-2.3-.2-1.8 0-3.3 0-4.1.4-.6.3-1 .9-.7.9.3 0 1.1.2 1.5.7.4.9.4 2.4.4 2.4s.3 4.3-.7 4.8c-.7.4-1.6-.4-3.6-3.8-1-1.7-1.8-3.7-1.8-3.7s-.1-.4-.4-.6c-.3-.2-.8-.3-.8-.3H10s-.7 0-1 .3c-.2.3 0 .8 0 .8s3.7 8.6 7.9 13c3.9 4.2 8.2 3.9 8.2 3.9z"></path></symbol><symbol id=\'ei-sc-youtube-icon\' viewBox=\'0 0 50 50\'><path d="M39.7 18.6s-.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C31.3 14 25 14 25 14s-6.3 0-10.5.3c-.6.1-1.9.1-3 1.3-.9.9-1.2 3-1.2 3S10 21 10 23.4v2.2c0 2.4.3 4.9.3 4.9s.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3 2.4.1 10.2.2 10.2.2s6.3 0 10.5-.3c.6-.1 1.9-.1 3-1.3.9-.9 1.2-3 1.2-3s.3-2.4.3-4.8v-2.2c0-2.4-.3-4.8-.3-4.8zm-17.8 9.8V20l8.1 4.2-8.1 4.2z"></path></symbol><symbol id=\'ei-search-icon\' viewBox=\'0 0 50 50\'><path d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></path><path d="M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z"></path></symbol><symbol id=\'ei-share-apple-icon\' viewBox=\'0 0 50 50\'><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"></path><path d="M24 7h2v21h-2z"></path><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"></path></symbol><symbol id=\'ei-share-google-icon\' viewBox=\'0 0 50 50\'><path d="M15 30c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M35 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M35 40c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M19.007 25.885l12.88 6.44-.895 1.788-12.88-6.44z"></path><path d="M30.993 15.885l.894 1.79-12.88 6.438-.894-1.79z"></path></symbol><symbol id=\'ei-spinner-2-icon\' viewBox=\'0 0 50 50\'><circle cx="25" cy="10" r="2"></circle><circle opacity=".3" cx="25" cy="40" r="2"></circle><circle opacity=".3" cx="32.5" cy="12" r="2"></circle><circle opacity=".3" cx="17.5" cy="38" r="2"></circle><circle opacity=".93" cx="17.5" cy="12" r="2"></circle><circle opacity=".3" cx="32.5" cy="38" r="2"></circle><circle opacity=".65" cx="10" cy="25" r="2"></circle><circle opacity=".3" cx="40" cy="25" r="2"></circle><circle opacity=".86" cx="12" cy="17.5" r="2"></circle><circle opacity=".3" cx="38" cy="32.5" r="2"></circle><circle opacity=".44" cx="12" cy="32.5" r="2"></circle><circle opacity=".3" cx="38" cy="17.5" r="2"></circle></symbol><symbol id=\'ei-spinner-3-icon\' viewBox=\'0 0 50 50\'><path d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"></path></symbol><symbol id=\'ei-spinner-icon\' viewBox=\'0 0 50 50\'><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"></path><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"></path><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"></path><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"></path><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"></path><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"></path><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"></path><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"></path><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"></path><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"></path></symbol><symbol id=\'ei-star-icon\' viewBox=\'0 0 50 50\'><path d="M15.2 40.6c-.2 0-.4-.1-.6-.2-.4-.3-.5-.7-.4-1.1l3.9-12-10.2-7.5c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7h12.7L25 5.9c.1-.4.5-.7 1-.7s.8.3 1 .7L30.9 18h12.7c.4 0 .8.2 1 .6s0 .9-.4 1.1L34 27.1l3.9 12c.1.4 0 .9-.4 1.1s-.8.3-1.2 0L26 33l-10.2 7.4c-.2.1-.4.2-.6.2zM26 30.7c.2 0 .4.1.6.2l8.3 6.1-3.2-9.8c-.1-.4 0-.9.4-1.1l8.3-6.1H30.1c-.4 0-.8-.3-1-.7L26 9.5l-3.2 9.8c-.1.4-.5.7-1 .7H11.5l8.3 6.1c.4.3.5.7.4 1.1L17.1 37l8.3-6.1c.2-.1.4-.2.6-.2z"></path></symbol><symbol id=\'ei-tag-icon\' viewBox=\'0 0 50 50\'><path d="M22 40.1c-.9 0-1.7-.3-2.3-.9l-8.9-8.9c-1.2-1.2-1.2-3.3 0-4.5l11.9-11.9c1-1 3-1.8 4.5-1.8h7.6c1.8 0 3.2 1.4 3.2 3.2v7.6c0 1.5-.8 3.4-1.8 4.5L24.3 39.2c-.6.6-1.4.9-2.3.9zM27.2 14c-1 0-2.4.6-3 1.3L12.3 27.2c-.5.5-.5 1.2 0 1.7l8.9 8.9c.5.4 1.2.4 1.7 0l11.9-11.9c.7-.7 1.3-2.1 1.3-3v-7.6c0-.7-.5-1.2-1.2-1.2h-7.7z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id=\'ei-trash-icon\' viewBox=\'0 0 50 50\'><path d="M20 18h2v16h-2z"></path><path d="M24 18h2v16h-2z"></path><path d="M28 18h2v16h-2z"></path><path d="M12 12h26v2H12z"></path><path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z"></path><path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z"></path></symbol><symbol id=\'ei-trophy-icon\' viewBox=\'0 0 50 50\'><path d="M28.6 29.4c3-2.3 7.4-5.7 7.4-18.4v-1H14v1c0 12.7 4.5 16.1 7.4 18.4 1.7 1.3 2.6 2 2.6 3.6v3c-1.6.2-3.2.8-3.8 2H18c-1.1 0-2 .9-2 2h18c0-1.1-.9-2-2-2h-2.2c-.6-1.2-2.1-1.8-3.8-2v-3c0-1.6.8-2.3 2.6-3.6zm-3.6.5c-.6-.8-1.5-1.5-2.3-2.1-2.7-2.1-6.4-4.9-6.6-15.8h18c-.2 10.8-3.9 13.7-6.6 15.8-1 .7-1.9 1.3-2.5 2.1z"></path><path d="M18.8 27C18.7 27 8 24.7 8 13v-1h7v2h-5c.6 9.2 9.1 11 9.2 11l-.4 2z"></path><path d="M31.2 27l-.4-2c.4-.1 8.6-1.9 9.2-11h-5v-2h7v1c0 11.7-10.7 14-10.8 14z"></path></symbol><symbol id=\'ei-undo-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z"></path><path d="M20 22h-8v-8h2v6h6z"></path></symbol><symbol id=\'ei-unlock-icon\' viewBox=\'0 0 50 50\'><path d="M18 23h-2v-4c0-5 4-9 9-9 4.5 0 8.4 3.4 8.9 7.9l-2 .2c-.4-3.5-3.4-6.1-6.9-6.1-3.9 0-7 3.1-7 7v4z"></path><path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z"></path><circle cx="25" cy="28" r="2"></circle><path d="M25.5 28h-1l-1 6h3z"></path></symbol><symbol id=\'ei-user-icon\' viewBox=\'0 0 50 50\'><path d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.7 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.8-15-15-15z"></path><path d="M15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7 1.7-.8 3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2-.5-.5-1.3-1.4-1.3-2.6 0-.7.3-1.3.5-1.7-.2-.8-.4-2.3-.4-3.5 0-3.9 2.7-6.5 7-6.5 1.2 0 2.7.3 3.5 1.2 1.9.4 3.5 2.6 3.5 5.3 0 1.7-.3 3.1-.5 3.8.2.3.4.8.4 1.4 0 1.3-.7 2.2-1.3 2.6-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2 1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1 0-.2-.2-.5-.3-.6l-.4-.4.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8-3.1 0-5 1.7-5 4.5 0 1.3.5 3.5.5 3.5l.1.5-.4.5c-.1 0-.3.3-.3.7 0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6-1.1.4-2.6 1.1-2.8 1.6z"></path></symbol></svg>'
        ),
        (function () {
          for (
            var n = e.querySelectorAll("[data-icon]"), r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r],
              o = i.getAttribute("data-icon"),
              s = { class: i.className, size: i.getAttribute("data-size") };
            i.insertAdjacentHTML("beforebegin", t(o, s)),
              i.parentNode.removeChild(i);
          }
        })();
    });
  })(window.document),
  (function (e, t) {
    var n = (function (e, t, n) {
      "use strict";
      var r, i;
      if (
        ((function () {
          var t,
            n = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125,
            };
          i = e.lazySizesConfig || e.lazysizesConfig || {};
          for (t in n) t in i || (i[t] = n[t]);
        })(),
        !t || !t.getElementsByClassName)
      )
        return { init: function () {}, cfg: i, noSupport: !0 };
      var o = t.documentElement,
        s = e.HTMLPictureElement,
        a = "addEventListener",
        c = "getAttribute",
        u = e[a].bind(e),
        l = e.setTimeout,
        d = e.requestAnimationFrame || l,
        f = e.requestIdleCallback,
        h = /^picture$/i,
        p = ["load", "error", "lazyincluded", "_lazyloaded"],
        m = {},
        w = Array.prototype.forEach,
        g = function (e, t) {
          return (
            m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
            m[t].test(e[c]("class") || "") && m[t]
          );
        },
        v = function (e, t) {
          g(e, t) ||
            e.setAttribute("class", (e[c]("class") || "").trim() + " " + t);
        },
        b = function (e, t) {
          var n;
          (n = g(e, t)) &&
            e.setAttribute("class", (e[c]("class") || "").replace(n, " "));
        },
        y = function (e, t, n) {
          var r = n ? a : "removeEventListener";
          n && y(e, t),
            p.forEach(function (n) {
              e[r](n, t);
            });
        },
        _ = function (e, n, i, o, s) {
          var a = t.createEvent("Event");
          return (
            i || (i = {}),
            (i.instance = r),
            a.initEvent(n, !o, !s),
            (a.detail = i),
            e.dispatchEvent(a),
            a
          );
        },
        k = function (t, n) {
          var r;
          !s && (r = e.picturefill || i.pf)
            ? (n && n.src && !t[c]("srcset") && t.setAttribute("srcset", n.src),
              r({ reevaluate: !0, elements: [t] }))
            : n && n.src && (t.src = n.src);
        },
        x = function (e, t) {
          return (getComputedStyle(e, null) || {})[t];
        },
        C = function (e, t, n) {
          for (
            n = n || e.offsetWidth;
            n < i.minSize && t && !e._lazysizesWidth;

          )
            (n = t.offsetWidth), (t = t.parentNode);
          return n;
        },
        z = (function () {
          var e,
            n,
            r = [],
            i = [],
            o = r,
            s = function () {
              var t = o;
              for (o = r.length ? i : r, e = !0, n = !1; t.length; )
                t.shift()();
              e = !1;
            },
            a = function (r, i) {
              e && !i
                ? r.apply(this, arguments)
                : (o.push(r), n || ((n = !0), (t.hidden ? l : d)(s)));
            };
          return (a._lsFlush = s), a;
        })(),
        S = function (e, t) {
          return t
            ? function () {
                z(e);
              }
            : function () {
                var t = this,
                  n = arguments;
                z(function () {
                  e.apply(t, n);
                });
              };
        },
        T = function (e) {
          var t,
            r,
            i = function () {
              (t = null), e();
            },
            o = function () {
              var e = n.now() - r;
              e < 99 ? l(o, 99 - e) : (f || i)(i);
            };
          return function () {
            (r = n.now()), t || (t = l(o, 99));
          };
        },
        E = (function () {
          var s,
            p,
            m,
            C,
            E,
            A,
            j,
            q,
            P,
            F,
            L,
            N,
            H = /^img$/i,
            D = /^iframe$/i,
            O = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
            B = 0,
            $ = 0,
            I = -1,
            W = function (e) {
              $--, (!e || $ < 0 || !e.target) && ($ = 0);
            },
            R = function (e) {
              return (
                null == N && (N = "hidden" == x(t.body, "visibility")),
                N ||
                  !(
                    "hidden" == x(e.parentNode, "visibility") &&
                    "hidden" == x(e, "visibility")
                  )
              );
            },
            V = function (e, n) {
              var r,
                i = e,
                s = R(e);
              for (
                q -= n, L += n, P -= n, F += n;
                s && (i = i.offsetParent) && i != t.body && i != o;

              )
                (s = (x(i, "opacity") || 1) > 0) &&
                  "visible" != x(i, "overflow") &&
                  ((r = i.getBoundingClientRect()),
                  (s =
                    F > r.left &&
                    P < r.right &&
                    L > r.top - 1 &&
                    q < r.bottom + 1));
              return s;
            },
            U = function () {
              var e,
                n,
                a,
                u,
                l,
                d,
                f,
                h,
                m,
                w,
                g,
                v,
                b = r.elements;
              if ((C = i.loadMode) && $ < 8 && (e = b.length)) {
                for (n = 0, I++; n < e; n++)
                  if (b[n] && !b[n]._lazyRace)
                    if (!O || (r.prematureUnveil && r.prematureUnveil(b[n])))
                      K(b[n]);
                    else if (
                      (((h = b[n][c]("data-expand")) && (d = 1 * h)) || (d = B),
                      w ||
                        ((w =
                          !i.expand || i.expand < 1
                            ? o.clientHeight > 500 && o.clientWidth > 500
                              ? 500
                              : 370
                            : i.expand),
                        (r._defEx = w),
                        (g = w * i.expFactor),
                        (v = i.hFac),
                        (N = null),
                        B < g && $ < 1 && I > 2 && C > 2 && !t.hidden
                          ? ((B = g), (I = 0))
                          : (B = C > 1 && I > 1 && $ < 6 ? w : 0)),
                      m !== d &&
                        ((A = innerWidth + d * v),
                        (j = innerHeight + d),
                        (f = -1 * d),
                        (m = d)),
                      (a = b[n].getBoundingClientRect()),
                      (L = a.bottom) >= f &&
                        (q = a.top) <= j &&
                        (F = a.right) >= f * v &&
                        (P = a.left) <= A &&
                        (L || F || P || q) &&
                        (i.loadHidden || R(b[n])) &&
                        ((p && $ < 3 && !h && (C < 3 || I < 4)) || V(b[n], d)))
                    ) {
                      if ((K(b[n]), (l = !0), $ > 9)) break;
                    } else
                      !l &&
                        p &&
                        !u &&
                        $ < 4 &&
                        I < 4 &&
                        C > 2 &&
                        (s[0] || i.preloadAfterLoad) &&
                        (s[0] ||
                          (!h &&
                            (L ||
                              F ||
                              P ||
                              q ||
                              "auto" != b[n][c](i.sizesAttr)))) &&
                        (u = s[0] || b[n]);
                u && !l && K(u);
              }
            },
            Y = (function (e) {
              var t,
                r = 0,
                o = i.throttleDelay,
                s = i.ricTimeout,
                a = function () {
                  (t = !1), (r = n.now()), e();
                },
                c =
                  f && s > 49
                    ? function () {
                        f(a, { timeout: s }),
                          s !== i.ricTimeout && (s = i.ricTimeout);
                      }
                    : S(function () {
                        l(a);
                      }, !0);
              return function (e) {
                var i;
                (e = !0 === e) && (s = 33),
                  t ||
                    ((t = !0),
                    (i = o - (n.now() - r)) < 0 && (i = 0),
                    e || i < 9 ? c() : l(c, i));
              };
            })(U),
            X = function (e) {
              var t = e.target;
              t._lazyCache
                ? delete t._lazyCache
                : (W(e),
                  v(t, i.loadedClass),
                  b(t, i.loadingClass),
                  y(t, Z),
                  _(t, "lazyloaded"));
            },
            J = S(X),
            Z = function (e) {
              J({ target: e.target });
            },
            G = function (e) {
              var t,
                n = e[c](i.srcsetAttr);
              (t = i.customMedia[e[c]("data-media") || e[c]("media")]) &&
                e.setAttribute("media", t),
                n && e.setAttribute("srcset", n);
            },
            Q = S(function (e, t, n, r, o) {
              var s, a, u, d, f, p;
              (f = _(e, "lazybeforeunveil", t)).defaultPrevented ||
                (r && (n ? v(e, i.autosizesClass) : e.setAttribute("sizes", r)),
                (a = e[c](i.srcsetAttr)),
                (s = e[c](i.srcAttr)),
                o && ((u = e.parentNode), (d = u && h.test(u.nodeName || ""))),
                (p = t.firesLoad || ("src" in e && (a || s || d))),
                (f = { target: e }),
                v(e, i.loadingClass),
                p && (clearTimeout(m), (m = l(W, 2500)), y(e, Z, !0)),
                d && w.call(u.getElementsByTagName("source"), G),
                a
                  ? e.setAttribute("srcset", a)
                  : s &&
                    !d &&
                    (D.test(e.nodeName)
                      ? (function (e, t) {
                          try {
                            e.contentWindow.location.replace(t);
                          } catch (n) {
                            e.src = t;
                          }
                        })(e, s)
                      : (e.src = s)),
                o && (a || d) && k(e, { src: s })),
                e._lazyRace && delete e._lazyRace,
                b(e, i.lazyClass),
                z(function () {
                  var t = e.complete && e.naturalWidth > 1;
                  (p && !t) ||
                    (t && v(e, "ls-is-cached"),
                    X(f),
                    (e._lazyCache = !0),
                    l(function () {
                      "_lazyCache" in e && delete e._lazyCache;
                    }, 9)),
                    "lazy" == e.loading && $--;
                }, !0);
            }),
            K = function (e) {
              if (!e._lazyRace) {
                var t,
                  n = H.test(e.nodeName),
                  r = n && (e[c](i.sizesAttr) || e[c]("sizes")),
                  o = "auto" == r;
                ((!o && p) ||
                  !n ||
                  (!e[c]("src") && !e.srcset) ||
                  e.complete ||
                  g(e, i.errorClass) ||
                  !g(e, i.lazyClass)) &&
                  ((t = _(e, "lazyunveilread").detail),
                  o && M.updateElem(e, !0, e.offsetWidth),
                  (e._lazyRace = !0),
                  $++,
                  Q(e, t, o, r, n));
              }
            },
            ee = T(function () {
              (i.loadMode = 3), Y();
            }),
            te = function () {
              3 == i.loadMode && (i.loadMode = 2), ee();
            },
            ne = function () {
              if (!p) {
                if (n.now() - E < 999) return void l(ne, 999);
                (p = !0), (i.loadMode = 3), Y(), u("scroll", te, !0);
              }
            };
          return {
            _: function () {
              (E = n.now()),
                (r.elements = t.getElementsByClassName(i.lazyClass)),
                (s = t.getElementsByClassName(
                  i.lazyClass + " " + i.preloadClass
                )),
                u("scroll", Y, !0),
                u("resize", Y, !0),
                u("pageshow", function (e) {
                  if (e.persisted) {
                    var n = t.querySelectorAll("." + i.loadingClass);
                    n.length &&
                      n.forEach &&
                      d(function () {
                        n.forEach(function (e) {
                          e.complete && K(e);
                        });
                      });
                  }
                }),
                e.MutationObserver
                  ? new MutationObserver(Y).observe(o, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    })
                  : (o[a]("DOMNodeInserted", Y, !0),
                    o[a]("DOMAttrModified", Y, !0),
                    setInterval(Y, 999)),
                u("hashchange", Y, !0),
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend",
                ].forEach(function (e) {
                  t[a](e, Y, !0);
                }),
                /d$|^c/.test(t.readyState)
                  ? ne()
                  : (u("load", ne), t[a]("DOMContentLoaded", Y), l(ne, 2e4)),
                r.elements.length ? (U(), z._lsFlush()) : Y();
            },
            checkElems: Y,
            unveil: K,
            _aLSL: te,
          };
        })(),
        M = (function () {
          var e,
            n = S(function (e, t, n, r) {
              var i, o, s;
              if (
                ((e._lazysizesWidth = r),
                (r += "px"),
                e.setAttribute("sizes", r),
                h.test(t.nodeName || ""))
              )
                for (
                  i = t.getElementsByTagName("source"), o = 0, s = i.length;
                  o < s;
                  o++
                )
                  i[o].setAttribute("sizes", r);
              n.detail.dataAttr || k(e, n.detail);
            }),
            r = function (e, t, r) {
              var i,
                o = e.parentNode;
              o &&
                ((r = C(e, o, r)),
                (i = _(e, "lazybeforesizes", { width: r, dataAttr: !!t }))
                  .defaultPrevented ||
                  ((r = i.detail.width) &&
                    r !== e._lazysizesWidth &&
                    n(e, o, i, r)));
            },
            o = T(function () {
              var t,
                n = e.length;
              if (n) for (t = 0; t < n; t++) r(e[t]);
            });
          return {
            _: function () {
              (e = t.getElementsByClassName(i.autosizesClass)), u("resize", o);
            },
            checkElems: o,
            updateElem: r,
          };
        })(),
        A = function () {
          !A.i && t.getElementsByClassName && ((A.i = !0), M._(), E._());
        };
      return (
        l(function () {
          i.init && A();
        }),
        (r = {
          cfg: i,
          autoSizer: M,
          loader: E,
          init: A,
          uP: k,
          aC: v,
          rC: b,
          hC: g,
          fire: _,
          gW: C,
          rAF: z,
        })
      );
    })(e, e.document, Date);
    (e.lazySizes = n),
      "object" == typeof module && module.exports && (module.exports = n);
  })("undefined" != typeof window ? window : {}),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.ClipboardJS = t())
      : (e.ClipboardJS = t());
  })(this, function () {
    return (function (e) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var i = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
      }
      var n = {};
      return (
        (t.m = e),
        (t.c = n),
        (t.i = function (e) {
          return e;
        }),
        (t.d = function (e, n, r) {
          t.o(e, n) ||
            Object.defineProperty(e, n, {
              configurable: !1,
              enumerable: !0,
              get: r,
            });
        }),
        (t.n = function (e) {
          var n =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 3))
      );
    })([
      function (e, t, n) {
        var r, i, o;
        !(function (s, a) {
          (i = [e, n(7)]),
            void 0 !== (o = "function" == typeof (r = a) ? r.apply(t, i) : r) &&
              (e.exports = o);
        })(0, function (e, t) {
          "use strict";
          var n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(t),
            r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  this.resolveOptions(t),
                  this.initSelection();
              }
              return (
                i(e, [
                  {
                    key: "resolveOptions",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      (this.action = e.action),
                        (this.container = e.container),
                        (this.emitter = e.emitter),
                        (this.target = e.target),
                        (this.text = e.text),
                        (this.trigger = e.trigger),
                        (this.selectedText = "");
                    },
                  },
                  {
                    key: "initSelection",
                    value: function () {
                      this.text
                        ? this.selectFake()
                        : this.target && this.selectTarget();
                    },
                  },
                  {
                    key: "selectFake",
                    value: function () {
                      var e = this,
                        t =
                          "rtl" == document.documentElement.getAttribute("dir");
                      this.removeFake(),
                        (this.fakeHandlerCallback = function () {
                          return e.removeFake();
                        }),
                        (this.fakeHandler =
                          this.container.addEventListener(
                            "click",
                            this.fakeHandlerCallback
                          ) || !0),
                        (this.fakeElem = document.createElement("textarea")),
                        (this.fakeElem.style.fontSize = "12pt"),
                        (this.fakeElem.style.border = "0"),
                        (this.fakeElem.style.padding = "0"),
                        (this.fakeElem.style.margin = "0"),
                        (this.fakeElem.style.position = "absolute"),
                        (this.fakeElem.style[t ? "right" : "left"] = "-9999px");
                      var r =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      (this.fakeElem.style.top = r + "px"),
                        this.fakeElem.setAttribute("readonly", ""),
                        (this.fakeElem.value = this.text),
                        this.container.appendChild(this.fakeElem),
                        (this.selectedText = (0, n.default)(this.fakeElem)),
                        this.copyText();
                    },
                  },
                  {
                    key: "removeFake",
                    value: function () {
                      this.fakeHandler &&
                        (this.container.removeEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ),
                        (this.fakeHandler = null),
                        (this.fakeHandlerCallback = null)),
                        this.fakeElem &&
                          (this.container.removeChild(this.fakeElem),
                          (this.fakeElem = null));
                    },
                  },
                  {
                    key: "selectTarget",
                    value: function () {
                      (this.selectedText = (0, n.default)(this.target)),
                        this.copyText();
                    },
                  },
                  {
                    key: "copyText",
                    value: function () {
                      var e = void 0;
                      try {
                        e = document.execCommand(this.action);
                      } catch (t) {
                        e = !1;
                      }
                      this.handleResult(e);
                    },
                  },
                  {
                    key: "handleResult",
                    value: function (e) {
                      this.emitter.emit(e ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this),
                      });
                    },
                  },
                  {
                    key: "clearSelection",
                    value: function () {
                      this.trigger && this.trigger.focus(),
                        window.getSelection().removeAllRanges();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.removeFake();
                    },
                  },
                  {
                    key: "action",
                    set: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "copy";
                      if (
                        ((this._action = e),
                        "copy" !== this._action && "cut" !== this._action)
                      )
                        throw new Error(
                          'Invalid "action" value, use either "copy" or "cut"'
                        );
                    },
                    get: function () {
                      return this._action;
                    },
                  },
                  {
                    key: "target",
                    set: function (e) {
                      if (void 0 !== e) {
                        if (
                          !e ||
                          "object" !== (void 0 === e ? "undefined" : r(e)) ||
                          1 !== e.nodeType
                        )
                          throw new Error(
                            'Invalid "target" value, use a valid Element'
                          );
                        if (
                          "copy" === this.action &&
                          e.hasAttribute("disabled")
                        )
                          throw new Error(
                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                          );
                        if (
                          "cut" === this.action &&
                          (e.hasAttribute("readonly") ||
                            e.hasAttribute("disabled"))
                        )
                          throw new Error(
                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                          );
                        this._target = e;
                      }
                    },
                    get: function () {
                      return this._target;
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = o;
        });
      },
      function (e, t, n) {
        var r = n(6),
          i = n(5);
        e.exports = function (e, t, n) {
          if (!e && !t && !n) throw new Error("Missing required arguments");
          if (!r.string(t))
            throw new TypeError("Second argument must be a String");
          if (!r.fn(n))
            throw new TypeError("Third argument must be a Function");
          if (r.node(e))
            return (function (e, t, n) {
              return (
                e.addEventListener(t, n),
                {
                  destroy: function () {
                    e.removeEventListener(t, n);
                  },
                }
              );
            })(e, t, n);
          if (r.nodeList(e))
            return (function (e, t, n) {
              return (
                Array.prototype.forEach.call(e, function (e) {
                  e.addEventListener(t, n);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(e, function (e) {
                      e.removeEventListener(t, n);
                    });
                  },
                }
              );
            })(e, t, n);
          if (r.string(e))
            return (function (e, t, n) {
              return i(document.body, e, t, n);
            })(e, t, n);
          throw new TypeError(
            "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
          );
        };
      },
      function (e, t) {
        function n() {}
        (n.prototype = {
          on: function (e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
          },
          once: function (e, t, n) {
            function r() {
              i.off(e, r), t.apply(n, arguments);
            }
            var i = this;
            return (r._ = t), this.on(e, r, n);
          },
          emit: function (e) {
            var t = [].slice.call(arguments, 1),
              n = ((this.e || (this.e = {}))[e] || []).slice(),
              r = 0,
              i = n.length;
            for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
            return this;
          },
          off: function (e, t) {
            var n = this.e || (this.e = {}),
              r = n[e],
              i = [];
            if (r && t)
              for (var o = 0, s = r.length; o < s; o++)
                r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
            return i.length ? (n[e] = i) : delete n[e], this;
          },
        }),
          (e.exports = n);
      },
      function (e, t, n) {
        var r, i, o;
        !(function (s, a) {
          (i = [e, n(0), n(2), n(1)]),
            void 0 !== (o = "function" == typeof (r = a) ? r.apply(t, i) : r) &&
              (e.exports = o);
        })(0, function (e, t, n, r) {
          "use strict";
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function o(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n);
          }
          var s = i(t),
            a = i(n),
            c = i(r),
            u =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            l = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            d = (function (e) {
              function t(e, n) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var r = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.resolveOptions(n), r.listenClick(e), r;
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, a.default),
                l(
                  t,
                  [
                    {
                      key: "resolveOptions",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (this.action =
                          "function" == typeof e.action
                            ? e.action
                            : this.defaultAction),
                          (this.target =
                            "function" == typeof e.target
                              ? e.target
                              : this.defaultTarget),
                          (this.text =
                            "function" == typeof e.text
                              ? e.text
                              : this.defaultText),
                          (this.container =
                            "object" === u(e.container)
                              ? e.container
                              : document.body);
                      },
                    },
                    {
                      key: "listenClick",
                      value: function (e) {
                        var t = this;
                        this.listener = (0, c.default)(
                          e,
                          "click",
                          function (e) {
                            return t.onClick(e);
                          }
                        );
                      },
                    },
                    {
                      key: "onClick",
                      value: function (e) {
                        var t = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null),
                          (this.clipboardAction = new s.default({
                            action: this.action(t),
                            target: this.target(t),
                            text: this.text(t),
                            container: this.container,
                            trigger: t,
                            emitter: this,
                          }));
                      },
                    },
                    {
                      key: "defaultAction",
                      value: function (e) {
                        return o("action", e);
                      },
                    },
                    {
                      key: "defaultTarget",
                      value: function (e) {
                        var t = o("target", e);
                        if (t) return document.querySelector(t);
                      },
                    },
                    {
                      key: "defaultText",
                      value: function (e) {
                        return o("text", e);
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.listener.destroy(),
                          this.clipboardAction &&
                            (this.clipboardAction.destroy(),
                            (this.clipboardAction = null));
                      },
                    },
                  ],
                  [
                    {
                      key: "isSupported",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : ["copy", "cut"],
                          t = "string" == typeof e ? [e] : e,
                          n = !!document.queryCommandSupported;
                        return (
                          t.forEach(function (e) {
                            n = n && !!document.queryCommandSupported(e);
                          }),
                          n
                        );
                      },
                    },
                  ]
                ),
                t
              );
            })();
          e.exports = d;
        });
      },
      function (e, t) {
        var n = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
          var r = Element.prototype;
          r.matches =
            r.matchesSelector ||
            r.mozMatchesSelector ||
            r.msMatchesSelector ||
            r.oMatchesSelector ||
            r.webkitMatchesSelector;
        }
        e.exports = function (e, t) {
          for (; e && e.nodeType !== n; ) {
            if ("function" == typeof e.matches && e.matches(t)) return e;
            e = e.parentNode;
          }
        };
      },
      function (e, t, n) {
        function r(e, t, n, r, o) {
          var s = function (e, t, n, r) {
            return function (n) {
              (n.delegateTarget = i(n.target, t)),
                n.delegateTarget && r.call(e, n);
            };
          }.apply(this, arguments);
          return (
            e.addEventListener(n, s, o),
            {
              destroy: function () {
                e.removeEventListener(n, s, o);
              },
            }
          );
        }
        var i = n(4);
        e.exports = function (e, t, n, i, o) {
          return "function" == typeof e.addEventListener
            ? r.apply(null, arguments)
            : "function" == typeof n
            ? r.bind(null, document).apply(null, arguments)
            : ("string" == typeof e && (e = document.querySelectorAll(e)),
              Array.prototype.map.call(e, function (e) {
                return r(e, t, n, i, o);
              }));
        };
      },
      function (e, t) {
        (t.node = function (e) {
          return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
        }),
          (t.nodeList = function (e) {
            var n = Object.prototype.toString.call(e);
            return (
              void 0 !== e &&
              ("[object NodeList]" === n || "[object HTMLCollection]" === n) &&
              "length" in e &&
              (0 === e.length || t.node(e[0]))
            );
          }),
          (t.string = function (e) {
            return "string" == typeof e || e instanceof String;
          }),
          (t.fn = function (e) {
            return "[object Function]" === Object.prototype.toString.call(e);
          });
      },
      function (e, t) {
        e.exports = function (e) {
          var t;
          if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
          else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""),
              e.select(),
              e.setSelectionRange(0, e.value.length),
              n || e.removeAttribute("readonly"),
              (t = e.value);
          } else {
            e.hasAttribute("contenteditable") && e.focus();
            var r = window.getSelection(),
              i = document.createRange();
            i.selectNodeContents(e),
              r.removeAllRanges(),
              r.addRange(i),
              (t = r.toString());
          }
          return t;
        };
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self), (e.Headroom = t()));
  })(this, function () {
    "use strict";
    function e() {
      return "undefined" != typeof window;
    }
    function t(e) {
      return (function (e) {
        return e && e.document && 9 === e.document.nodeType;
      })(e)
        ? (function (e) {
            var t = e.document,
              n = t.body,
              r = t.documentElement;
            return {
              scrollHeight: function () {
                return Math.max(
                  n.scrollHeight,
                  r.scrollHeight,
                  n.offsetHeight,
                  r.offsetHeight,
                  n.clientHeight,
                  r.clientHeight
                );
              },
              height: function () {
                return e.innerHeight || r.clientHeight || n.clientHeight;
              },
              scrollY: function () {
                return void 0 !== e.pageYOffset
                  ? e.pageYOffset
                  : (r || n.parentNode || n).scrollTop;
              },
            };
          })(e)
        : (function (e) {
            return {
              scrollHeight: function () {
                return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
              },
              height: function () {
                return Math.max(e.offsetHeight, e.clientHeight);
              },
              scrollY: function () {
                return e.scrollTop;
              },
            };
          })(e);
    }
    function n(e, n, r) {
      function i() {
        var e = Math.round(u.scrollY()),
          t = u.height(),
          i = u.scrollHeight();
        (d.scrollY = e),
          (d.lastScrollY = l),
          (d.direction = e > l ? "down" : "up"),
          (d.distance = Math.abs(e - l)),
          (d.isOutOfBounds = e < 0 || e + t > i),
          (d.top = e <= n.offset),
          (d.bottom = e + t >= i),
          (d.toleranceExceeded = d.distance > n.tolerance[d.direction]),
          r(d),
          (l = e),
          (c = !1);
      }
      function o() {
        c || ((c = !0), (s = requestAnimationFrame(i)));
      }
      var s,
        a = (function () {
          var e = !1;
          try {
            var t = {
              get passive() {
                e = !0;
              },
            };
            window.addEventListener("test", t, t),
              window.removeEventListener("test", t, t);
          } catch (t) {
            e = !1;
          }
          return e;
        })(),
        c = !1,
        u = t(e),
        l = u.scrollY(),
        d = {},
        f = !!a && { passive: !0, capture: !1 };
      return (
        e.addEventListener("scroll", o, f),
        {
          destroy: function () {
            cancelAnimationFrame(s), e.removeEventListener("scroll", o, f);
          },
        }
      );
    }
    function r(e, t) {
      (t = t || {}),
        Object.assign(this, r.options, t),
        (this.classes = Object.assign({}, r.options.classes, t.classes)),
        (this.elem = e),
        (this.tolerance = (function (e) {
          return e === Object(e) ? e : { down: e, up: e };
        })(this.tolerance)),
        (this.initialised = !1),
        (this.frozen = !1);
    }
    return (
      (r.prototype = {
        constructor: r,
        init: function () {
          return (
            r.cutsTheMustard &&
              !this.initialised &&
              (this.addClass("initial"),
              (this.initialised = !0),
              setTimeout(
                function (e) {
                  e.scrollTracker = n(
                    e.scroller,
                    { offset: e.offset, tolerance: e.tolerance },
                    e.update.bind(e)
                  );
                },
                100,
                this
              )),
            this
          );
        },
        destroy: function () {
          (this.initialised = !1),
            Object.keys(this.classes).forEach(this.removeClass, this),
            this.scrollTracker.destroy();
        },
        unpin: function () {
          (!this.hasClass("pinned") && this.hasClass("unpinned")) ||
            (this.addClass("unpinned"),
            this.removeClass("pinned"),
            this.onUnpin && this.onUnpin.call(this));
        },
        pin: function () {
          this.hasClass("unpinned") &&
            (this.addClass("pinned"),
            this.removeClass("unpinned"),
            this.onPin && this.onPin.call(this));
        },
        freeze: function () {
          (this.frozen = !0), this.addClass("frozen");
        },
        unfreeze: function () {
          (this.frozen = !1), this.removeClass("frozen");
        },
        top: function () {
          this.hasClass("top") ||
            (this.addClass("top"),
            this.removeClass("notTop"),
            this.onTop && this.onTop.call(this));
        },
        notTop: function () {
          this.hasClass("notTop") ||
            (this.addClass("notTop"),
            this.removeClass("top"),
            this.onNotTop && this.onNotTop.call(this));
        },
        bottom: function () {
          this.hasClass("bottom") ||
            (this.addClass("bottom"),
            this.removeClass("notBottom"),
            this.onBottom && this.onBottom.call(this));
        },
        notBottom: function () {
          this.hasClass("notBottom") ||
            (this.addClass("notBottom"),
            this.removeClass("bottom"),
            this.onNotBottom && this.onNotBottom.call(this));
        },
        shouldUnpin: function (e) {
          return "down" === e.direction && !e.top && e.toleranceExceeded;
        },
        shouldPin: function (e) {
          return ("up" === e.direction && e.toleranceExceeded) || e.top;
        },
        addClass: function (e) {
          this.elem.classList.add(this.classes[e]);
        },
        removeClass: function (e) {
          this.elem.classList.remove(this.classes[e]);
        },
        hasClass: function (e) {
          return this.elem.classList.contains(this.classes[e]);
        },
        update: function (e) {
          e.isOutOfBounds ||
            (!0 !== this.frozen &&
              (e.top ? this.top() : this.notTop(),
              e.bottom ? this.bottom() : this.notBottom(),
              this.shouldUnpin(e)
                ? this.unpin()
                : this.shouldPin(e) && this.pin()));
        },
      }),
      (r.options = {
        tolerance: { up: 0, down: 0 },
        offset: 0,
        scroller: e() ? window : null,
        classes: {
          frozen: "headroom--frozen",
          pinned: "headroom--pinned",
          unpinned: "headroom--unpinned",
          top: "headroom--top",
          notTop: "headroom--not-top",
          bottom: "headroom--bottom",
          notBottom: "headroom--not-bottom",
          initial: "headroom",
        },
      }),
      (r.cutsTheMustard = !!(
        e() &&
        function () {}.bind &&
        "classList" in document.documentElement &&
        Object.assign &&
        Object.keys &&
        requestAnimationFrame
      )),
      r
    );
  }),
  (function (e) {
    e &&
      ((e.fn.headroom = function (t) {
        return this.each(function () {
          var n = e(this),
            r = n.data("headroom"),
            i = "object" == typeof t && t;
          (i = e.extend(!0, {}, Headroom.options, i)),
            r || ((r = new Headroom(this, i)).init(), n.data("headroom", r)),
            "string" == typeof t &&
              (r[t](), "destroy" === t && n.removeData("headroom"));
        });
      }),
      e("[data-headroom]").each(function () {
        var t = e(this);
        t.headroom(t.data());
      }));
  })(window.Zepto || window.jQuery),
  (function () {
    var e = function (t) {
      var n = new e.Index();
      return (
        n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer),
        t && t.call(n, n),
        n
      );
    };
    (e.version = "0.7.0"),
      (e.utils = {}),
      (e.utils.warn = (function (e) {
        return function (t) {
          e.console && console.warn && console.warn(t);
        };
      })(this)),
      (e.utils.asString = function (e) {
        return void 0 === e || null === e ? "" : e.toString();
      }),
      (e.EventEmitter = function () {
        this.events = {};
      }),
      (e.EventEmitter.prototype.addListener = function () {
        var e = Array.prototype.slice.call(arguments),
          t = e.pop(),
          n = e;
        if ("function" != typeof t)
          throw new TypeError("last argument must be a function");
        n.forEach(function (e) {
          this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t);
        }, this);
      }),
      (e.EventEmitter.prototype.removeListener = function (e, t) {
        if (this.hasHandler(e)) {
          var n = this.events[e].indexOf(t);
          this.events[e].splice(n, 1),
            this.events[e].length || delete this.events[e];
        }
      }),
      (e.EventEmitter.prototype.emit = function (e) {
        if (this.hasHandler(e)) {
          var t = Array.prototype.slice.call(arguments, 1);
          this.events[e].forEach(function (e) {
            e.apply(void 0, t);
          });
        }
      }),
      (e.EventEmitter.prototype.hasHandler = function (e) {
        return e in this.events;
      }),
      (e.tokenizer = function (t) {
        return arguments.length && null != t && void 0 != t
          ? Array.isArray(t)
            ? t.map(function (t) {
                return e.utils.asString(t).toLowerCase();
              })
            : t.toString().trim().toLowerCase().split(e.tokenizer.seperator)
          : [];
      }),
      (e.tokenizer.seperator = /[\s\-]+/),
      (e.tokenizer.load = function (e) {
        var t = this.registeredFunctions[e];
        if (!t) throw new Error("Cannot load un-registered function: " + e);
        return t;
      }),
      (e.tokenizer.label = "default"),
      (e.tokenizer.registeredFunctions = { default: e.tokenizer }),
      (e.tokenizer.registerFunction = function (t, n) {
        n in this.registeredFunctions &&
          e.utils.warn("Overwriting existing tokenizer: " + n),
          (t.label = n),
          (this.registeredFunctions[n] = t);
      }),
      (e.Pipeline = function () {
        this._stack = [];
      }),
      (e.Pipeline.registeredFunctions = {}),
      (e.Pipeline.registerFunction = function (t, n) {
        n in this.registeredFunctions &&
          e.utils.warn("Overwriting existing registered function: " + n),
          (t.label = n),
          (e.Pipeline.registeredFunctions[t.label] = t);
      }),
      (e.Pipeline.warnIfFunctionNotRegistered = function (t) {
        (t.label && t.label in this.registeredFunctions) ||
          e.utils.warn(
            "Function is not registered with pipeline. This may cause problems when serialising the index.\n",
            t
          );
      }),
      (e.Pipeline.load = function (t) {
        var n = new e.Pipeline();
        return (
          t.forEach(function (t) {
            var r = e.Pipeline.registeredFunctions[t];
            if (!r) throw new Error("Cannot load un-registered function: " + t);
            n.add(r);
          }),
          n
        );
      }),
      (e.Pipeline.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (t) {
          e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t);
        }, this);
      }),
      (e.Pipeline.prototype.after = function (t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var r = this._stack.indexOf(t);
        if (-1 == r) throw new Error("Cannot find existingFn");
        (r += 1), this._stack.splice(r, 0, n);
      }),
      (e.Pipeline.prototype.before = function (t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var r = this._stack.indexOf(t);
        if (-1 == r) throw new Error("Cannot find existingFn");
        this._stack.splice(r, 0, n);
      }),
      (e.Pipeline.prototype.remove = function (e) {
        var t = this._stack.indexOf(e);
        -1 != t && this._stack.splice(t, 1);
      }),
      (e.Pipeline.prototype.run = function (e) {
        for (
          var t = [], n = e.length, r = this._stack.length, i = 0;
          i < n;
          i++
        ) {
          for (
            var o = e[i], s = 0;
            s < r && void 0 !== (o = this._stack[s](o, i, e)) && "" !== o;
            s++
          );
          void 0 !== o && "" !== o && t.push(o);
        }
        return t;
      }),
      (e.Pipeline.prototype.reset = function () {
        this._stack = [];
      }),
      (e.Pipeline.prototype.toJSON = function () {
        return this._stack.map(function (t) {
          return e.Pipeline.warnIfFunctionNotRegistered(t), t.label;
        });
      }),
      (e.Vector = function () {
        (this._magnitude = null), (this.list = void 0), (this.length = 0);
      }),
      (e.Vector.Node = function (e, t, n) {
        (this.idx = e), (this.val = t), (this.next = n);
      }),
      (e.Vector.prototype.insert = function (t, n) {
        this._magnitude = void 0;
        var r = this.list;
        if (!r) return (this.list = new e.Vector.Node(t, n, r)), this.length++;
        if (t < r.idx)
          return (this.list = new e.Vector.Node(t, n, r)), this.length++;
        for (var i = r, o = r.next; void 0 != o; ) {
          if (t < o.idx)
            return (i.next = new e.Vector.Node(t, n, o)), this.length++;
          (i = o), (o = o.next);
        }
        return (i.next = new e.Vector.Node(t, n, o)), this.length++;
      }),
      (e.Vector.prototype.magnitude = function () {
        if (this._magnitude) return this._magnitude;
        for (var e, t = this.list, n = 0; t; )
          (n += (e = t.val) * e), (t = t.next);
        return (this._magnitude = Math.sqrt(n));
      }),
      (e.Vector.prototype.dot = function (e) {
        for (var t = this.list, n = e.list, r = 0; t && n; )
          t.idx < n.idx
            ? (t = t.next)
            : t.idx > n.idx
            ? (n = n.next)
            : ((r += t.val * n.val), (t = t.next), (n = n.next));
        return r;
      }),
      (e.Vector.prototype.similarity = function (e) {
        return this.dot(e) / (this.magnitude() * e.magnitude());
      }),
      (e.SortedSet = function () {
        (this.length = 0), (this.elements = []);
      }),
      (e.SortedSet.load = function (e) {
        var t = new this();
        return (t.elements = e), (t.length = e.length), t;
      }),
      (e.SortedSet.prototype.add = function () {
        var e, t;
        for (e = 0; e < arguments.length; e++)
          (t = arguments[e]),
            ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
        this.length = this.elements.length;
      }),
      (e.SortedSet.prototype.toArray = function () {
        return this.elements.slice();
      }),
      (e.SortedSet.prototype.map = function (e, t) {
        return this.elements.map(e, t);
      }),
      (e.SortedSet.prototype.forEach = function (e, t) {
        return this.elements.forEach(e, t);
      }),
      (e.SortedSet.prototype.indexOf = function (e) {
        for (
          var t = 0,
            n = this.elements.length,
            r = n - t,
            i = t + Math.floor(r / 2),
            o = this.elements[i];
          r > 1;

        ) {
          if (o === e) return i;
          o < e && (t = i),
            o > e && (n = i),
            (r = n - t),
            (i = t + Math.floor(r / 2)),
            (o = this.elements[i]);
        }
        return o === e ? i : -1;
      }),
      (e.SortedSet.prototype.locationFor = function (e) {
        for (
          var t = 0,
            n = this.elements.length,
            r = n - t,
            i = t + Math.floor(r / 2),
            o = this.elements[i];
          r > 1;

        )
          o < e && (t = i),
            o > e && (n = i),
            (r = n - t),
            (i = t + Math.floor(r / 2)),
            (o = this.elements[i]);
        return o > e ? i : o < e ? i + 1 : void 0;
      }),
      (e.SortedSet.prototype.intersect = function (t) {
        for (
          var n = new e.SortedSet(),
            r = 0,
            i = 0,
            o = this.length,
            s = t.length,
            a = this.elements,
            c = t.elements;
          ;

        ) {
          if (r > o - 1 || i > s - 1) break;
          a[r] !== c[i]
            ? a[r] < c[i]
              ? r++
              : a[r] > c[i] && i++
            : (n.add(a[r]), r++, i++);
        }
        return n;
      }),
      (e.SortedSet.prototype.clone = function () {
        var t = new e.SortedSet();
        return (t.elements = this.toArray()), (t.length = t.elements.length), t;
      }),
      (e.SortedSet.prototype.union = function (e) {
        var t, n, r;
        this.length >= e.length ? ((t = this), (n = e)) : ((t = e), (n = this)),
          (r = t.clone());
        for (var i = 0, o = n.toArray(); i < o.length; i++) r.add(o[i]);
        return r;
      }),
      (e.SortedSet.prototype.toJSON = function () {
        return this.toArray();
      }),
      (e.Index = function () {
        (this._fields = []),
          (this._ref = "id"),
          (this.pipeline = new e.Pipeline()),
          (this.documentStore = new e.Store()),
          (this.tokenStore = new e.TokenStore()),
          (this.corpusTokens = new e.SortedSet()),
          (this.eventEmitter = new e.EventEmitter()),
          (this.tokenizerFn = e.tokenizer),
          (this._idfCache = {}),
          this.on(
            "add",
            "remove",
            "update",
            function () {
              this._idfCache = {};
            }.bind(this)
          );
      }),
      (e.Index.prototype.on = function () {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e);
      }),
      (e.Index.prototype.off = function (e, t) {
        return this.eventEmitter.removeListener(e, t);
      }),
      (e.Index.load = function (t) {
        t.version !== e.version &&
          e.utils.warn(
            "version mismatch: current " + e.version + " importing " + t.version
          );
        var n = new this();
        return (
          (n._fields = t.fields),
          (n._ref = t.ref),
          (n.tokenizer = e.tokenizer.load(t.tokenizer)),
          (n.documentStore = e.Store.load(t.documentStore)),
          (n.tokenStore = e.TokenStore.load(t.tokenStore)),
          (n.corpusTokens = e.SortedSet.load(t.corpusTokens)),
          (n.pipeline = e.Pipeline.load(t.pipeline)),
          n
        );
      }),
      (e.Index.prototype.field = function (e, t) {
        var n = { name: e, boost: (t = t || {}).boost || 1 };
        return this._fields.push(n), this;
      }),
      (e.Index.prototype.ref = function (e) {
        return (this._ref = e), this;
      }),
      (e.Index.prototype.tokenizer = function (t) {
        return (
          (t.label && t.label in e.tokenizer.registeredFunctions) ||
            e.utils.warn(
              "Function is not a registered tokenizer. This may cause problems when serialising the index"
            ),
          (this.tokenizerFn = t),
          this
        );
      }),
      (e.Index.prototype.add = function (t, n) {
        var r = {},
          i = new e.SortedSet(),
          o = t[this._ref],
          n = void 0 === n || n;
        this._fields.forEach(function (e) {
          var n = this.pipeline.run(this.tokenizerFn(t[e.name]));
          r[e.name] = n;
          for (var o = 0; o < n.length; o++) {
            var s = n[o];
            i.add(s), this.corpusTokens.add(s);
          }
        }, this),
          this.documentStore.set(o, i);
        for (var s = 0; s < i.length; s++) {
          for (
            var a = i.elements[s], c = 0, u = 0;
            u < this._fields.length;
            u++
          ) {
            var l = this._fields[u],
              d = r[l.name],
              f = d.length;
            if (f) {
              for (var h = 0, p = 0; p < f; p++) d[p] === a && h++;
              c += (h / f) * l.boost;
            }
          }
          this.tokenStore.add(a, { ref: o, tf: c });
        }
        n && this.eventEmitter.emit("add", t, this);
      }),
      (e.Index.prototype.remove = function (e, t) {
        var n = e[this._ref],
          t = void 0 === t || t;
        if (this.documentStore.has(n)) {
          var r = this.documentStore.get(n);
          this.documentStore.remove(n),
            r.forEach(function (e) {
              this.tokenStore.remove(e, n);
            }, this),
            t && this.eventEmitter.emit("remove", e, this);
        }
      }),
      (e.Index.prototype.update = function (e, t) {
        t = void 0 === t || t;
        this.remove(e, !1),
          this.add(e, !1),
          t && this.eventEmitter.emit("update", e, this);
      }),
      (e.Index.prototype.idf = function (e) {
        var t = "@" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, t))
          return this._idfCache[t];
        var n = this.tokenStore.count(e),
          r = 1;
        return (
          n > 0 && (r = 1 + Math.log(this.documentStore.length / n)),
          (this._idfCache[t] = r)
        );
      }),
      (e.Index.prototype.search = function (t) {
        var n = this.pipeline.run(this.tokenizerFn(t)),
          r = new e.Vector(),
          i = [],
          o = this._fields.reduce(function (e, t) {
            return e + t.boost;
          }, 0);
        if (
          !n.some(function (e) {
            return this.tokenStore.has(e);
          }, this)
        )
          return [];
        n.forEach(function (t, n, s) {
          var a = (1 / s.length) * this._fields.length * o,
            c = this,
            u = this.tokenStore.expand(t).reduce(function (n, i) {
              var o = c.corpusTokens.indexOf(i),
                s = c.idf(i),
                u = 1,
                l = new e.SortedSet();
              if (i !== t) {
                var d = Math.max(3, i.length - t.length);
                u = 1 / Math.log(d);
              }
              o > -1 && r.insert(o, a * s * u);
              for (
                var f = c.tokenStore.get(i),
                  h = Object.keys(f),
                  p = h.length,
                  m = 0;
                m < p;
                m++
              )
                l.add(f[h[m]].ref);
              return n.union(l);
            }, new e.SortedSet());
          i.push(u);
        }, this);
        return i
          .reduce(function (e, t) {
            return e.intersect(t);
          })
          .map(function (e) {
            return { ref: e, score: r.similarity(this.documentVector(e)) };
          }, this)
          .sort(function (e, t) {
            return t.score - e.score;
          });
      }),
      (e.Index.prototype.documentVector = function (t) {
        for (
          var n = this.documentStore.get(t),
            r = n.length,
            i = new e.Vector(),
            o = 0;
          o < r;
          o++
        ) {
          var s = n.elements[o],
            a = this.tokenStore.get(s)[t].tf,
            c = this.idf(s);
          i.insert(this.corpusTokens.indexOf(s), a * c);
        }
        return i;
      }),
      (e.Index.prototype.toJSON = function () {
        return {
          version: e.version,
          fields: this._fields,
          ref: this._ref,
          tokenizer: this.tokenizerFn.label,
          documentStore: this.documentStore.toJSON(),
          tokenStore: this.tokenStore.toJSON(),
          corpusTokens: this.corpusTokens.toJSON(),
          pipeline: this.pipeline.toJSON(),
        };
      }),
      (e.Index.prototype.use = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t);
      }),
      (e.Store = function () {
        (this.store = {}), (this.length = 0);
      }),
      (e.Store.load = function (t) {
        var n = new this();
        return (
          (n.length = t.length),
          (n.store = Object.keys(t.store).reduce(function (n, r) {
            return (n[r] = e.SortedSet.load(t.store[r])), n;
          }, {})),
          n
        );
      }),
      (e.Store.prototype.set = function (e, t) {
        this.has(e) || this.length++, (this.store[e] = t);
      }),
      (e.Store.prototype.get = function (e) {
        return this.store[e];
      }),
      (e.Store.prototype.has = function (e) {
        return e in this.store;
      }),
      (e.Store.prototype.remove = function (e) {
        this.has(e) && (delete this.store[e], this.length--);
      }),
      (e.Store.prototype.toJSON = function () {
        return { store: this.store, length: this.length };
      }),
      (e.stemmer = (function () {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log",
          },
          t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: "",
          },
          n = "[aeiouy]",
          r = "[^aeiou][^aeiouy]*",
          i = new RegExp(
            "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"
          ),
          o = new RegExp(
            "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"
          ),
          s = new RegExp(
            "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"
          ),
          a = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),
          c = /^(.+?)(ss|i)es$/,
          u = /^(.+?)([^s])s$/,
          l = /^(.+?)eed$/,
          d = /^(.+?)(ed|ing)$/,
          f = /.$/,
          h = /(at|bl|iz)$/,
          p = new RegExp("([^aeiouylsz])\\1$"),
          m = new RegExp("^" + r + n + "[^aeiouwxy]$"),
          w = /^(.+?[^aeiou])y$/,
          g =
            /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          v = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          b =
            /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          y = /^(.+?)(s|t)(ion)$/,
          _ = /^(.+?)e$/,
          k = /ll$/,
          x = new RegExp("^" + r + n + "[^aeiouwxy]$");
        return function (n) {
          var r, C, z, S, T, E, M;
          if (n.length < 3) return n;
          "y" == (z = n.substr(0, 1)) && (n = z.toUpperCase() + n.substr(1)),
            (S = c),
            (T = u),
            S.test(n)
              ? (n = n.replace(S, "$1$2"))
              : T.test(n) && (n = n.replace(T, "$1$2")),
            (S = l),
            (T = d),
            S.test(n)
              ? ((A = S.exec(n)),
                (S = i).test(A[1]) && ((S = f), (n = n.replace(S, ""))))
              : T.test(n) &&
                ((r = (A = T.exec(n))[1]),
                (T = a).test(r) &&
                  ((E = p),
                  (M = m),
                  (T = h).test((n = r))
                    ? (n += "e")
                    : E.test(n)
                    ? ((S = f), (n = n.replace(S, "")))
                    : M.test(n) && (n += "e")));
          (S = w).test(n) && (n = (r = (A = S.exec(n))[1]) + "i");
          (S = g).test(n) &&
            ((r = (A = S.exec(n))[1]),
            (C = A[2]),
            (S = i).test(r) && (n = r + e[C]));
          (S = v).test(n) &&
            ((r = (A = S.exec(n))[1]),
            (C = A[2]),
            (S = i).test(r) && (n = r + t[C]));
          (S = b),
            (T = y),
            S.test(n)
              ? ((r = (A = S.exec(n))[1]), (S = o).test(r) && (n = r))
              : T.test(n) &&
                ((r = (A = T.exec(n))[1] + A[2]), (T = o).test(r) && (n = r));
          if ((S = _).test(n)) {
            var A;
            (r = (A = S.exec(n))[1]),
              (T = s),
              (E = x),
              ((S = o).test(r) || (T.test(r) && !E.test(r))) && (n = r);
          }
          return (
            (S = k),
            (T = o),
            S.test(n) && T.test(n) && ((S = f), (n = n.replace(S, ""))),
            "y" == z && (n = z.toLowerCase() + n.substr(1)),
            n
          );
        };
      })()),
      e.Pipeline.registerFunction(e.stemmer, "stemmer"),
      (e.generateStopWordFilter = function (e) {
        var t = e.reduce(function (e, t) {
          return (e[t] = t), e;
        }, {});
        return function (e) {
          if (e && t[e] !== e) return e;
        };
      }),
      (e.stopWordFilter = e.generateStopWordFilter([
        "a",
        "able",
        "about",
        "across",
        "after",
        "all",
        "almost",
        "also",
        "am",
        "among",
        "an",
        "and",
        "any",
        "are",
        "as",
        "at",
        "be",
        "because",
        "been",
        "but",
        "by",
        "can",
        "cannot",
        "could",
        "dear",
        "did",
        "do",
        "does",
        "either",
        "else",
        "ever",
        "every",
        "for",
        "from",
        "get",
        "got",
        "had",
        "has",
        "have",
        "he",
        "her",
        "hers",
        "him",
        "his",
        "how",
        "however",
        "i",
        "if",
        "in",
        "into",
        "is",
        "it",
        "its",
        "just",
        "least",
        "let",
        "like",
        "likely",
        "may",
        "me",
        "might",
        "most",
        "must",
        "my",
        "neither",
        "no",
        "nor",
        "not",
        "of",
        "off",
        "often",
        "on",
        "only",
        "or",
        "other",
        "our",
        "own",
        "rather",
        "said",
        "say",
        "says",
        "she",
        "should",
        "since",
        "so",
        "some",
        "than",
        "that",
        "the",
        "their",
        "them",
        "then",
        "there",
        "these",
        "they",
        "this",
        "tis",
        "to",
        "too",
        "twas",
        "us",
        "wants",
        "was",
        "we",
        "were",
        "what",
        "when",
        "where",
        "which",
        "while",
        "who",
        "whom",
        "why",
        "will",
        "with",
        "would",
        "yet",
        "you",
        "your",
      ])),
      e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"),
      (e.trimmer = function (e) {
        return e.replace(/^\W+/, "").replace(/\W+$/, "");
      }),
      e.Pipeline.registerFunction(e.trimmer, "trimmer"),
      (e.TokenStore = function () {
        (this.root = { docs: {} }), (this.length = 0);
      }),
      (e.TokenStore.load = function (e) {
        var t = new this();
        return (t.root = e.root), (t.length = e.length), t;
      }),
      (e.TokenStore.prototype.add = function (e, t, n) {
        var n = n || this.root,
          r = e.charAt(0),
          i = e.slice(1);
        return (
          r in n || (n[r] = { docs: {} }),
          0 === i.length
            ? ((n[r].docs[t.ref] = t), void (this.length += 1))
            : this.add(i, t, n[r])
        );
      }),
      (e.TokenStore.prototype.has = function (e) {
        if (!e) return !1;
        for (var t = this.root, n = 0; n < e.length; n++) {
          if (!t[e.charAt(n)]) return !1;
          t = t[e.charAt(n)];
        }
        return !0;
      }),
      (e.TokenStore.prototype.getNode = function (e) {
        if (!e) return {};
        for (var t = this.root, n = 0; n < e.length; n++) {
          if (!t[e.charAt(n)]) return {};
          t = t[e.charAt(n)];
        }
        return t;
      }),
      (e.TokenStore.prototype.get = function (e, t) {
        return this.getNode(e, t).docs || {};
      }),
      (e.TokenStore.prototype.count = function (e, t) {
        return Object.keys(this.get(e, t)).length;
      }),
      (e.TokenStore.prototype.remove = function (e, t) {
        if (e) {
          for (var n = this.root, r = 0; r < e.length; r++) {
            if (!(e.charAt(r) in n)) return;
            n = n[e.charAt(r)];
          }
          delete n.docs[t];
        }
      }),
      (e.TokenStore.prototype.expand = function (e, t) {
        var n = this.getNode(e),
          r = n.docs || {},
          t = t || [];
        return (
          Object.keys(r).length && t.push(e),
          Object.keys(n).forEach(function (n) {
            "docs" !== n && t.concat(this.expand(e + n, t));
          }, this),
          t
        );
      }),
      (e.TokenStore.prototype.toJSON = function () {
        return { root: this.root, length: this.length };
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(t)
          : "object" == typeof exports
          ? (module.exports = t())
          : (e.lunr = t());
      })(this, function () {
        return e;
      });
  })(),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      (e.stemmerSupport = {
        Among: function (e, t, n, r) {
          if (
            ((this.toCharArray = function (e) {
              for (var t = e.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = e.charCodeAt(r);
              return n;
            }),
            (!e && "" != e) || (!t && 0 != t) || !n)
          )
            throw (
              "Bad Among initialisation: s:" +
              e +
              ", substring_i: " +
              t +
              ", result: " +
              n
            );
          (this.s_size = e.length),
            (this.s = this.toCharArray(e)),
            (this.substring_i = t),
            (this.result = n),
            (this.method = r);
        },
        SnowballProgram: function () {
          var e;
          return {
            bra: 0,
            ket: 0,
            limit: 0,
            cursor: 0,
            limit_backward: 0,
            setCurrent: function (t) {
              (e = t),
                (this.cursor = 0),
                (this.limit = t.length),
                (this.limit_backward = 0),
                (this.bra = this.cursor),
                (this.ket = this.limit);
            },
            getCurrent: function () {
              var t = e;
              return (e = null), t;
            },
            in_grouping: function (t, n, r) {
              if (this.cursor < this.limit) {
                var i = e.charCodeAt(this.cursor);
                if (i <= r && i >= n && ((i -= n), t[i >> 3] & (1 << (7 & i))))
                  return this.cursor++, !0;
              }
              return !1;
            },
            in_grouping_b: function (t, n, r) {
              if (this.cursor > this.limit_backward) {
                var i = e.charCodeAt(this.cursor - 1);
                if (i <= r && i >= n && ((i -= n), t[i >> 3] & (1 << (7 & i))))
                  return this.cursor--, !0;
              }
              return !1;
            },
            out_grouping: function (t, n, r) {
              if (this.cursor < this.limit) {
                var i = e.charCodeAt(this.cursor);
                if (i > r || i < n) return this.cursor++, !0;
                if (((i -= n), !(t[i >> 3] & (1 << (7 & i)))))
                  return this.cursor++, !0;
              }
              return !1;
            },
            out_grouping_b: function (t, n, r) {
              if (this.cursor > this.limit_backward) {
                var i = e.charCodeAt(this.cursor - 1);
                if (i > r || i < n) return this.cursor--, !0;
                if (((i -= n), !(t[i >> 3] & (1 << (7 & i)))))
                  return this.cursor--, !0;
              }
              return !1;
            },
            eq_s: function (t, n) {
              if (this.limit - this.cursor < t) return !1;
              for (var r = 0; r < t; r++)
                if (e.charCodeAt(this.cursor + r) != n.charCodeAt(r)) return !1;
              return (this.cursor += t), !0;
            },
            eq_s_b: function (t, n) {
              if (this.cursor - this.limit_backward < t) return !1;
              for (var r = 0; r < t; r++)
                if (e.charCodeAt(this.cursor - t + r) != n.charCodeAt(r))
                  return !1;
              return (this.cursor -= t), !0;
            },
            find_among: function (t, n) {
              for (
                var r = 0,
                  i = n,
                  o = this.cursor,
                  s = this.limit,
                  a = 0,
                  c = 0,
                  u = !1;
                ;

              ) {
                for (
                  var l = r + ((i - r) >> 1),
                    d = 0,
                    f = a < c ? a : c,
                    h = t[l],
                    p = f;
                  p < h.s_size;
                  p++
                ) {
                  if (o + f == s) {
                    d = -1;
                    break;
                  }
                  if ((d = e.charCodeAt(o + f) - h.s[p])) break;
                  f++;
                }
                if (
                  (d < 0 ? ((i = l), (c = f)) : ((r = l), (a = f)), i - r <= 1)
                ) {
                  if (r > 0 || i == r || u) break;
                  u = !0;
                }
              }
              for (;;) {
                if (a >= (h = t[r]).s_size) {
                  if (((this.cursor = o + h.s_size), !h.method))
                    return h.result;
                  var m = h.method();
                  if (((this.cursor = o + h.s_size), m)) return h.result;
                }
                if ((r = h.substring_i) < 0) return 0;
              }
            },
            find_among_b: function (t, n) {
              for (
                var r = 0,
                  i = n,
                  o = this.cursor,
                  s = this.limit_backward,
                  a = 0,
                  c = 0,
                  u = !1;
                ;

              ) {
                for (
                  var l = r + ((i - r) >> 1),
                    d = 0,
                    f = a < c ? a : c,
                    h = (p = t[l]).s_size - 1 - f;
                  h >= 0;
                  h--
                ) {
                  if (o - f == s) {
                    d = -1;
                    break;
                  }
                  if ((d = e.charCodeAt(o - 1 - f) - p.s[h])) break;
                  f++;
                }
                if (
                  (d < 0 ? ((i = l), (c = f)) : ((r = l), (a = f)), i - r <= 1)
                ) {
                  if (r > 0 || i == r || u) break;
                  u = !0;
                }
              }
              for (;;) {
                var p = t[r];
                if (a >= p.s_size) {
                  if (((this.cursor = o - p.s_size), !p.method))
                    return p.result;
                  var m = p.method();
                  if (((this.cursor = o - p.s_size), m)) return p.result;
                }
                if ((r = p.substring_i) < 0) return 0;
              }
            },
            replace_s: function (t, n, r) {
              var i = r.length - (n - t),
                o = e.substring(0, t),
                s = e.substring(n);
              return (
                (e = o + r + s),
                (this.limit += i),
                this.cursor >= n
                  ? (this.cursor += i)
                  : this.cursor > t && (this.cursor = t),
                i
              );
            },
            slice_check: function () {
              if (
                this.bra < 0 ||
                this.bra > this.ket ||
                this.ket > this.limit ||
                this.limit > e.length
              )
                throw "faulty slice operation";
            },
            slice_from: function (e) {
              this.slice_check(), this.replace_s(this.bra, this.ket, e);
            },
            slice_del: function () {
              this.slice_from("");
            },
            insert: function (e, t, n) {
              var r = this.replace_s(e, t, n);
              e <= this.bra && (this.bra += r),
                e <= this.ket && (this.ket += r);
            },
            slice_to: function () {
              return this.slice_check(), e.substring(this.bra, this.ket);
            },
            eq_v_b: function (e) {
              return this.eq_s_b(e.length, e);
            },
          };
        },
      }),
        (e.trimmerSupport = {
          generateTrimmer: function (e) {
            var t = new RegExp("^[^" + e + "]+"),
              n = new RegExp("[^" + e + "]+$");
            return function (e) {
              return "function" == typeof e.update
                ? e.update(function (e) {
                    return e.replace(t, "").replace(n, "");
                  })
                : e.replace(t, "").replace(n, "");
            };
          },
        });
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.ru = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.ru.trimmer, e.ru.stopWordFilter, e.ru.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.ru.stemmer));
      }),
        (e.ru.wordCharacters = "??-????-???????????-??????-?????????"),
        (e.ru.trimmer = e.trimmerSupport.generateTrimmer(e.ru.wordCharacters)),
        e.Pipeline.registerFunction(e.ru.trimmer, "trimmer-ru"),
        (e.ru.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e() {
                for (; !b.in_grouping(v, 1072, 1103); ) {
                  if (b.cursor >= b.limit) return !1;
                  b.cursor++;
                }
                return !0;
              }
              function r() {
                for (; !b.out_grouping(v, 1072, 1103); ) {
                  if (b.cursor >= b.limit) return !1;
                  b.cursor++;
                }
                return !0;
              }
              function i(e, t) {
                var n, r;
                if (((b.ket = b.cursor), (n = b.find_among_b(e, t)))) {
                  switch (((b.bra = b.cursor), n)) {
                    case 1:
                      if (
                        ((r = b.limit - b.cursor),
                        !b.eq_s_b(1, "??") &&
                          ((b.cursor = b.limit - r), !b.eq_s_b(1, "??")))
                      )
                        return !1;
                    case 2:
                      b.slice_del();
                  }
                  return !0;
                }
                return !1;
              }
              function o(e, t) {
                var n;
                return (
                  (b.ket = b.cursor),
                  !!(n = b.find_among_b(e, t)) &&
                    ((b.bra = b.cursor), 1 == n && b.slice_del(), !0)
                );
              }
              function s() {
                return !!o(d, 26) && (i(f, 8), !0);
              }
              function a() {
                var e;
                (b.ket = b.cursor),
                  (e = b.find_among_b(w, 2)) &&
                    ((b.bra = b.cursor),
                    c <= b.cursor && 1 == e && b.slice_del());
              }
              var c,
                u,
                l = [
                  new t("??", -1, 1),
                  new t("????", 0, 2),
                  new t("????", 0, 2),
                  new t("??????", -1, 1),
                  new t("????????", 3, 2),
                  new t("????????", 3, 2),
                  new t("??????????", -1, 1),
                  new t("????????????", 6, 2),
                  new t("????????????", 6, 2),
                ],
                d = [
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??????", -1, 1),
                  new t("??????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??????", -1, 1),
                  new t("??????", -1, 1),
                  new t("??????", -1, 1),
                  new t("??????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                ],
                f = [
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??????", 2, 2),
                  new t("??????", 2, 2),
                  new t("??", -1, 1),
                  new t("????", 5, 1),
                  new t("??????", 6, 2),
                ],
                h = [new t("????", -1, 1), new t("????", -1, 1)],
                p = [
                  new t("????", -1, 1),
                  new t("??????", 0, 2),
                  new t("??????", 0, 2),
                  new t("????", -1, 1),
                  new t("??????", 3, 2),
                  new t("??????", -1, 1),
                  new t("??????", -1, 2),
                  new t("??????", -1, 1),
                  new t("????????", 7, 2),
                  new t("????????", 7, 2),
                  new t("????", -1, 1),
                  new t("??????", 10, 2),
                  new t("??????", 10, 2),
                  new t("??", -1, 1),
                  new t("????", 13, 2),
                  new t("????", 13, 2),
                  new t("??", -1, 1),
                  new t("????", 16, 2),
                  new t("????", 16, 2),
                  new t("????", -1, 1),
                  new t("????", -1, 2),
                  new t("????", -1, 2),
                  new t("??", -1, 1),
                  new t("????", 22, 2),
                  new t("????", -1, 1),
                  new t("??????", 24, 2),
                  new t("??????", 24, 2),
                  new t("????", -1, 1),
                  new t("??????", 27, 2),
                  new t("??????", 27, 1),
                  new t("????", -1, 1),
                  new t("??????", 30, 2),
                  new t("????", -1, 2),
                  new t("????", -1, 2),
                  new t("????", -1, 1),
                  new t("??????", 34, 2),
                  new t("????", -1, 2),
                  new t("????", -1, 1),
                  new t("??????", 37, 2),
                  new t("????", -1, 1),
                  new t("??????", 39, 2),
                  new t("??????", 39, 2),
                  new t("??????", -1, 1),
                  new t("??????", -1, 2),
                  new t("??", -1, 2),
                  new t("????", 44, 2),
                ],
                m = [
                  new t("??", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??", -1, 1),
                  new t("????", 3, 1),
                  new t("????", 3, 1),
                  new t("??", -1, 1),
                  new t("????", 6, 1),
                  new t("????", 6, 1),
                  new t("??????", 6, 1),
                  new t("??????", 6, 1),
                  new t("????????", 10, 1),
                  new t("??", -1, 1),
                  new t("????", 12, 1),
                  new t("??????", 13, 1),
                  new t("????", 12, 1),
                  new t("????", 12, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??????", 18, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??????", 21, 1),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                  new t("????", -1, 1),
                  new t("????", -1, 1),
                  new t("??????", 26, 1),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                  new t("????", 30, 1),
                  new t("????", 30, 1),
                  new t("??", -1, 1),
                  new t("????", 33, 1),
                  new t("????", 33, 1),
                ],
                w = [new t("??????", -1, 1), new t("????????", -1, 1)],
                g = [
                  new t("????????", -1, 1),
                  new t("??", -1, 2),
                  new t("??????", -1, 1),
                  new t("??", -1, 3),
                ],
                v = [33, 65, 8, 232],
                b = new n();
              (this.setCurrent = function (e) {
                b.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return b.getCurrent();
                }),
                (this.stem = function () {
                  return (
                    (u = b.limit),
                    (c = u),
                    e() &&
                      ((u = b.cursor), r() && e() && r() && (c = b.cursor)),
                    (b.cursor = b.limit),
                    !(b.cursor < u) &&
                      ((b.limit_backward = u),
                      i(l, 9) ||
                        ((b.cursor = b.limit),
                        o(h, 2) || (b.cursor = b.limit),
                        s() ||
                          ((b.cursor = b.limit),
                          i(p, 46) || ((b.cursor = b.limit), o(m, 36)))),
                      (b.cursor = b.limit),
                      (b.ket = b.cursor),
                      b.eq_s_b(1, "??")
                        ? ((b.bra = b.cursor), b.slice_del())
                        : (b.cursor = b.limit),
                      a(),
                      (b.cursor = b.limit),
                      (function () {
                        var e;
                        if (((b.ket = b.cursor), (e = b.find_among_b(g, 4))))
                          switch (((b.bra = b.cursor), e)) {
                            case 1:
                              if (
                                (b.slice_del(),
                                (b.ket = b.cursor),
                                !b.eq_s_b(1, "??"))
                              )
                                break;
                              b.bra = b.cursor;
                            case 2:
                              if (!b.eq_s_b(1, "??")) break;
                            case 3:
                              b.slice_del();
                          }
                      })(),
                      !0)
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.ru.stemmer, "stemmer-ru"),
        (e.ru.stopWordFilter = e.generateStopWordFilter(
          "???????? ?????? ???????????? ?????????? ???????????? ?????????? ?????????? ???????????? ???????????? ?????????? ???????? ?????????? ???????? ???? ???????????? ???????? ?????? ???????? ???????? ???????? ???????? ?? ???????????? ???????????? ???????????? ???????????? ?????? ???????? ?????? ?????? ???????? ???????? ???????? ?????????? ?????????? ?????????? ???????? ?????????? ???????? ???????? ?????????? ???? ???????????? ?????? ?????????????????????????? ???????????????????????? ???????????? ?????????????? ?????? ?????????????? ?????????????? ?????????? ?????? ???????????? ?????????? ???????? ?????????? ?????????? ???????? ???????? ?????? ?????????? ?????? ?????? ???????????? ???? ?? ?????? ?????????????? ?????????????? ?????? ???????? ???????? ???? ?????????? ???????? ???????????? ???????????? ?????????? ?????? ?????????????????? ???????????????? ?????? ?????????????????????? ???????????????????? ???????? ?????????????????????????? ???????????????????????? ?????????????? ???????????? ?????????????????????????? ?????? ???????? ?????????????? ???????????? ?????? ???? ???????????????? ?????????? ???????????? ???????????? ???????????? ???????????? ?????????? ???????????? ???????????? ?? ?????? ???? ???? ?????? ???????? ???????? ?????? ?????? ???? ???? ?? ???? ?????????? ???? ?????????? ???????????? ???????????? ???????????? ?????????? ???????? ?????????? ?????????? ???????????? ?? ???? ?????? ???? ???????????? ?????????? ?????? ?????? ???????????? ???? ?? ???????????? ???????????? ???????????? ???????????? ?????????????? ?????? ?????????? ?????????? ?????? ?????????? ???????? ?????? ???????? ?????????????? ?????????????? ???????????????? ?????????????? ?????????????? ?????????????? ?????????????? ?????????? ???????????? ?????? ???????? ?????? ???? ???????? ?????????? ???????? ?? ???????? ?????????? ???????? ?????????? ???????????? ???????? ?????????????????? ???????? ???????? ?????? ?????????? ???????????????????????????? ???????????????????????????? ???????????????????????????? ???????????????????????????? ???????? ???????? ?????? ?????????? ?????? ?????????? ?????????? ?????????? ?????? ?????? ?????? ???????? ?????? ?????? ???? ???? ?????????????? ?????? ???????? ?????????? ???????????????? ?????????????? ?????? ???????? ?????? ???????????? ?????? ???????? ???????? ???????? ???? ???????? ?????????????? ???????????????? ?????? ?????? ???????????? ?????? ?????????????? ???????? ???????????????????? ?????????????? ?????????????????? ?????? ?????? ?????? ???? ???????????? ???????? ?????????? ?????????????? ???????????? ???????? ?????? ???????????? ???? ???? ?????????? ???? ?? ???? ?????? ???????????? ???????? ???????????????????????? ?????????????????????? ?????????????? ???????????? ???????????? ?????????? ?????????? ???? ?????? ?????? ?????? ?????????? ???????????????? ???? ???????????????? ???????????? ?????????? ???????????? ?????????? ???? ?????? ???????????????????? ?????????? ???????? ?????? ???????? ?????????? ?????????????? ?????????? ???????????? ???????????? ?????????? ?????????????????? ?????? ?????? ???????????? ???????????? ?????????????????? ?????????????????????? ???????????????????? ?????????? ???????? ?????? ?????????? ???????? ???????????? ?????????? ?? ?????? ???????? ???????? ?????????? ???????????? ?????????? ???????? ???????????? ?????????? ?????????? ???????????? ???????? ???????? ???????????? ?????????? ???????? ?????????? ???????? ?????????? ???????? ???????? ?????????????? ?????????????? ???????????? ?????????????????????? ???????????????????? ???????? ?????? ???????????? ?????????????? ?????????????? ?????????????? ?????????????? ?????????????? ?????????? ???? ?????????? ?????????? ???????????? ?????????????? ???????? ???????? ?? ???? ?????? ?????????? ?????????? ?????????? ?????????? ?????????? ?????? ???????? ???????? ???????? ???? ???????? ???????? ?????? ???????? ???????????? ?????? ???? ?????????? ?????????? ?????????? ???????? ???????? ???????????? ?????? ???????? ?????? ?????? ???????????? ?????? ?????????????????????? ???????????????????? ???? ???????? ?????? ???? ?????????? ?? ???? ?????? ?????????? ???????????? ???????????? ???????? ???????? ???????????? ?????????? ???????? ???????? ?????????????? ?????? ???????? ?????????? ?????????????????? ???????????? ?????????????????????????? ???????????????????????? ?????? ???????? ?????????? ???????? ???????????????????????? ?????????????????????? ???????????? ?????????? ?????? ?????? ???????? ?????????? ???????? ?????? ?????????? ???????? ???????? ?????????? ???????? ?????? ?? \ufeff??".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.ru.stopWordFilter, "stopWordFilter-ru");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.fr = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.fr.trimmer, e.fr.stopWordFilter, e.fr.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.fr.stemmer));
      }),
        (e.fr.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.fr.trimmer = e.trimmerSupport.generateTrimmer(e.fr.wordCharacters)),
        e.Pipeline.registerFunction(e.fr.trimmer, "trimmer-fr"),
        (e.fr.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e(e, t, n) {
                return (
                  !(
                    !x.eq_s(1, e) ||
                    ((x.ket = x.cursor), !x.in_grouping(_, 97, 251))
                  ) && (x.slice_from(t), (x.cursor = n), !0)
                );
              }
              function r(e, t, n) {
                return (
                  !!x.eq_s(1, e) &&
                  ((x.ket = x.cursor), x.slice_from(t), (x.cursor = n), !0)
                );
              }
              function i() {
                for (; !x.in_grouping(_, 97, 251); ) {
                  if (x.cursor >= x.limit) return !0;
                  x.cursor++;
                }
                for (; !x.out_grouping(_, 97, 251); ) {
                  if (x.cursor >= x.limit) return !0;
                  x.cursor++;
                }
                return !1;
              }
              function o() {
                return d <= x.cursor;
              }
              function s() {
                return l <= x.cursor;
              }
              function a() {
                return u <= x.cursor;
              }
              function c() {
                if (
                  !(function () {
                    var e, t;
                    if (((x.ket = x.cursor), (e = x.find_among_b(w, 43)))) {
                      switch (((x.bra = x.cursor), e)) {
                        case 1:
                          if (!a()) return !1;
                          x.slice_del();
                          break;
                        case 2:
                          if (!a()) return !1;
                          x.slice_del(),
                            (x.ket = x.cursor),
                            x.eq_s_b(2, "ic") &&
                              ((x.bra = x.cursor),
                              a() ? x.slice_del() : x.slice_from("iqU"));
                          break;
                        case 3:
                          if (!a()) return !1;
                          x.slice_from("log");
                          break;
                        case 4:
                          if (!a()) return !1;
                          x.slice_from("u");
                          break;
                        case 5:
                          if (!a()) return !1;
                          x.slice_from("ent");
                          break;
                        case 6:
                          if (!o()) return !1;
                          if (
                            (x.slice_del(),
                            (x.ket = x.cursor),
                            (e = x.find_among_b(p, 6)))
                          )
                            switch (((x.bra = x.cursor), e)) {
                              case 1:
                                a() &&
                                  (x.slice_del(),
                                  (x.ket = x.cursor),
                                  x.eq_s_b(2, "at") &&
                                    ((x.bra = x.cursor), a() && x.slice_del()));
                                break;
                              case 2:
                                a()
                                  ? x.slice_del()
                                  : s() && x.slice_from("eux");
                                break;
                              case 3:
                                a() && x.slice_del();
                                break;
                              case 4:
                                o() && x.slice_from("i");
                            }
                          break;
                        case 7:
                          if (!a()) return !1;
                          if (
                            (x.slice_del(),
                            (x.ket = x.cursor),
                            (e = x.find_among_b(m, 3)))
                          )
                            switch (((x.bra = x.cursor), e)) {
                              case 1:
                                a() ? x.slice_del() : x.slice_from("abl");
                                break;
                              case 2:
                                a() ? x.slice_del() : x.slice_from("iqU");
                                break;
                              case 3:
                                a() && x.slice_del();
                            }
                          break;
                        case 8:
                          if (!a()) return !1;
                          if (
                            (x.slice_del(),
                            (x.ket = x.cursor),
                            x.eq_s_b(2, "at") &&
                              ((x.bra = x.cursor),
                              a() &&
                                (x.slice_del(),
                                (x.ket = x.cursor),
                                x.eq_s_b(2, "ic"))))
                          ) {
                            (x.bra = x.cursor),
                              a() ? x.slice_del() : x.slice_from("iqU");
                            break;
                          }
                          break;
                        case 9:
                          x.slice_from("eau");
                          break;
                        case 10:
                          if (!s()) return !1;
                          x.slice_from("al");
                          break;
                        case 11:
                          if (a()) x.slice_del();
                          else {
                            if (!s()) return !1;
                            x.slice_from("eux");
                          }
                          break;
                        case 12:
                          if (!s() || !x.out_grouping_b(_, 97, 251)) return !1;
                          x.slice_del();
                          break;
                        case 13:
                          return o() && x.slice_from("ant"), !1;
                        case 14:
                          return o() && x.slice_from("ent"), !1;
                        case 15:
                          return (
                            (t = x.limit - x.cursor),
                            x.in_grouping_b(_, 97, 251) &&
                              o() &&
                              ((x.cursor = x.limit - t), x.slice_del()),
                            !1
                          );
                      }
                      return !0;
                    }
                    return !1;
                  })() &&
                  ((x.cursor = x.limit),
                  !(function () {
                    var e, t;
                    if (x.cursor < d) return !1;
                    if (
                      ((t = x.limit_backward),
                      (x.limit_backward = d),
                      (x.ket = x.cursor),
                      !(e = x.find_among_b(g, 35)))
                    )
                      return (x.limit_backward = t), !1;
                    if (((x.bra = x.cursor), 1 == e)) {
                      if (!x.out_grouping_b(_, 97, 251))
                        return (x.limit_backward = t), !1;
                      x.slice_del();
                    }
                    return (x.limit_backward = t), !0;
                  })() &&
                    ((x.cursor = x.limit),
                    !(function () {
                      var e, t, n;
                      if (x.cursor < d) return !1;
                      if (
                        ((t = x.limit_backward),
                        (x.limit_backward = d),
                        (x.ket = x.cursor),
                        !(e = x.find_among_b(v, 38)))
                      )
                        return (x.limit_backward = t), !1;
                      switch (((x.bra = x.cursor), e)) {
                        case 1:
                          if (!a()) return (x.limit_backward = t), !1;
                          x.slice_del();
                          break;
                        case 2:
                          x.slice_del();
                          break;
                        case 3:
                          x.slice_del(),
                            (n = x.limit - x.cursor),
                            (x.ket = x.cursor),
                            x.eq_s_b(1, "e")
                              ? ((x.bra = x.cursor), x.slice_del())
                              : (x.cursor = x.limit - n);
                      }
                      return (x.limit_backward = t), !0;
                    })()))
                )
                  return (
                    (x.cursor = x.limit),
                    void (function () {
                      var e,
                        t,
                        n,
                        r,
                        i = x.limit - x.cursor;
                      if (
                        ((x.ket = x.cursor),
                        x.eq_s_b(1, "s")
                          ? ((x.bra = x.cursor),
                            (t = x.limit - x.cursor),
                            x.out_grouping_b(k, 97, 232)
                              ? ((x.cursor = x.limit - t), x.slice_del())
                              : (x.cursor = x.limit - i))
                          : (x.cursor = x.limit - i),
                        x.cursor >= d)
                      ) {
                        if (
                          ((n = x.limit_backward),
                          (x.limit_backward = d),
                          (x.ket = x.cursor),
                          (e = x.find_among_b(b, 7)))
                        )
                          switch (((x.bra = x.cursor), e)) {
                            case 1:
                              if (a()) {
                                if (
                                  ((r = x.limit - x.cursor),
                                  !x.eq_s_b(1, "s") &&
                                    ((x.cursor = x.limit - r),
                                    !x.eq_s_b(1, "t")))
                                )
                                  break;
                                x.slice_del();
                              }
                              break;
                            case 2:
                              x.slice_from("i");
                              break;
                            case 3:
                              x.slice_del();
                              break;
                            case 4:
                              x.eq_s_b(2, "gu") && x.slice_del();
                          }
                        x.limit_backward = n;
                      }
                    })()
                  );
                (x.cursor = x.limit),
                  (x.ket = x.cursor),
                  x.eq_s_b(1, "Y")
                    ? ((x.bra = x.cursor), x.slice_from("i"))
                    : ((x.cursor = x.limit),
                      x.eq_s_b(1, "??") &&
                        ((x.bra = x.cursor), x.slice_from("c")));
              }
              var u,
                l,
                d,
                f = [
                  new t("col", -1, -1),
                  new t("par", -1, -1),
                  new t("tap", -1, -1),
                ],
                h = [
                  new t("", -1, 4),
                  new t("I", 0, 1),
                  new t("U", 0, 2),
                  new t("Y", 0, 3),
                ],
                p = [
                  new t("iqU", -1, 3),
                  new t("abl", -1, 3),
                  new t("I??r", -1, 4),
                  new t("i??r", -1, 4),
                  new t("eus", -1, 2),
                  new t("iv", -1, 1),
                ],
                m = [
                  new t("ic", -1, 2),
                  new t("abil", -1, 1),
                  new t("iv", -1, 3),
                ],
                w = [
                  new t("iqUe", -1, 1),
                  new t("atrice", -1, 2),
                  new t("ance", -1, 1),
                  new t("ence", -1, 5),
                  new t("logie", -1, 3),
                  new t("able", -1, 1),
                  new t("isme", -1, 1),
                  new t("euse", -1, 11),
                  new t("iste", -1, 1),
                  new t("ive", -1, 8),
                  new t("if", -1, 8),
                  new t("usion", -1, 4),
                  new t("ation", -1, 2),
                  new t("ution", -1, 4),
                  new t("ateur", -1, 2),
                  new t("iqUes", -1, 1),
                  new t("atrices", -1, 2),
                  new t("ances", -1, 1),
                  new t("ences", -1, 5),
                  new t("logies", -1, 3),
                  new t("ables", -1, 1),
                  new t("ismes", -1, 1),
                  new t("euses", -1, 11),
                  new t("istes", -1, 1),
                  new t("ives", -1, 8),
                  new t("ifs", -1, 8),
                  new t("usions", -1, 4),
                  new t("ations", -1, 2),
                  new t("utions", -1, 4),
                  new t("ateurs", -1, 2),
                  new t("ments", -1, 15),
                  new t("ements", 30, 6),
                  new t("issements", 31, 12),
                  new t("it??s", -1, 7),
                  new t("ment", -1, 15),
                  new t("ement", 34, 6),
                  new t("issement", 35, 12),
                  new t("amment", 34, 13),
                  new t("emment", 34, 14),
                  new t("aux", -1, 10),
                  new t("eaux", 39, 9),
                  new t("eux", -1, 1),
                  new t("it??", -1, 7),
                ],
                g = [
                  new t("ira", -1, 1),
                  new t("ie", -1, 1),
                  new t("isse", -1, 1),
                  new t("issante", -1, 1),
                  new t("i", -1, 1),
                  new t("irai", 4, 1),
                  new t("ir", -1, 1),
                  new t("iras", -1, 1),
                  new t("ies", -1, 1),
                  new t("??mes", -1, 1),
                  new t("isses", -1, 1),
                  new t("issantes", -1, 1),
                  new t("??tes", -1, 1),
                  new t("is", -1, 1),
                  new t("irais", 13, 1),
                  new t("issais", 13, 1),
                  new t("irions", -1, 1),
                  new t("issions", -1, 1),
                  new t("irons", -1, 1),
                  new t("issons", -1, 1),
                  new t("issants", -1, 1),
                  new t("it", -1, 1),
                  new t("irait", 21, 1),
                  new t("issait", 21, 1),
                  new t("issant", -1, 1),
                  new t("iraIent", -1, 1),
                  new t("issaIent", -1, 1),
                  new t("irent", -1, 1),
                  new t("issent", -1, 1),
                  new t("iront", -1, 1),
                  new t("??t", -1, 1),
                  new t("iriez", -1, 1),
                  new t("issiez", -1, 1),
                  new t("irez", -1, 1),
                  new t("issez", -1, 1),
                ],
                v = [
                  new t("a", -1, 3),
                  new t("era", 0, 2),
                  new t("asse", -1, 3),
                  new t("ante", -1, 3),
                  new t("??e", -1, 2),
                  new t("ai", -1, 3),
                  new t("erai", 5, 2),
                  new t("er", -1, 2),
                  new t("as", -1, 3),
                  new t("eras", 8, 2),
                  new t("??mes", -1, 3),
                  new t("asses", -1, 3),
                  new t("antes", -1, 3),
                  new t("??tes", -1, 3),
                  new t("??es", -1, 2),
                  new t("ais", -1, 3),
                  new t("erais", 15, 2),
                  new t("ions", -1, 1),
                  new t("erions", 17, 2),
                  new t("assions", 17, 3),
                  new t("erons", -1, 2),
                  new t("ants", -1, 3),
                  new t("??s", -1, 2),
                  new t("ait", -1, 3),
                  new t("erait", 23, 2),
                  new t("ant", -1, 3),
                  new t("aIent", -1, 3),
                  new t("eraIent", 26, 2),
                  new t("??rent", -1, 2),
                  new t("assent", -1, 3),
                  new t("eront", -1, 2),
                  new t("??t", -1, 3),
                  new t("ez", -1, 2),
                  new t("iez", 32, 2),
                  new t("eriez", 33, 2),
                  new t("assiez", 33, 3),
                  new t("erez", 32, 2),
                  new t("??", -1, 2),
                ],
                b = [
                  new t("e", -1, 3),
                  new t("I??re", 0, 2),
                  new t("i??re", 0, 2),
                  new t("ion", -1, 1),
                  new t("Ier", -1, 2),
                  new t("ier", -1, 2),
                  new t("??", -1, 4),
                ],
                y = [
                  new t("ell", -1, -1),
                  new t("eill", -1, -1),
                  new t("enn", -1, -1),
                  new t("onn", -1, -1),
                  new t("ett", -1, -1),
                ],
                _ = [
                  17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103,
                  8, 5,
                ],
                k = [1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
                x = new n();
              (this.setCurrent = function (e) {
                x.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return x.getCurrent();
                }),
                (this.stem = function () {
                  var t = x.cursor;
                  return (
                    (function () {
                      for (var t, n; ; ) {
                        if (((t = x.cursor), x.in_grouping(_, 97, 251))) {
                          if (
                            ((x.bra = x.cursor), (n = x.cursor), e("u", "U", t))
                          )
                            continue;
                          if (((x.cursor = n), e("i", "I", t))) continue;
                          if (((x.cursor = n), r("y", "Y", t))) continue;
                        }
                        if (((x.cursor = t), (x.bra = t), !e("y", "Y", t))) {
                          if (
                            ((x.cursor = t),
                            x.eq_s(1, "q") &&
                              ((x.bra = x.cursor), r("u", "U", t)))
                          )
                            continue;
                          if (((x.cursor = t), t >= x.limit)) return;
                          x.cursor++;
                        }
                      }
                    })(),
                    (x.cursor = t),
                    (function () {
                      var e = x.cursor;
                      if (
                        ((d = x.limit),
                        (l = d),
                        (u = d),
                        x.in_grouping(_, 97, 251) &&
                          x.in_grouping(_, 97, 251) &&
                          x.cursor < x.limit)
                      )
                        x.cursor++;
                      else if (((x.cursor = e), !x.find_among(f, 3))) {
                        x.cursor = e;
                        do {
                          if (x.cursor >= x.limit) {
                            x.cursor = d;
                            break;
                          }
                          x.cursor++;
                        } while (!x.in_grouping(_, 97, 251));
                      }
                      (d = x.cursor),
                        (x.cursor = e),
                        i() || ((l = x.cursor), i() || (u = x.cursor));
                    })(),
                    (x.limit_backward = t),
                    (x.cursor = x.limit),
                    c(),
                    (x.cursor = x.limit),
                    (function () {
                      var e = x.limit - x.cursor;
                      x.find_among_b(y, 5) &&
                        ((x.cursor = x.limit - e),
                        (x.ket = x.cursor),
                        x.cursor > x.limit_backward &&
                          (x.cursor--, (x.bra = x.cursor), x.slice_del()));
                    })(),
                    (x.cursor = x.limit),
                    (function () {
                      for (var e, t = 1; x.out_grouping_b(_, 97, 251); ) t--;
                      if (t <= 0) {
                        if (
                          ((x.ket = x.cursor),
                          (e = x.limit - x.cursor),
                          !x.eq_s_b(1, "??") &&
                            ((x.cursor = x.limit - e), !x.eq_s_b(1, "??")))
                        )
                          return;
                        (x.bra = x.cursor), x.slice_from("e");
                      }
                    })(),
                    (x.cursor = x.limit_backward),
                    (function () {
                      for (
                        var e, t;
                        (t = x.cursor), (x.bra = t), (e = x.find_among(h, 4));

                      )
                        switch (((x.ket = x.cursor), e)) {
                          case 1:
                            x.slice_from("i");
                            break;
                          case 2:
                            x.slice_from("u");
                            break;
                          case 3:
                            x.slice_from("y");
                            break;
                          case 4:
                            if (x.cursor >= x.limit) return;
                            x.cursor++;
                        }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.fr.stemmer, "stemmer-fr"),
        (e.fr.stopWordFilter = e.generateStopWordFilter(
          "ai aie aient aies ait as au aura aurai auraient aurais aurait auras aurez auriez aurions aurons auront aux avaient avais avait avec avez aviez avions avons ayant ayez ayons c ce ceci cel?? ces cet cette d dans de des du elle en es est et eu eue eues eurent eus eusse eussent eusses eussiez eussions eut eux e??mes e??t e??tes furent fus fusse fussent fusses fussiez fussions fut f??mes f??t f??tes ici il ils j je l la le les leur leurs lui m ma mais me mes moi mon m??me n ne nos notre nous on ont ou par pas pour qu que quel quelle quelles quels qui s sa sans se sera serai seraient serais serait seras serez seriez serions serons seront ses soi soient sois soit sommes son sont soyez soyons suis sur t ta te tes toi ton tu un une vos votre vous y ?? ??taient ??tais ??tait ??tant ??tiez ??tions ??t?? ??t??e ??t??es ??t??s ??tes".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.fr.stopWordFilter, "stopWordFilter-fr");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.de = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.de.trimmer, e.de.stopWordFilter, e.de.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.de.stemmer));
      }),
        (e.de.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.de.trimmer = e.trimmerSupport.generateTrimmer(e.de.wordCharacters)),
        e.Pipeline.registerFunction(e.de.trimmer, "trimmer-de"),
        (e.de.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e(e, t, n) {
                return (
                  !(
                    !g.eq_s(1, e) ||
                    ((g.ket = g.cursor), !g.in_grouping(p, 97, 252))
                  ) && (g.slice_from(t), (g.cursor = n), !0)
                );
              }
              function r() {
                for (; !g.in_grouping(p, 97, 252); ) {
                  if (g.cursor >= g.limit) return !0;
                  g.cursor++;
                }
                for (; !g.out_grouping(p, 97, 252); ) {
                  if (g.cursor >= g.limit) return !0;
                  g.cursor++;
                }
                return !1;
              }
              function i() {
                return c <= g.cursor;
              }
              function o() {
                return a <= g.cursor;
              }
              var s,
                a,
                c,
                u = [
                  new t("", -1, 6),
                  new t("U", 0, 2),
                  new t("Y", 0, 1),
                  new t("??", 0, 3),
                  new t("??", 0, 4),
                  new t("??", 0, 5),
                ],
                l = [
                  new t("e", -1, 2),
                  new t("em", -1, 1),
                  new t("en", -1, 2),
                  new t("ern", -1, 1),
                  new t("er", -1, 1),
                  new t("s", -1, 3),
                  new t("es", 5, 2),
                ],
                d = [
                  new t("en", -1, 1),
                  new t("er", -1, 1),
                  new t("st", -1, 2),
                  new t("est", 2, 1),
                ],
                f = [new t("ig", -1, 1), new t("lich", -1, 1)],
                h = [
                  new t("end", -1, 1),
                  new t("ig", -1, 2),
                  new t("ung", -1, 1),
                  new t("lich", -1, 3),
                  new t("isch", -1, 2),
                  new t("ik", -1, 2),
                  new t("heit", -1, 3),
                  new t("keit", -1, 4),
                ],
                p = [
                  17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32,
                  8,
                ],
                m = [117, 30, 5],
                w = [117, 30, 4],
                g = new n();
              (this.setCurrent = function (e) {
                g.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return g.getCurrent();
                }),
                (this.stem = function () {
                  var t = g.cursor;
                  return (
                    (function () {
                      for (var t, n, r, i, o = g.cursor; ; )
                        if (((t = g.cursor), (g.bra = t), g.eq_s(1, "??")))
                          (g.ket = g.cursor), g.slice_from("ss");
                        else {
                          if (t >= g.limit) break;
                          g.cursor = t + 1;
                        }
                      for (g.cursor = o; ; )
                        for (n = g.cursor; ; ) {
                          if (((r = g.cursor), g.in_grouping(p, 97, 252))) {
                            if (((i = g.cursor), (g.bra = i), e("u", "U", r)))
                              break;
                            if (((g.cursor = i), e("y", "Y", r))) break;
                          }
                          if (r >= g.limit) return void (g.cursor = n);
                          g.cursor = r + 1;
                        }
                    })(),
                    (g.cursor = t),
                    (function () {
                      (c = g.limit), (a = c);
                      var e = g.cursor + 3;
                      0 <= e &&
                        e <= g.limit &&
                        ((s = e),
                        r() ||
                          ((c = g.cursor) < s && (c = s),
                          r() || (a = g.cursor)));
                    })(),
                    (g.limit_backward = t),
                    (g.cursor = g.limit),
                    (function () {
                      var e,
                        t,
                        n,
                        r,
                        s = g.limit - g.cursor;
                      if (
                        ((g.ket = g.cursor),
                        (e = g.find_among_b(l, 7)) && ((g.bra = g.cursor), i()))
                      )
                        switch (e) {
                          case 1:
                            g.slice_del();
                            break;
                          case 2:
                            g.slice_del(),
                              (g.ket = g.cursor),
                              g.eq_s_b(1, "s") &&
                                ((g.bra = g.cursor),
                                g.eq_s_b(3, "nis") && g.slice_del());
                            break;
                          case 3:
                            g.in_grouping_b(m, 98, 116) && g.slice_del();
                        }
                      if (
                        ((g.cursor = g.limit - s),
                        (g.ket = g.cursor),
                        (e = g.find_among_b(d, 4)) && ((g.bra = g.cursor), i()))
                      )
                        switch (e) {
                          case 1:
                            g.slice_del();
                            break;
                          case 2:
                            if (g.in_grouping_b(w, 98, 116)) {
                              var a = g.cursor - 3;
                              g.limit_backward <= a &&
                                a <= g.limit &&
                                ((g.cursor = a), g.slice_del());
                            }
                        }
                      if (
                        ((g.cursor = g.limit - s),
                        (g.ket = g.cursor),
                        (e = g.find_among_b(h, 8)) && ((g.bra = g.cursor), o()))
                      )
                        switch (e) {
                          case 1:
                            g.slice_del(),
                              (g.ket = g.cursor),
                              g.eq_s_b(2, "ig") &&
                                ((g.bra = g.cursor),
                                (t = g.limit - g.cursor),
                                g.eq_s_b(1, "e") ||
                                  ((g.cursor = g.limit - t),
                                  o() && g.slice_del()));
                            break;
                          case 2:
                            (n = g.limit - g.cursor),
                              g.eq_s_b(1, "e") ||
                                ((g.cursor = g.limit - n), g.slice_del());
                            break;
                          case 3:
                            if (
                              (g.slice_del(),
                              (g.ket = g.cursor),
                              (r = g.limit - g.cursor),
                              !g.eq_s_b(2, "er") &&
                                ((g.cursor = g.limit - r), !g.eq_s_b(2, "en")))
                            )
                              break;
                            (g.bra = g.cursor), i() && g.slice_del();
                            break;
                          case 4:
                            g.slice_del(),
                              (g.ket = g.cursor),
                              (e = g.find_among_b(f, 2)) &&
                                ((g.bra = g.cursor),
                                o() && 1 == e && g.slice_del());
                        }
                    })(),
                    (g.cursor = g.limit_backward),
                    (function () {
                      for (var e, t; ; ) {
                        if (
                          ((t = g.cursor),
                          (g.bra = t),
                          !(e = g.find_among(u, 6)))
                        )
                          return;
                        switch (((g.ket = g.cursor), e)) {
                          case 1:
                            g.slice_from("y");
                            break;
                          case 2:
                          case 5:
                            g.slice_from("u");
                            break;
                          case 3:
                            g.slice_from("a");
                            break;
                          case 4:
                            g.slice_from("o");
                            break;
                          case 6:
                            if (g.cursor >= g.limit) return;
                            g.cursor++;
                        }
                      }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.de.stemmer, "stemmer-de"),
        (e.de.stopWordFilter = e.generateStopWordFilter(
          "aber alle allem allen aller alles als also am an ander andere anderem anderen anderer anderes anderm andern anderr anders auch auf aus bei bin bis bist da damit dann das dasselbe dazu da?? dein deine deinem deinen deiner deines dem demselben den denn denselben der derer derselbe derselben des desselben dessen dich die dies diese dieselbe dieselben diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einig einige einigem einigen einiger einiges einmal er es etwas euch euer eure eurem euren eurer eures f??r gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich ihm ihn ihnen ihr ihre ihrem ihren ihrer ihres im in indem ins ist jede jedem jeden jeder jedes jene jenem jenen jener jenes jetzt kann kein keine keinem keinen keiner keines k??nnen k??nnte machen man manche manchem manchen mancher manches mein meine meinem meinen meiner meines mich mir mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seines selbst sich sie sind so solche solchem solchen solcher solches soll sollte sondern sonst um und uns unse unsem unsen unser unses unter viel vom von vor war waren warst was weg weil weiter welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte w??hrend w??rde w??rden zu zum zur zwar zwischen ??ber".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.de.stopWordFilter, "stopWordFilter-de");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.es = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.es.trimmer, e.es.stopWordFilter, e.es.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.es.stemmer));
      }),
        (e.es.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.es.trimmer = e.trimmerSupport.generateTrimmer(e.es.wordCharacters)),
        e.Pipeline.registerFunction(e.es.trimmer, "trimmer-es"),
        (e.es.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e() {
                if (C.out_grouping(x, 97, 252)) {
                  for (; !C.in_grouping(x, 97, 252); ) {
                    if (C.cursor >= C.limit) return !0;
                    C.cursor++;
                  }
                  return !1;
                }
                return !0;
              }
              function r() {
                var t,
                  n = C.cursor;
                if (
                  (function () {
                    if (C.in_grouping(x, 97, 252)) {
                      var t = C.cursor;
                      if (e()) {
                        if (((C.cursor = t), !C.in_grouping(x, 97, 252)))
                          return !0;
                        for (; !C.out_grouping(x, 97, 252); ) {
                          if (C.cursor >= C.limit) return !0;
                          C.cursor++;
                        }
                      }
                      return !1;
                    }
                    return !0;
                  })()
                ) {
                  if (((C.cursor = n), !C.out_grouping(x, 97, 252))) return;
                  if (((t = C.cursor), e())) {
                    if (
                      ((C.cursor = t),
                      !C.in_grouping(x, 97, 252) || C.cursor >= C.limit)
                    )
                      return;
                    C.cursor++;
                  }
                }
                f = C.cursor;
              }
              function i() {
                for (; !C.in_grouping(x, 97, 252); ) {
                  if (C.cursor >= C.limit) return !1;
                  C.cursor++;
                }
                for (; !C.out_grouping(x, 97, 252); ) {
                  if (C.cursor >= C.limit) return !1;
                  C.cursor++;
                }
                return !0;
              }
              function o() {
                return f <= C.cursor;
              }
              function s() {
                return l <= C.cursor;
              }
              function a(e, t) {
                if (!s()) return !0;
                C.slice_del(), (C.ket = C.cursor);
                var n = C.find_among_b(e, t);
                return (
                  n && ((C.bra = C.cursor), 1 == n && s() && C.slice_del()), !1
                );
              }
              function c(e) {
                return (
                  !s() ||
                  (C.slice_del(),
                  (C.ket = C.cursor),
                  C.eq_s_b(2, e) && ((C.bra = C.cursor), s() && C.slice_del()),
                  !1)
                );
              }
              function u() {
                var e;
                if (((C.ket = C.cursor), (e = C.find_among_b(b, 46)))) {
                  switch (((C.bra = C.cursor), e)) {
                    case 1:
                      if (!s()) return !1;
                      C.slice_del();
                      break;
                    case 2:
                      if (c("ic")) return !1;
                      break;
                    case 3:
                      if (!s()) return !1;
                      C.slice_from("log");
                      break;
                    case 4:
                      if (!s()) return !1;
                      C.slice_from("u");
                      break;
                    case 5:
                      if (!s()) return !1;
                      C.slice_from("ente");
                      break;
                    case 6:
                      if (!(d <= C.cursor)) return !1;
                      C.slice_del(),
                        (C.ket = C.cursor),
                        (e = C.find_among_b(w, 4)) &&
                          ((C.bra = C.cursor),
                          s() &&
                            (C.slice_del(),
                            1 == e &&
                              ((C.ket = C.cursor),
                              C.eq_s_b(2, "at") &&
                                ((C.bra = C.cursor), s() && C.slice_del()))));
                      break;
                    case 7:
                      if (a(g, 3)) return !1;
                      break;
                    case 8:
                      if (a(v, 3)) return !1;
                      break;
                    case 9:
                      if (c("at")) return !1;
                  }
                  return !0;
                }
                return !1;
              }
              var l,
                d,
                f,
                h = [
                  new t("", -1, 6),
                  new t("??", 0, 1),
                  new t("??", 0, 2),
                  new t("??", 0, 3),
                  new t("??", 0, 4),
                  new t("??", 0, 5),
                ],
                p = [
                  new t("la", -1, -1),
                  new t("sela", 0, -1),
                  new t("le", -1, -1),
                  new t("me", -1, -1),
                  new t("se", -1, -1),
                  new t("lo", -1, -1),
                  new t("selo", 5, -1),
                  new t("las", -1, -1),
                  new t("selas", 7, -1),
                  new t("les", -1, -1),
                  new t("los", -1, -1),
                  new t("selos", 10, -1),
                  new t("nos", -1, -1),
                ],
                m = [
                  new t("ando", -1, 6),
                  new t("iendo", -1, 6),
                  new t("yendo", -1, 7),
                  new t("??ndo", -1, 2),
                  new t("i??ndo", -1, 1),
                  new t("ar", -1, 6),
                  new t("er", -1, 6),
                  new t("ir", -1, 6),
                  new t("??r", -1, 3),
                  new t("??r", -1, 4),
                  new t("??r", -1, 5),
                ],
                w = [
                  new t("ic", -1, -1),
                  new t("ad", -1, -1),
                  new t("os", -1, -1),
                  new t("iv", -1, 1),
                ],
                g = [
                  new t("able", -1, 1),
                  new t("ible", -1, 1),
                  new t("ante", -1, 1),
                ],
                v = [
                  new t("ic", -1, 1),
                  new t("abil", -1, 1),
                  new t("iv", -1, 1),
                ],
                b = [
                  new t("ica", -1, 1),
                  new t("ancia", -1, 2),
                  new t("encia", -1, 5),
                  new t("adora", -1, 2),
                  new t("osa", -1, 1),
                  new t("ista", -1, 1),
                  new t("iva", -1, 9),
                  new t("anza", -1, 1),
                  new t("log??a", -1, 3),
                  new t("idad", -1, 8),
                  new t("able", -1, 1),
                  new t("ible", -1, 1),
                  new t("ante", -1, 2),
                  new t("mente", -1, 7),
                  new t("amente", 13, 6),
                  new t("aci??n", -1, 2),
                  new t("uci??n", -1, 4),
                  new t("ico", -1, 1),
                  new t("ismo", -1, 1),
                  new t("oso", -1, 1),
                  new t("amiento", -1, 1),
                  new t("imiento", -1, 1),
                  new t("ivo", -1, 9),
                  new t("ador", -1, 2),
                  new t("icas", -1, 1),
                  new t("ancias", -1, 2),
                  new t("encias", -1, 5),
                  new t("adoras", -1, 2),
                  new t("osas", -1, 1),
                  new t("istas", -1, 1),
                  new t("ivas", -1, 9),
                  new t("anzas", -1, 1),
                  new t("log??as", -1, 3),
                  new t("idades", -1, 8),
                  new t("ables", -1, 1),
                  new t("ibles", -1, 1),
                  new t("aciones", -1, 2),
                  new t("uciones", -1, 4),
                  new t("adores", -1, 2),
                  new t("antes", -1, 2),
                  new t("icos", -1, 1),
                  new t("ismos", -1, 1),
                  new t("osos", -1, 1),
                  new t("amientos", -1, 1),
                  new t("imientos", -1, 1),
                  new t("ivos", -1, 9),
                ],
                y = [
                  new t("ya", -1, 1),
                  new t("ye", -1, 1),
                  new t("yan", -1, 1),
                  new t("yen", -1, 1),
                  new t("yeron", -1, 1),
                  new t("yendo", -1, 1),
                  new t("yo", -1, 1),
                  new t("yas", -1, 1),
                  new t("yes", -1, 1),
                  new t("yais", -1, 1),
                  new t("yamos", -1, 1),
                  new t("y??", -1, 1),
                ],
                _ = [
                  new t("aba", -1, 2),
                  new t("ada", -1, 2),
                  new t("ida", -1, 2),
                  new t("ara", -1, 2),
                  new t("iera", -1, 2),
                  new t("??a", -1, 2),
                  new t("ar??a", 5, 2),
                  new t("er??a", 5, 2),
                  new t("ir??a", 5, 2),
                  new t("ad", -1, 2),
                  new t("ed", -1, 2),
                  new t("id", -1, 2),
                  new t("ase", -1, 2),
                  new t("iese", -1, 2),
                  new t("aste", -1, 2),
                  new t("iste", -1, 2),
                  new t("an", -1, 2),
                  new t("aban", 16, 2),
                  new t("aran", 16, 2),
                  new t("ieran", 16, 2),
                  new t("??an", 16, 2),
                  new t("ar??an", 20, 2),
                  new t("er??an", 20, 2),
                  new t("ir??an", 20, 2),
                  new t("en", -1, 1),
                  new t("asen", 24, 2),
                  new t("iesen", 24, 2),
                  new t("aron", -1, 2),
                  new t("ieron", -1, 2),
                  new t("ar??n", -1, 2),
                  new t("er??n", -1, 2),
                  new t("ir??n", -1, 2),
                  new t("ado", -1, 2),
                  new t("ido", -1, 2),
                  new t("ando", -1, 2),
                  new t("iendo", -1, 2),
                  new t("ar", -1, 2),
                  new t("er", -1, 2),
                  new t("ir", -1, 2),
                  new t("as", -1, 2),
                  new t("abas", 39, 2),
                  new t("adas", 39, 2),
                  new t("idas", 39, 2),
                  new t("aras", 39, 2),
                  new t("ieras", 39, 2),
                  new t("??as", 39, 2),
                  new t("ar??as", 45, 2),
                  new t("er??as", 45, 2),
                  new t("ir??as", 45, 2),
                  new t("es", -1, 1),
                  new t("ases", 49, 2),
                  new t("ieses", 49, 2),
                  new t("abais", -1, 2),
                  new t("arais", -1, 2),
                  new t("ierais", -1, 2),
                  new t("??ais", -1, 2),
                  new t("ar??ais", 55, 2),
                  new t("er??ais", 55, 2),
                  new t("ir??ais", 55, 2),
                  new t("aseis", -1, 2),
                  new t("ieseis", -1, 2),
                  new t("asteis", -1, 2),
                  new t("isteis", -1, 2),
                  new t("??is", -1, 2),
                  new t("??is", -1, 1),
                  new t("ar??is", 64, 2),
                  new t("er??is", 64, 2),
                  new t("ir??is", 64, 2),
                  new t("ados", -1, 2),
                  new t("idos", -1, 2),
                  new t("amos", -1, 2),
                  new t("??bamos", 70, 2),
                  new t("??ramos", 70, 2),
                  new t("i??ramos", 70, 2),
                  new t("??amos", 70, 2),
                  new t("ar??amos", 74, 2),
                  new t("er??amos", 74, 2),
                  new t("ir??amos", 74, 2),
                  new t("emos", -1, 1),
                  new t("aremos", 78, 2),
                  new t("eremos", 78, 2),
                  new t("iremos", 78, 2),
                  new t("??semos", 78, 2),
                  new t("i??semos", 78, 2),
                  new t("imos", -1, 2),
                  new t("ar??s", -1, 2),
                  new t("er??s", -1, 2),
                  new t("ir??s", -1, 2),
                  new t("??s", -1, 2),
                  new t("ar??", -1, 2),
                  new t("er??", -1, 2),
                  new t("ir??", -1, 2),
                  new t("ar??", -1, 2),
                  new t("er??", -1, 2),
                  new t("ir??", -1, 2),
                  new t("i??", -1, 2),
                ],
                k = [
                  new t("a", -1, 1),
                  new t("e", -1, 2),
                  new t("o", -1, 1),
                  new t("os", -1, 1),
                  new t("??", -1, 1),
                  new t("??", -1, 2),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                ],
                x = [
                  17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4,
                  10,
                ],
                C = new n();
              (this.setCurrent = function (e) {
                C.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return C.getCurrent();
                }),
                (this.stem = function () {
                  var e = C.cursor;
                  return (
                    (function () {
                      var e = C.cursor;
                      (f = C.limit),
                        (d = f),
                        (l = f),
                        r(),
                        (C.cursor = e),
                        i() && ((d = C.cursor), i() && (l = C.cursor));
                    })(),
                    (C.limit_backward = e),
                    (C.cursor = C.limit),
                    (function () {
                      var e;
                      if (
                        ((C.ket = C.cursor),
                        C.find_among_b(p, 13) &&
                          ((C.bra = C.cursor),
                          (e = C.find_among_b(m, 11)) && o()))
                      )
                        switch (e) {
                          case 1:
                            (C.bra = C.cursor), C.slice_from("iendo");
                            break;
                          case 2:
                            (C.bra = C.cursor), C.slice_from("ando");
                            break;
                          case 3:
                            (C.bra = C.cursor), C.slice_from("ar");
                            break;
                          case 4:
                            (C.bra = C.cursor), C.slice_from("er");
                            break;
                          case 5:
                            (C.bra = C.cursor), C.slice_from("ir");
                            break;
                          case 6:
                            C.slice_del();
                            break;
                          case 7:
                            C.eq_s_b(1, "u") && C.slice_del();
                        }
                    })(),
                    (C.cursor = C.limit),
                    u() ||
                      ((C.cursor = C.limit),
                      (function () {
                        var e, t;
                        if (
                          C.cursor >= f &&
                          ((t = C.limit_backward),
                          (C.limit_backward = f),
                          (C.ket = C.cursor),
                          (e = C.find_among_b(y, 12)),
                          (C.limit_backward = t),
                          e)
                        ) {
                          if (((C.bra = C.cursor), 1 == e)) {
                            if (!C.eq_s_b(1, "u")) return !1;
                            C.slice_del();
                          }
                          return !0;
                        }
                        return !1;
                      })() ||
                        ((C.cursor = C.limit),
                        (function () {
                          var e, t, n, r;
                          if (
                            C.cursor >= f &&
                            ((t = C.limit_backward),
                            (C.limit_backward = f),
                            (C.ket = C.cursor),
                            (e = C.find_among_b(_, 96)),
                            (C.limit_backward = t),
                            e)
                          )
                            switch (((C.bra = C.cursor), e)) {
                              case 1:
                                (n = C.limit - C.cursor),
                                  C.eq_s_b(1, "u")
                                    ? ((r = C.limit - C.cursor),
                                      C.eq_s_b(1, "g")
                                        ? (C.cursor = C.limit - r)
                                        : (C.cursor = C.limit - n))
                                    : (C.cursor = C.limit - n),
                                  (C.bra = C.cursor);
                              case 2:
                                C.slice_del();
                            }
                        })())),
                    (C.cursor = C.limit),
                    (function () {
                      var e, t;
                      if (((C.ket = C.cursor), (e = C.find_among_b(k, 8))))
                        switch (((C.bra = C.cursor), e)) {
                          case 1:
                            o() && C.slice_del();
                            break;
                          case 2:
                            o() &&
                              (C.slice_del(),
                              (C.ket = C.cursor),
                              C.eq_s_b(1, "u") &&
                                ((C.bra = C.cursor),
                                (t = C.limit - C.cursor),
                                C.eq_s_b(1, "g") &&
                                  ((C.cursor = C.limit - t),
                                  o() && C.slice_del())));
                        }
                    })(),
                    (C.cursor = C.limit_backward),
                    (function () {
                      for (var e; ; ) {
                        if (((C.bra = C.cursor), (e = C.find_among(h, 6))))
                          switch (((C.ket = C.cursor), e)) {
                            case 1:
                              C.slice_from("a");
                              continue;
                            case 2:
                              C.slice_from("e");
                              continue;
                            case 3:
                              C.slice_from("i");
                              continue;
                            case 4:
                              C.slice_from("o");
                              continue;
                            case 5:
                              C.slice_from("u");
                              continue;
                            case 6:
                              if (C.cursor >= C.limit) break;
                              C.cursor++;
                              continue;
                          }
                        break;
                      }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.es.stemmer, "stemmer-es"),
        (e.es.stopWordFilter = e.generateStopWordFilter(
          "a al algo algunas algunos ante antes como con contra cual cuando de del desde donde durante e el ella ellas ellos en entre era erais eran eras eres es esa esas ese eso esos esta estaba estabais estaban estabas estad estada estadas estado estados estamos estando estar estaremos estar?? estar??n estar??s estar?? estar??is estar??a estar??ais estar??amos estar??an estar??as estas este estemos esto estos estoy estuve estuviera estuvierais estuvieran estuvieras estuvieron estuviese estuvieseis estuviesen estuvieses estuvimos estuviste estuvisteis estuvi??ramos estuvi??semos estuvo est?? est??bamos est??is est??n est??s est?? est??is est??n est??s fue fuera fuerais fueran fueras fueron fuese fueseis fuesen fueses fui fuimos fuiste fuisteis fu??ramos fu??semos ha habida habidas habido habidos habiendo habremos habr?? habr??n habr??s habr?? habr??is habr??a habr??ais habr??amos habr??an habr??as hab??is hab??a hab??ais hab??amos hab??an hab??as han has hasta hay haya hayamos hayan hayas hay??is he hemos hube hubiera hubierais hubieran hubieras hubieron hubiese hubieseis hubiesen hubieses hubimos hubiste hubisteis hubi??ramos hubi??semos hubo la las le les lo los me mi mis mucho muchos muy m??s m?? m??a m??as m??o m??os nada ni no nos nosotras nosotros nuestra nuestras nuestro nuestros o os otra otras otro otros para pero poco por porque que quien quienes qu?? se sea seamos sean seas seremos ser?? ser??n ser??s ser?? ser??is ser??a ser??ais ser??amos ser??an ser??as se??is sido siendo sin sobre sois somos son soy su sus suya suyas suyo suyos s?? tambi??n tanto te tendremos tendr?? tendr??n tendr??s tendr?? tendr??is tendr??a tendr??ais tendr??amos tendr??an tendr??as tened tenemos tenga tengamos tengan tengas tengo teng??is tenida tenidas tenido tenidos teniendo ten??is ten??a ten??ais ten??amos ten??an ten??as ti tiene tienen tienes todo todos tu tus tuve tuviera tuvierais tuvieran tuvieras tuvieron tuviese tuvieseis tuviesen tuvieses tuvimos tuviste tuvisteis tuvi??ramos tuvi??semos tuvo tuya tuyas tuyo tuyos t?? un una uno unos vosotras vosotros vuestra vuestras vuestro vuestros y ya yo ??l ??ramos".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.es.stopWordFilter, "stopWordFilter-es");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.pt = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.pt.trimmer, e.pt.stopWordFilter, e.pt.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.pt.stemmer));
      }),
        (e.pt.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.pt.trimmer = e.trimmerSupport.generateTrimmer(e.pt.wordCharacters)),
        e.Pipeline.registerFunction(e.pt.trimmer, "trimmer-pt"),
        (e.pt.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e() {
                if (x.out_grouping(k, 97, 250)) {
                  for (; !x.in_grouping(k, 97, 250); ) {
                    if (x.cursor >= x.limit) return !0;
                    x.cursor++;
                  }
                  return !1;
                }
                return !0;
              }
              function r() {
                var t,
                  n,
                  r = x.cursor;
                if (x.in_grouping(k, 97, 250))
                  if (((t = x.cursor), e())) {
                    if (
                      ((x.cursor = t),
                      (function () {
                        if (x.in_grouping(k, 97, 250))
                          for (; !x.out_grouping(k, 97, 250); ) {
                            if (x.cursor >= x.limit) return !1;
                            x.cursor++;
                          }
                        return (f = x.cursor), !0;
                      })())
                    )
                      return;
                  } else f = x.cursor;
                if (((x.cursor = r), x.out_grouping(k, 97, 250))) {
                  if (((n = x.cursor), e())) {
                    if (
                      ((x.cursor = n),
                      !x.in_grouping(k, 97, 250) || x.cursor >= x.limit)
                    )
                      return;
                    x.cursor++;
                  }
                  f = x.cursor;
                }
              }
              function i() {
                for (; !x.in_grouping(k, 97, 250); ) {
                  if (x.cursor >= x.limit) return !1;
                  x.cursor++;
                }
                for (; !x.out_grouping(k, 97, 250); ) {
                  if (x.cursor >= x.limit) return !1;
                  x.cursor++;
                }
                return !0;
              }
              function o() {
                return f <= x.cursor;
              }
              function s() {
                return l <= x.cursor;
              }
              function a() {
                var e;
                if (((x.ket = x.cursor), !(e = x.find_among_b(v, 45))))
                  return !1;
                switch (((x.bra = x.cursor), e)) {
                  case 1:
                    if (!s()) return !1;
                    x.slice_del();
                    break;
                  case 2:
                    if (!s()) return !1;
                    x.slice_from("log");
                    break;
                  case 3:
                    if (!s()) return !1;
                    x.slice_from("u");
                    break;
                  case 4:
                    if (!s()) return !1;
                    x.slice_from("ente");
                    break;
                  case 5:
                    if (!(d <= x.cursor)) return !1;
                    x.slice_del(),
                      (x.ket = x.cursor),
                      (e = x.find_among_b(m, 4)) &&
                        ((x.bra = x.cursor),
                        s() &&
                          (x.slice_del(),
                          1 == e &&
                            ((x.ket = x.cursor),
                            x.eq_s_b(2, "at") &&
                              ((x.bra = x.cursor), s() && x.slice_del()))));
                    break;
                  case 6:
                    if (!s()) return !1;
                    x.slice_del(),
                      (x.ket = x.cursor),
                      (e = x.find_among_b(w, 3)) &&
                        ((x.bra = x.cursor), 1 == e && s() && x.slice_del());
                    break;
                  case 7:
                    if (!s()) return !1;
                    x.slice_del(),
                      (x.ket = x.cursor),
                      (e = x.find_among_b(g, 3)) &&
                        ((x.bra = x.cursor), 1 == e && s() && x.slice_del());
                    break;
                  case 8:
                    if (!s()) return !1;
                    x.slice_del(),
                      (x.ket = x.cursor),
                      x.eq_s_b(2, "at") &&
                        ((x.bra = x.cursor), s() && x.slice_del());
                    break;
                  case 9:
                    if (!o() || !x.eq_s_b(1, "e")) return !1;
                    x.slice_from("ir");
                }
                return !0;
              }
              function c(e, t) {
                if (x.eq_s_b(1, e)) {
                  x.bra = x.cursor;
                  var n = x.limit - x.cursor;
                  if (x.eq_s_b(1, t))
                    return (x.cursor = x.limit - n), o() && x.slice_del(), !1;
                }
                return !0;
              }
              function u() {
                if (
                  !a() &&
                  ((x.cursor = x.limit),
                  !(function () {
                    var e, t;
                    if (x.cursor >= f) {
                      if (
                        ((t = x.limit_backward),
                        (x.limit_backward = f),
                        (x.ket = x.cursor),
                        (e = x.find_among_b(b, 120)))
                      )
                        return (
                          (x.bra = x.cursor),
                          1 == e && x.slice_del(),
                          (x.limit_backward = t),
                          !0
                        );
                      x.limit_backward = t;
                    }
                    return !1;
                  })())
                )
                  return (
                    (x.cursor = x.limit),
                    void (function () {
                      var e;
                      (x.ket = x.cursor),
                        (e = x.find_among_b(y, 7)) &&
                          ((x.bra = x.cursor), 1 == e && o() && x.slice_del());
                    })()
                  );
                (x.cursor = x.limit),
                  (x.ket = x.cursor),
                  x.eq_s_b(1, "i") &&
                    ((x.bra = x.cursor),
                    x.eq_s_b(1, "c") &&
                      ((x.cursor = x.limit), o() && x.slice_del()));
              }
              var l,
                d,
                f,
                h = [new t("", -1, 3), new t("??", 0, 1), new t("??", 0, 2)],
                p = [new t("", -1, 3), new t("a~", 0, 1), new t("o~", 0, 2)],
                m = [
                  new t("ic", -1, -1),
                  new t("ad", -1, -1),
                  new t("os", -1, -1),
                  new t("iv", -1, 1),
                ],
                w = [
                  new t("ante", -1, 1),
                  new t("avel", -1, 1),
                  new t("??vel", -1, 1),
                ],
                g = [
                  new t("ic", -1, 1),
                  new t("abil", -1, 1),
                  new t("iv", -1, 1),
                ],
                v = [
                  new t("ica", -1, 1),
                  new t("??ncia", -1, 1),
                  new t("??ncia", -1, 4),
                  new t("ira", -1, 9),
                  new t("adora", -1, 1),
                  new t("osa", -1, 1),
                  new t("ista", -1, 1),
                  new t("iva", -1, 8),
                  new t("eza", -1, 1),
                  new t("log??a", -1, 2),
                  new t("idade", -1, 7),
                  new t("ante", -1, 1),
                  new t("mente", -1, 6),
                  new t("amente", 12, 5),
                  new t("??vel", -1, 1),
                  new t("??vel", -1, 1),
                  new t("uci??n", -1, 3),
                  new t("ico", -1, 1),
                  new t("ismo", -1, 1),
                  new t("oso", -1, 1),
                  new t("amento", -1, 1),
                  new t("imento", -1, 1),
                  new t("ivo", -1, 8),
                  new t("a??a~o", -1, 1),
                  new t("ador", -1, 1),
                  new t("icas", -1, 1),
                  new t("??ncias", -1, 4),
                  new t("iras", -1, 9),
                  new t("adoras", -1, 1),
                  new t("osas", -1, 1),
                  new t("istas", -1, 1),
                  new t("ivas", -1, 8),
                  new t("ezas", -1, 1),
                  new t("log??as", -1, 2),
                  new t("idades", -1, 7),
                  new t("uciones", -1, 3),
                  new t("adores", -1, 1),
                  new t("antes", -1, 1),
                  new t("a??o~es", -1, 1),
                  new t("icos", -1, 1),
                  new t("ismos", -1, 1),
                  new t("osos", -1, 1),
                  new t("amentos", -1, 1),
                  new t("imentos", -1, 1),
                  new t("ivos", -1, 8),
                ],
                b = [
                  new t("ada", -1, 1),
                  new t("ida", -1, 1),
                  new t("ia", -1, 1),
                  new t("aria", 2, 1),
                  new t("eria", 2, 1),
                  new t("iria", 2, 1),
                  new t("ara", -1, 1),
                  new t("era", -1, 1),
                  new t("ira", -1, 1),
                  new t("ava", -1, 1),
                  new t("asse", -1, 1),
                  new t("esse", -1, 1),
                  new t("isse", -1, 1),
                  new t("aste", -1, 1),
                  new t("este", -1, 1),
                  new t("iste", -1, 1),
                  new t("ei", -1, 1),
                  new t("arei", 16, 1),
                  new t("erei", 16, 1),
                  new t("irei", 16, 1),
                  new t("am", -1, 1),
                  new t("iam", 20, 1),
                  new t("ariam", 21, 1),
                  new t("eriam", 21, 1),
                  new t("iriam", 21, 1),
                  new t("aram", 20, 1),
                  new t("eram", 20, 1),
                  new t("iram", 20, 1),
                  new t("avam", 20, 1),
                  new t("em", -1, 1),
                  new t("arem", 29, 1),
                  new t("erem", 29, 1),
                  new t("irem", 29, 1),
                  new t("assem", 29, 1),
                  new t("essem", 29, 1),
                  new t("issem", 29, 1),
                  new t("ado", -1, 1),
                  new t("ido", -1, 1),
                  new t("ando", -1, 1),
                  new t("endo", -1, 1),
                  new t("indo", -1, 1),
                  new t("ara~o", -1, 1),
                  new t("era~o", -1, 1),
                  new t("ira~o", -1, 1),
                  new t("ar", -1, 1),
                  new t("er", -1, 1),
                  new t("ir", -1, 1),
                  new t("as", -1, 1),
                  new t("adas", 47, 1),
                  new t("idas", 47, 1),
                  new t("ias", 47, 1),
                  new t("arias", 50, 1),
                  new t("erias", 50, 1),
                  new t("irias", 50, 1),
                  new t("aras", 47, 1),
                  new t("eras", 47, 1),
                  new t("iras", 47, 1),
                  new t("avas", 47, 1),
                  new t("es", -1, 1),
                  new t("ardes", 58, 1),
                  new t("erdes", 58, 1),
                  new t("irdes", 58, 1),
                  new t("ares", 58, 1),
                  new t("eres", 58, 1),
                  new t("ires", 58, 1),
                  new t("asses", 58, 1),
                  new t("esses", 58, 1),
                  new t("isses", 58, 1),
                  new t("astes", 58, 1),
                  new t("estes", 58, 1),
                  new t("istes", 58, 1),
                  new t("is", -1, 1),
                  new t("ais", 71, 1),
                  new t("eis", 71, 1),
                  new t("areis", 73, 1),
                  new t("ereis", 73, 1),
                  new t("ireis", 73, 1),
                  new t("??reis", 73, 1),
                  new t("??reis", 73, 1),
                  new t("??reis", 73, 1),
                  new t("??sseis", 73, 1),
                  new t("??sseis", 73, 1),
                  new t("??sseis", 73, 1),
                  new t("??veis", 73, 1),
                  new t("??eis", 73, 1),
                  new t("ar??eis", 84, 1),
                  new t("er??eis", 84, 1),
                  new t("ir??eis", 84, 1),
                  new t("ados", -1, 1),
                  new t("idos", -1, 1),
                  new t("amos", -1, 1),
                  new t("??ramos", 90, 1),
                  new t("??ramos", 90, 1),
                  new t("??ramos", 90, 1),
                  new t("??vamos", 90, 1),
                  new t("??amos", 90, 1),
                  new t("ar??amos", 95, 1),
                  new t("er??amos", 95, 1),
                  new t("ir??amos", 95, 1),
                  new t("emos", -1, 1),
                  new t("aremos", 99, 1),
                  new t("eremos", 99, 1),
                  new t("iremos", 99, 1),
                  new t("??ssemos", 99, 1),
                  new t("??ssemos", 99, 1),
                  new t("??ssemos", 99, 1),
                  new t("imos", -1, 1),
                  new t("armos", -1, 1),
                  new t("ermos", -1, 1),
                  new t("irmos", -1, 1),
                  new t("??mos", -1, 1),
                  new t("ar??s", -1, 1),
                  new t("er??s", -1, 1),
                  new t("ir??s", -1, 1),
                  new t("eu", -1, 1),
                  new t("iu", -1, 1),
                  new t("ou", -1, 1),
                  new t("ar??", -1, 1),
                  new t("er??", -1, 1),
                  new t("ir??", -1, 1),
                ],
                y = [
                  new t("a", -1, 1),
                  new t("i", -1, 1),
                  new t("o", -1, 1),
                  new t("os", -1, 1),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                ],
                _ = [
                  new t("e", -1, 1),
                  new t("??", -1, 2),
                  new t("??", -1, 1),
                  new t("??", -1, 1),
                ],
                k = [
                  17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12,
                  2,
                ],
                x = new n();
              (this.setCurrent = function (e) {
                x.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return x.getCurrent();
                }),
                (this.stem = function () {
                  var e = x.cursor;
                  return (
                    (function () {
                      for (var e; ; ) {
                        if (((x.bra = x.cursor), (e = x.find_among(h, 3))))
                          switch (((x.ket = x.cursor), e)) {
                            case 1:
                              x.slice_from("a~");
                              continue;
                            case 2:
                              x.slice_from("o~");
                              continue;
                            case 3:
                              if (x.cursor >= x.limit) break;
                              x.cursor++;
                              continue;
                          }
                        break;
                      }
                    })(),
                    (x.cursor = e),
                    (function () {
                      var e = x.cursor;
                      (f = x.limit),
                        (d = f),
                        (l = f),
                        r(),
                        (x.cursor = e),
                        i() && ((d = x.cursor), i() && (l = x.cursor));
                    })(),
                    (x.limit_backward = e),
                    (x.cursor = x.limit),
                    u(),
                    (x.cursor = x.limit),
                    (function () {
                      var e;
                      if (((x.ket = x.cursor), (e = x.find_among_b(_, 4))))
                        switch (((x.bra = x.cursor), e)) {
                          case 1:
                            o() &&
                              (x.slice_del(),
                              (x.ket = x.cursor),
                              x.limit,
                              x.cursor,
                              c("u", "g") && c("i", "c"));
                            break;
                          case 2:
                            x.slice_from("c");
                        }
                    })(),
                    (x.cursor = x.limit_backward),
                    (function () {
                      for (var e; ; ) {
                        if (((x.bra = x.cursor), (e = x.find_among(p, 3))))
                          switch (((x.ket = x.cursor), e)) {
                            case 1:
                              x.slice_from("??");
                              continue;
                            case 2:
                              x.slice_from("??");
                              continue;
                            case 3:
                              if (x.cursor >= x.limit) break;
                              x.cursor++;
                              continue;
                          }
                        break;
                      }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.pt.stemmer, "stemmer-pt"),
        (e.pt.stopWordFilter = e.generateStopWordFilter(
          "a ao aos aquela aquelas aquele aqueles aquilo as at?? com como da das de dela delas dele deles depois do dos e ela elas ele eles em entre era eram essa essas esse esses esta estamos estas estava estavam este esteja estejam estejamos estes esteve estive estivemos estiver estivera estiveram estiverem estivermos estivesse estivessem estiv??ramos estiv??ssemos estou est?? est??vamos est??o eu foi fomos for fora foram forem formos fosse fossem fui f??ramos f??ssemos haja hajam hajamos havemos hei houve houvemos houver houvera houveram houverei houverem houveremos houveria houveriam houvermos houver?? houver??o houver??amos houvesse houvessem houv??ramos houv??ssemos h?? h??o isso isto j?? lhe lhes mais mas me mesmo meu meus minha minhas muito na nas nem no nos nossa nossas nosso nossos num numa n??o n??s o os ou para pela pelas pelo pelos por qual quando que quem se seja sejam sejamos sem serei seremos seria seriam ser?? ser??o ser??amos seu seus somos sou sua suas s??o s?? tamb??m te tem temos tenha tenham tenhamos tenho terei teremos teria teriam ter?? ter??o ter??amos teu teus teve tinha tinham tive tivemos tiver tivera tiveram tiverem tivermos tivesse tivessem tiv??ramos tiv??ssemos tu tua tuas t??m t??nhamos um uma voc?? voc??s vos ?? ??s ??ramos".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.pt.stopWordFilter, "stopWordFilter-pt");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.it = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.it.trimmer, e.it.stopWordFilter, e.it.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.it.stemmer));
      }),
        (e.it.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.it.trimmer = e.trimmerSupport.generateTrimmer(e.it.wordCharacters)),
        e.Pipeline.registerFunction(e.it.trimmer, "trimmer-it"),
        (e.it.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e(e, t, n) {
                return (
                  !(
                    !C.eq_s(1, e) ||
                    ((C.ket = C.cursor), !C.in_grouping(_, 97, 249))
                  ) && (C.slice_from(t), (C.cursor = n), !0)
                );
              }
              function r(e) {
                if (((C.cursor = e), !C.in_grouping(_, 97, 249))) return !1;
                for (; !C.out_grouping(_, 97, 249); ) {
                  if (C.cursor >= C.limit) return !1;
                  C.cursor++;
                }
                return !0;
              }
              function i() {
                var e,
                  t = C.cursor;
                if (
                  !(function () {
                    if (C.in_grouping(_, 97, 249)) {
                      var e = C.cursor;
                      if (C.out_grouping(_, 97, 249)) {
                        for (; !C.in_grouping(_, 97, 249); ) {
                          if (C.cursor >= C.limit) return r(e);
                          C.cursor++;
                        }
                        return !0;
                      }
                      return r(e);
                    }
                    return !1;
                  })()
                ) {
                  if (((C.cursor = t), !C.out_grouping(_, 97, 249))) return;
                  if (((e = C.cursor), C.out_grouping(_, 97, 249))) {
                    for (; !C.in_grouping(_, 97, 249); ) {
                      if (C.cursor >= C.limit)
                        return (
                          (C.cursor = e),
                          void (
                            C.in_grouping(_, 97, 249) &&
                            C.cursor < C.limit &&
                            C.cursor++
                          )
                        );
                      C.cursor++;
                    }
                    return void (f = C.cursor);
                  }
                  if (
                    ((C.cursor = e),
                    !C.in_grouping(_, 97, 249) || C.cursor >= C.limit)
                  )
                    return;
                  C.cursor++;
                }
                f = C.cursor;
              }
              function o() {
                for (; !C.in_grouping(_, 97, 249); ) {
                  if (C.cursor >= C.limit) return !1;
                  C.cursor++;
                }
                for (; !C.out_grouping(_, 97, 249); ) {
                  if (C.cursor >= C.limit) return !1;
                  C.cursor++;
                }
                return !0;
              }
              function s() {
                return f <= C.cursor;
              }
              function a() {
                return l <= C.cursor;
              }
              function c() {
                var e;
                if (((C.ket = C.cursor), !(e = C.find_among_b(b, 51))))
                  return !1;
                switch (((C.bra = C.cursor), e)) {
                  case 1:
                    if (!a()) return !1;
                    C.slice_del();
                    break;
                  case 2:
                    if (!a()) return !1;
                    C.slice_del(),
                      (C.ket = C.cursor),
                      C.eq_s_b(2, "ic") &&
                        ((C.bra = C.cursor), a() && C.slice_del());
                    break;
                  case 3:
                    if (!a()) return !1;
                    C.slice_from("log");
                    break;
                  case 4:
                    if (!a()) return !1;
                    C.slice_from("u");
                    break;
                  case 5:
                    if (!a()) return !1;
                    C.slice_from("ente");
                    break;
                  case 6:
                    if (!s()) return !1;
                    C.slice_del();
                    break;
                  case 7:
                    if (!(d <= C.cursor)) return !1;
                    C.slice_del(),
                      (C.ket = C.cursor),
                      (e = C.find_among_b(g, 4)) &&
                        ((C.bra = C.cursor),
                        a() &&
                          (C.slice_del(),
                          1 == e &&
                            ((C.ket = C.cursor),
                            C.eq_s_b(2, "at") &&
                              ((C.bra = C.cursor), a() && C.slice_del()))));
                    break;
                  case 8:
                    if (!a()) return !1;
                    C.slice_del(),
                      (C.ket = C.cursor),
                      (e = C.find_among_b(v, 3)) &&
                        ((C.bra = C.cursor), 1 == e && a() && C.slice_del());
                    break;
                  case 9:
                    if (!a()) return !1;
                    C.slice_del(),
                      (C.ket = C.cursor),
                      C.eq_s_b(2, "at") &&
                        ((C.bra = C.cursor),
                        a() &&
                          (C.slice_del(),
                          (C.ket = C.cursor),
                          C.eq_s_b(2, "ic") &&
                            ((C.bra = C.cursor), a() && C.slice_del())));
                }
                return !0;
              }
              function u() {
                !(function () {
                  var e = C.limit - C.cursor;
                  (C.ket = C.cursor),
                    C.in_grouping_b(k, 97, 242) &&
                    ((C.bra = C.cursor),
                    s() &&
                      (C.slice_del(),
                      (C.ket = C.cursor),
                      C.eq_s_b(1, "i") && ((C.bra = C.cursor), s())))
                      ? C.slice_del()
                      : (C.cursor = C.limit - e);
                })(),
                  (C.ket = C.cursor),
                  C.eq_s_b(1, "h") &&
                    ((C.bra = C.cursor),
                    C.in_grouping_b(x, 99, 103) && s() && C.slice_del());
              }
              var l,
                d,
                f,
                h = [
                  new t("", -1, 7),
                  new t("qu", 0, 6),
                  new t("??", 0, 1),
                  new t("??", 0, 2),
                  new t("??", 0, 3),
                  new t("??", 0, 4),
                  new t("??", 0, 5),
                ],
                p = [new t("", -1, 3), new t("I", 0, 1), new t("U", 0, 2)],
                m = [
                  new t("la", -1, -1),
                  new t("cela", 0, -1),
                  new t("gliela", 0, -1),
                  new t("mela", 0, -1),
                  new t("tela", 0, -1),
                  new t("vela", 0, -1),
                  new t("le", -1, -1),
                  new t("cele", 6, -1),
                  new t("gliele", 6, -1),
                  new t("mele", 6, -1),
                  new t("tele", 6, -1),
                  new t("vele", 6, -1),
                  new t("ne", -1, -1),
                  new t("cene", 12, -1),
                  new t("gliene", 12, -1),
                  new t("mene", 12, -1),
                  new t("sene", 12, -1),
                  new t("tene", 12, -1),
                  new t("vene", 12, -1),
                  new t("ci", -1, -1),
                  new t("li", -1, -1),
                  new t("celi", 20, -1),
                  new t("glieli", 20, -1),
                  new t("meli", 20, -1),
                  new t("teli", 20, -1),
                  new t("veli", 20, -1),
                  new t("gli", 20, -1),
                  new t("mi", -1, -1),
                  new t("si", -1, -1),
                  new t("ti", -1, -1),
                  new t("vi", -1, -1),
                  new t("lo", -1, -1),
                  new t("celo", 31, -1),
                  new t("glielo", 31, -1),
                  new t("melo", 31, -1),
                  new t("telo", 31, -1),
                  new t("velo", 31, -1),
                ],
                w = [
                  new t("ando", -1, 1),
                  new t("endo", -1, 1),
                  new t("ar", -1, 2),
                  new t("er", -1, 2),
                  new t("ir", -1, 2),
                ],
                g = [
                  new t("ic", -1, -1),
                  new t("abil", -1, -1),
                  new t("os", -1, -1),
                  new t("iv", -1, 1),
                ],
                v = [
                  new t("ic", -1, 1),
                  new t("abil", -1, 1),
                  new t("iv", -1, 1),
                ],
                b = [
                  new t("ica", -1, 1),
                  new t("logia", -1, 3),
                  new t("osa", -1, 1),
                  new t("ista", -1, 1),
                  new t("iva", -1, 9),
                  new t("anza", -1, 1),
                  new t("enza", -1, 5),
                  new t("ice", -1, 1),
                  new t("atrice", 7, 1),
                  new t("iche", -1, 1),
                  new t("logie", -1, 3),
                  new t("abile", -1, 1),
                  new t("ibile", -1, 1),
                  new t("usione", -1, 4),
                  new t("azione", -1, 2),
                  new t("uzione", -1, 4),
                  new t("atore", -1, 2),
                  new t("ose", -1, 1),
                  new t("ante", -1, 1),
                  new t("mente", -1, 1),
                  new t("amente", 19, 7),
                  new t("iste", -1, 1),
                  new t("ive", -1, 9),
                  new t("anze", -1, 1),
                  new t("enze", -1, 5),
                  new t("ici", -1, 1),
                  new t("atrici", 25, 1),
                  new t("ichi", -1, 1),
                  new t("abili", -1, 1),
                  new t("ibili", -1, 1),
                  new t("ismi", -1, 1),
                  new t("usioni", -1, 4),
                  new t("azioni", -1, 2),
                  new t("uzioni", -1, 4),
                  new t("atori", -1, 2),
                  new t("osi", -1, 1),
                  new t("anti", -1, 1),
                  new t("amenti", -1, 6),
                  new t("imenti", -1, 6),
                  new t("isti", -1, 1),
                  new t("ivi", -1, 9),
                  new t("ico", -1, 1),
                  new t("ismo", -1, 1),
                  new t("oso", -1, 1),
                  new t("amento", -1, 6),
                  new t("imento", -1, 6),
                  new t("ivo", -1, 9),
                  new t("it??", -1, 8),
                  new t("ist??", -1, 1),
                  new t("ist??", -1, 1),
                  new t("ist??", -1, 1),
                ],
                y = [
                  new t("isca", -1, 1),
                  new t("enda", -1, 1),
                  new t("ata", -1, 1),
                  new t("ita", -1, 1),
                  new t("uta", -1, 1),
                  new t("ava", -1, 1),
                  new t("eva", -1, 1),
                  new t("iva", -1, 1),
                  new t("erebbe", -1, 1),
                  new t("irebbe", -1, 1),
                  new t("isce", -1, 1),
                  new t("ende", -1, 1),
                  new t("are", -1, 1),
                  new t("ere", -1, 1),
                  new t("ire", -1, 1),
                  new t("asse", -1, 1),
                  new t("ate", -1, 1),
                  new t("avate", 16, 1),
                  new t("evate", 16, 1),
                  new t("ivate", 16, 1),
                  new t("ete", -1, 1),
                  new t("erete", 20, 1),
                  new t("irete", 20, 1),
                  new t("ite", -1, 1),
                  new t("ereste", -1, 1),
                  new t("ireste", -1, 1),
                  new t("ute", -1, 1),
                  new t("erai", -1, 1),
                  new t("irai", -1, 1),
                  new t("isci", -1, 1),
                  new t("endi", -1, 1),
                  new t("erei", -1, 1),
                  new t("irei", -1, 1),
                  new t("assi", -1, 1),
                  new t("ati", -1, 1),
                  new t("iti", -1, 1),
                  new t("eresti", -1, 1),
                  new t("iresti", -1, 1),
                  new t("uti", -1, 1),
                  new t("avi", -1, 1),
                  new t("evi", -1, 1),
                  new t("ivi", -1, 1),
                  new t("isco", -1, 1),
                  new t("ando", -1, 1),
                  new t("endo", -1, 1),
                  new t("Yamo", -1, 1),
                  new t("iamo", -1, 1),
                  new t("avamo", -1, 1),
                  new t("evamo", -1, 1),
                  new t("ivamo", -1, 1),
                  new t("eremo", -1, 1),
                  new t("iremo", -1, 1),
                  new t("assimo", -1, 1),
                  new t("ammo", -1, 1),
                  new t("emmo", -1, 1),
                  new t("eremmo", 54, 1),
                  new t("iremmo", 54, 1),
                  new t("immo", -1, 1),
                  new t("ano", -1, 1),
                  new t("iscano", 58, 1),
                  new t("avano", 58, 1),
                  new t("evano", 58, 1),
                  new t("ivano", 58, 1),
                  new t("eranno", -1, 1),
                  new t("iranno", -1, 1),
                  new t("ono", -1, 1),
                  new t("iscono", 65, 1),
                  new t("arono", 65, 1),
                  new t("erono", 65, 1),
                  new t("irono", 65, 1),
                  new t("erebbero", -1, 1),
                  new t("irebbero", -1, 1),
                  new t("assero", -1, 1),
                  new t("essero", -1, 1),
                  new t("issero", -1, 1),
                  new t("ato", -1, 1),
                  new t("ito", -1, 1),
                  new t("uto", -1, 1),
                  new t("avo", -1, 1),
                  new t("evo", -1, 1),
                  new t("ivo", -1, 1),
                  new t("ar", -1, 1),
                  new t("ir", -1, 1),
                  new t("er??", -1, 1),
                  new t("ir??", -1, 1),
                  new t("er??", -1, 1),
                  new t("ir??", -1, 1),
                ],
                _ = [
                  17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8,
                  2, 1,
                ],
                k = [
                  17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2,
                ],
                x = [17],
                C = new n();
              (this.setCurrent = function (e) {
                C.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return C.getCurrent();
                }),
                (this.stem = function () {
                  var t = C.cursor;
                  return (
                    (function () {
                      for (var t, n, r, i, o = C.cursor; ; ) {
                        if (((C.bra = C.cursor), (t = C.find_among(h, 7))))
                          switch (((C.ket = C.cursor), t)) {
                            case 1:
                              C.slice_from("??");
                              continue;
                            case 2:
                              C.slice_from("??");
                              continue;
                            case 3:
                              C.slice_from("??");
                              continue;
                            case 4:
                              C.slice_from("??");
                              continue;
                            case 5:
                              C.slice_from("??");
                              continue;
                            case 6:
                              C.slice_from("qU");
                              continue;
                            case 7:
                              if (C.cursor >= C.limit) break;
                              C.cursor++;
                              continue;
                          }
                        break;
                      }
                      for (C.cursor = o; ; )
                        for (n = C.cursor; ; ) {
                          if (((r = C.cursor), C.in_grouping(_, 97, 249))) {
                            if (
                              ((C.bra = C.cursor),
                              (i = C.cursor),
                              e("u", "U", r))
                            )
                              break;
                            if (((C.cursor = i), e("i", "I", r))) break;
                          }
                          if (((C.cursor = r), C.cursor >= C.limit))
                            return void (C.cursor = n);
                          C.cursor++;
                        }
                    })(),
                    (C.cursor = t),
                    (function () {
                      var e = C.cursor;
                      (f = C.limit),
                        (d = f),
                        (l = f),
                        i(),
                        (C.cursor = e),
                        o() && ((d = C.cursor), o() && (l = C.cursor));
                    })(),
                    (C.limit_backward = t),
                    (C.cursor = C.limit),
                    (function () {
                      var e;
                      if (
                        ((C.ket = C.cursor),
                        C.find_among_b(m, 37) &&
                          ((C.bra = C.cursor),
                          (e = C.find_among_b(w, 5)) && s()))
                      )
                        switch (e) {
                          case 1:
                            C.slice_del();
                            break;
                          case 2:
                            C.slice_from("e");
                        }
                    })(),
                    (C.cursor = C.limit),
                    c() ||
                      ((C.cursor = C.limit),
                      (function () {
                        var e, t;
                        C.cursor >= f &&
                          ((t = C.limit_backward),
                          (C.limit_backward = f),
                          (C.ket = C.cursor),
                          (e = C.find_among_b(y, 87)) &&
                            ((C.bra = C.cursor), 1 == e && C.slice_del()),
                          (C.limit_backward = t));
                      })()),
                    (C.cursor = C.limit),
                    u(),
                    (C.cursor = C.limit_backward),
                    (function () {
                      for (
                        var e;
                        (C.bra = C.cursor), (e = C.find_among(p, 3));

                      )
                        switch (((C.ket = C.cursor), e)) {
                          case 1:
                            C.slice_from("i");
                            break;
                          case 2:
                            C.slice_from("u");
                            break;
                          case 3:
                            if (C.cursor >= C.limit) return;
                            C.cursor++;
                        }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.it.stemmer, "stemmer-it"),
        (e.it.stopWordFilter = e.generateStopWordFilter(
          "a abbia abbiamo abbiano abbiate ad agl agli ai al all alla alle allo anche avemmo avendo avesse avessero avessi avessimo aveste avesti avete aveva avevamo avevano avevate avevi avevo avrai avranno avrebbe avrebbero avrei avremmo avremo avreste avresti avrete avr?? avr?? avuta avute avuti avuto c che chi ci coi col come con contro cui da dagl dagli dai dal dall dalla dalle dallo degl degli dei del dell della delle dello di dov dove e ebbe ebbero ebbi ed era erano eravamo eravate eri ero essendo faccia facciamo facciano facciate faccio facemmo facendo facesse facessero facessi facessimo faceste facesti faceva facevamo facevano facevate facevi facevo fai fanno farai faranno farebbe farebbero farei faremmo faremo fareste faresti farete far?? far?? fece fecero feci fosse fossero fossi fossimo foste fosti fu fui fummo furono gli ha hai hanno ho i il in io l la le lei li lo loro lui ma mi mia mie miei mio ne negl negli nei nel nell nella nelle nello noi non nostra nostre nostri nostro o per perch?? pi?? quale quanta quante quanti quanto quella quelle quelli quello questa queste questi questo sarai saranno sarebbe sarebbero sarei saremmo saremo sareste saresti sarete sar?? sar?? se sei si sia siamo siano siate siete sono sta stai stando stanno starai staranno starebbe starebbero starei staremmo staremo stareste staresti starete star?? star?? stava stavamo stavano stavate stavi stavo stemmo stesse stessero stessi stessimo steste stesti stette stettero stetti stia stiamo stiano stiate sto su sua sue sugl sugli sui sul sull sulla sulle sullo suo suoi ti tra tu tua tue tuo tuoi tutti tutto un una uno vi voi vostra vostre vostri vostro ??".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.it.stopWordFilter, "stopWordFilter-it");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.fi = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.fi.trimmer, e.fi.stopWordFilter, e.fi.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.fi.stemmer));
      }),
        (e.fi.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.fi.trimmer = e.trimmerSupport.generateTrimmer(e.fi.wordCharacters)),
        e.Pipeline.registerFunction(e.fi.trimmer, "trimmer-fi"),
        (e.fi.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e() {
                for (var e; ; ) {
                  if (((e = C.cursor), C.in_grouping(_, 97, 246))) break;
                  if (((C.cursor = e), e >= C.limit)) return !0;
                  C.cursor++;
                }
                for (C.cursor = e; !C.out_grouping(_, 97, 246); ) {
                  if (C.cursor >= C.limit) return !0;
                  C.cursor++;
                }
                return !1;
              }
              function r() {
                var e, t;
                if (C.cursor >= u)
                  if (
                    ((t = C.limit_backward),
                    (C.limit_backward = u),
                    (C.ket = C.cursor),
                    (e = C.find_among_b(l, 10)))
                  ) {
                    switch (((C.bra = C.cursor), (C.limit_backward = t), e)) {
                      case 1:
                        if (!C.in_grouping_b(x, 97, 246)) return;
                        break;
                      case 2:
                        if (!(c <= C.cursor)) return;
                    }
                    C.slice_del();
                  } else C.limit_backward = t;
              }
              function i() {
                return C.find_among_b(m, 7);
              }
              function o() {
                return C.eq_s_b(1, "i") && C.in_grouping_b(k, 97, 246);
              }
              var s,
                a,
                c,
                u,
                l = [
                  new t("pa", -1, 1),
                  new t("sti", -1, 2),
                  new t("kaan", -1, 1),
                  new t("han", -1, 1),
                  new t("kin", -1, 1),
                  new t("h??n", -1, 1),
                  new t("k????n", -1, 1),
                  new t("ko", -1, 1),
                  new t("p??", -1, 1),
                  new t("k??", -1, 1),
                ],
                d = [
                  new t("lla", -1, -1),
                  new t("na", -1, -1),
                  new t("ssa", -1, -1),
                  new t("ta", -1, -1),
                  new t("lta", 3, -1),
                  new t("sta", 3, -1),
                ],
                f = [
                  new t("ll??", -1, -1),
                  new t("n??", -1, -1),
                  new t("ss??", -1, -1),
                  new t("t??", -1, -1),
                  new t("lt??", 3, -1),
                  new t("st??", 3, -1),
                ],
                h = [new t("lle", -1, -1), new t("ine", -1, -1)],
                p = [
                  new t("nsa", -1, 3),
                  new t("mme", -1, 3),
                  new t("nne", -1, 3),
                  new t("ni", -1, 2),
                  new t("si", -1, 1),
                  new t("an", -1, 4),
                  new t("en", -1, 6),
                  new t("??n", -1, 5),
                  new t("ns??", -1, 3),
                ],
                m = [
                  new t("aa", -1, -1),
                  new t("ee", -1, -1),
                  new t("ii", -1, -1),
                  new t("oo", -1, -1),
                  new t("uu", -1, -1),
                  new t("????", -1, -1),
                  new t("????", -1, -1),
                ],
                w = [
                  new t("a", -1, 8),
                  new t("lla", 0, -1),
                  new t("na", 0, -1),
                  new t("ssa", 0, -1),
                  new t("ta", 0, -1),
                  new t("lta", 4, -1),
                  new t("sta", 4, -1),
                  new t("tta", 4, 9),
                  new t("lle", -1, -1),
                  new t("ine", -1, -1),
                  new t("ksi", -1, -1),
                  new t("n", -1, 7),
                  new t("han", 11, 1),
                  new t("den", 11, -1, o),
                  new t("seen", 11, -1, i),
                  new t("hen", 11, 2),
                  new t("tten", 11, -1, o),
                  new t("hin", 11, 3),
                  new t("siin", 11, -1, o),
                  new t("hon", 11, 4),
                  new t("h??n", 11, 5),
                  new t("h??n", 11, 6),
                  new t("??", -1, 8),
                  new t("ll??", 22, -1),
                  new t("n??", 22, -1),
                  new t("ss??", 22, -1),
                  new t("t??", 22, -1),
                  new t("lt??", 26, -1),
                  new t("st??", 26, -1),
                  new t("tt??", 26, 9),
                ],
                g = [
                  new t("eja", -1, -1),
                  new t("mma", -1, 1),
                  new t("imma", 1, -1),
                  new t("mpa", -1, 1),
                  new t("impa", 3, -1),
                  new t("mmi", -1, 1),
                  new t("immi", 5, -1),
                  new t("mpi", -1, 1),
                  new t("impi", 7, -1),
                  new t("ej??", -1, -1),
                  new t("mm??", -1, 1),
                  new t("imm??", 10, -1),
                  new t("mp??", -1, 1),
                  new t("imp??", 12, -1),
                ],
                v = [new t("i", -1, -1), new t("j", -1, -1)],
                b = [new t("mma", -1, 1), new t("imma", 0, -1)],
                y = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
                _ = [
                  17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32,
                ],
                k = [
                  17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32,
                ],
                x = [
                  17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32,
                ],
                C = new n();
              (this.setCurrent = function (e) {
                C.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return C.getCurrent();
                }),
                (this.stem = function () {
                  var t = C.cursor;
                  return (
                    (u = C.limit),
                    (c = u),
                    e() || ((u = C.cursor), e() || (c = C.cursor)),
                    (s = !1),
                    (C.limit_backward = t),
                    (C.cursor = C.limit),
                    r(),
                    (C.cursor = C.limit),
                    (function () {
                      var e, t, n;
                      if (C.cursor >= u)
                        if (
                          ((t = C.limit_backward),
                          (C.limit_backward = u),
                          (C.ket = C.cursor),
                          (e = C.find_among_b(p, 9)))
                        )
                          switch (
                            ((C.bra = C.cursor), (C.limit_backward = t), e)
                          ) {
                            case 1:
                              (n = C.limit - C.cursor),
                                C.eq_s_b(1, "k") ||
                                  ((C.cursor = C.limit - n), C.slice_del());
                              break;
                            case 2:
                              C.slice_del(),
                                (C.ket = C.cursor),
                                C.eq_s_b(3, "kse") &&
                                  ((C.bra = C.cursor), C.slice_from("ksi"));
                              break;
                            case 3:
                              C.slice_del();
                              break;
                            case 4:
                              C.find_among_b(d, 6) && C.slice_del();
                              break;
                            case 5:
                              C.find_among_b(f, 6) && C.slice_del();
                              break;
                            case 6:
                              C.find_among_b(h, 2) && C.slice_del();
                          }
                        else C.limit_backward = t;
                    })(),
                    (C.cursor = C.limit),
                    (function () {
                      var e, t, n;
                      if (C.cursor >= u)
                        if (
                          ((t = C.limit_backward),
                          (C.limit_backward = u),
                          (C.ket = C.cursor),
                          (e = C.find_among_b(w, 30)))
                        ) {
                          switch (
                            ((C.bra = C.cursor), (C.limit_backward = t), e)
                          ) {
                            case 1:
                              if (!C.eq_s_b(1, "a")) return;
                              break;
                            case 2:
                            case 9:
                              if (!C.eq_s_b(1, "e")) return;
                              break;
                            case 3:
                              if (!C.eq_s_b(1, "i")) return;
                              break;
                            case 4:
                              if (!C.eq_s_b(1, "o")) return;
                              break;
                            case 5:
                              if (!C.eq_s_b(1, "??")) return;
                              break;
                            case 6:
                              if (!C.eq_s_b(1, "??")) return;
                              break;
                            case 7:
                              if (
                                ((n = C.limit - C.cursor),
                                !i() &&
                                  ((C.cursor = C.limit - n),
                                  !C.eq_s_b(2, "ie")))
                              ) {
                                C.cursor = C.limit - n;
                                break;
                              }
                              if (
                                ((C.cursor = C.limit - n),
                                C.cursor <= C.limit_backward)
                              ) {
                                C.cursor = C.limit - n;
                                break;
                              }
                              C.cursor--, (C.bra = C.cursor);
                              break;
                            case 8:
                              if (
                                !C.in_grouping_b(_, 97, 246) ||
                                !C.out_grouping_b(_, 97, 246)
                              )
                                return;
                          }
                          C.slice_del(), (s = !0);
                        } else C.limit_backward = t;
                    })(),
                    (C.cursor = C.limit),
                    (function () {
                      var e, t, n;
                      if (C.cursor >= c)
                        if (
                          ((t = C.limit_backward),
                          (C.limit_backward = c),
                          (C.ket = C.cursor),
                          (e = C.find_among_b(g, 14)))
                        ) {
                          if (
                            ((C.bra = C.cursor), (C.limit_backward = t), 1 == e)
                          ) {
                            if (((n = C.limit - C.cursor), C.eq_s_b(2, "po")))
                              return;
                            C.cursor = C.limit - n;
                          }
                          C.slice_del();
                        } else C.limit_backward = t;
                    })(),
                    (C.cursor = C.limit),
                    s
                      ? (!(function () {
                          var e;
                          C.cursor >= u &&
                            ((e = C.limit_backward),
                            (C.limit_backward = u),
                            (C.ket = C.cursor),
                            C.find_among_b(v, 2)
                              ? ((C.bra = C.cursor),
                                (C.limit_backward = e),
                                C.slice_del())
                              : (C.limit_backward = e));
                        })(),
                        (C.cursor = C.limit))
                      : ((C.cursor = C.limit),
                        (function () {
                          var e, t, n, r, i, o;
                          if (C.cursor >= u) {
                            if (
                              ((t = C.limit_backward),
                              (C.limit_backward = u),
                              (C.ket = C.cursor),
                              C.eq_s_b(1, "t") &&
                                ((C.bra = C.cursor),
                                (n = C.limit - C.cursor),
                                C.in_grouping_b(_, 97, 246) &&
                                  ((C.cursor = C.limit - n),
                                  C.slice_del(),
                                  (C.limit_backward = t),
                                  (r = C.limit - C.cursor),
                                  C.cursor >= c &&
                                    ((C.cursor = c),
                                    (i = C.limit_backward),
                                    (C.limit_backward = C.cursor),
                                    (C.cursor = C.limit - r),
                                    (C.ket = C.cursor),
                                    (e = C.find_among_b(b, 2))))))
                            ) {
                              if (
                                ((C.bra = C.cursor),
                                (C.limit_backward = i),
                                1 == e)
                              ) {
                                if (
                                  ((o = C.limit - C.cursor), C.eq_s_b(2, "po"))
                                )
                                  return;
                                C.cursor = C.limit - o;
                              }
                              return void C.slice_del();
                            }
                            C.limit_backward = t;
                          }
                        })(),
                        (C.cursor = C.limit)),
                    (function () {
                      var e, t, n, r;
                      if (C.cursor >= u) {
                        for (
                          e = C.limit_backward,
                            C.limit_backward = u,
                            t = C.limit - C.cursor,
                            i() &&
                              ((C.cursor = C.limit - t),
                              (C.ket = C.cursor),
                              C.cursor > C.limit_backward &&
                                (C.cursor--,
                                (C.bra = C.cursor),
                                C.slice_del())),
                            C.cursor = C.limit - t,
                            C.ket = C.cursor,
                            C.in_grouping_b(y, 97, 228) &&
                              ((C.bra = C.cursor),
                              C.out_grouping_b(_, 97, 246) && C.slice_del()),
                            C.cursor = C.limit - t,
                            C.ket = C.cursor,
                            C.eq_s_b(1, "j") &&
                              ((C.bra = C.cursor),
                              (n = C.limit - C.cursor),
                              C.eq_s_b(1, "o")
                                ? C.slice_del()
                                : ((C.cursor = C.limit - n),
                                  C.eq_s_b(1, "u") && C.slice_del())),
                            C.cursor = C.limit - t,
                            C.ket = C.cursor,
                            C.eq_s_b(1, "o") &&
                              ((C.bra = C.cursor),
                              C.eq_s_b(1, "j") && C.slice_del()),
                            C.cursor = C.limit - t,
                            C.limit_backward = e;
                          ;

                        ) {
                          if (
                            ((r = C.limit - C.cursor),
                            C.out_grouping_b(_, 97, 246))
                          ) {
                            C.cursor = C.limit - r;
                            break;
                          }
                          if (
                            ((C.cursor = C.limit - r),
                            C.cursor <= C.limit_backward)
                          )
                            return;
                          C.cursor--;
                        }
                        (C.ket = C.cursor),
                          C.cursor > C.limit_backward &&
                            (C.cursor--,
                            (C.bra = C.cursor),
                            (a = C.slice_to()),
                            C.eq_v_b(a) && C.slice_del());
                      }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.fi.stemmer, "stemmer-fi"),
        (e.fi.stopWordFilter = e.generateStopWordFilter(
          "ei eiv??t emme en et ette ett?? he heid??n heid??t heihin heille heill?? heilt?? heiss?? heist?? heit?? h??n h??neen h??nelle h??nell?? h??nelt?? h??nen h??ness?? h??nest?? h??net h??nt?? itse ja johon joiden joihin joiksi joilla joille joilta joina joissa joista joita joka joksi jolla jolle jolta jona jonka jos jossa josta jota jotka kanssa keiden keihin keiksi keille keill?? keilt?? kein?? keiss?? keist?? keit?? keneen keneksi kenelle kenell?? kenelt?? kenen kenen?? keness?? kenest?? kenet ketk?? ketk?? ket?? koska kuin kuka kun me meid??n meid??t meihin meille meill?? meilt?? meiss?? meist?? meit?? mihin miksi mik?? mille mill?? milt?? mink?? mink?? minua minulla minulle minulta minun minussa minusta minut minuun min?? min?? miss?? mist?? mitk?? mit?? mukaan mutta ne niiden niihin niiksi niille niill?? niilt?? niin niin niin?? niiss?? niist?? niit?? noiden noihin noiksi noilla noille noilta noin noina noissa noista noita nuo nyt n??iden n??ihin n??iksi n??ille n??ill?? n??ilt?? n??in?? n??iss?? n??ist?? n??it?? n??m?? ole olemme olen olet olette oli olimme olin olisi olisimme olisin olisit olisitte olisivat olit olitte olivat olla olleet ollut on ovat poikki se sek?? sen siihen siin?? siit?? siksi sille sill?? sill?? silt?? sinua sinulla sinulle sinulta sinun sinussa sinusta sinut sinuun sin?? sin?? sit?? tai te teid??n teid??t teihin teille teill?? teilt?? teiss?? teist?? teit?? tuo tuohon tuoksi tuolla tuolle tuolta tuon tuona tuossa tuosta tuota t??h??n t??ksi t??lle t??ll?? t??lt?? t??m?? t??m??n t??n?? t??ss?? t??st?? t??t?? vaan vai vaikka yli".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.fi.stopWordFilter, "stopWordFilter-fi");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.du = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.du.trimmer, e.du.stopWordFilter, e.du.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.du.stemmer));
      }),
        (e.du.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.du.trimmer = e.trimmerSupport.generateTrimmer(e.du.wordCharacters)),
        e.Pipeline.registerFunction(e.du.trimmer, "trimmer-du"),
        (e.du.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e(e) {
                return (_.cursor = e), e >= _.limit || (_.cursor++, !1);
              }
              function r() {
                for (; !_.in_grouping(v, 97, 232); ) {
                  if (_.cursor >= _.limit) return !0;
                  _.cursor++;
                }
                for (; !_.out_grouping(v, 97, 232); ) {
                  if (_.cursor >= _.limit) return !0;
                  _.cursor++;
                }
                return !1;
              }
              function i() {
                return l <= _.cursor;
              }
              function o() {
                return u <= _.cursor;
              }
              function s() {
                var e = _.limit - _.cursor;
                _.find_among_b(p, 3) &&
                  ((_.cursor = _.limit - e),
                  (_.ket = _.cursor),
                  _.cursor > _.limit_backward &&
                    (_.cursor--, (_.bra = _.cursor), _.slice_del()));
              }
              function a() {
                var e;
                (d = !1),
                  (_.ket = _.cursor),
                  _.eq_s_b(1, "e") &&
                    ((_.bra = _.cursor),
                    i() &&
                      ((e = _.limit - _.cursor),
                      _.out_grouping_b(v, 97, 232) &&
                        ((_.cursor = _.limit - e),
                        _.slice_del(),
                        (d = !0),
                        s())));
              }
              function c() {
                var e;
                i() &&
                  ((e = _.limit - _.cursor),
                  _.out_grouping_b(v, 97, 232) &&
                    ((_.cursor = _.limit - e),
                    _.eq_s_b(3, "gem") ||
                      ((_.cursor = _.limit - e), _.slice_del(), s())));
              }
              var u,
                l,
                d,
                f = [
                  new t("", -1, 6),
                  new t("??", 0, 1),
                  new t("??", 0, 1),
                  new t("??", 0, 2),
                  new t("??", 0, 2),
                  new t("??", 0, 3),
                  new t("??", 0, 3),
                  new t("??", 0, 4),
                  new t("??", 0, 4),
                  new t("??", 0, 5),
                  new t("??", 0, 5),
                ],
                h = [new t("", -1, 3), new t("I", 0, 2), new t("Y", 0, 1)],
                p = [
                  new t("dd", -1, -1),
                  new t("kk", -1, -1),
                  new t("tt", -1, -1),
                ],
                m = [
                  new t("ene", -1, 2),
                  new t("se", -1, 3),
                  new t("en", -1, 2),
                  new t("heden", 2, 1),
                  new t("s", -1, 3),
                ],
                w = [
                  new t("end", -1, 1),
                  new t("ig", -1, 2),
                  new t("ing", -1, 1),
                  new t("lijk", -1, 3),
                  new t("baar", -1, 4),
                  new t("bar", -1, 5),
                ],
                g = [
                  new t("aa", -1, -1),
                  new t("ee", -1, -1),
                  new t("oo", -1, -1),
                  new t("uu", -1, -1),
                ],
                v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
                b = [
                  1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  128,
                ],
                y = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
                _ = new n();
              (this.setCurrent = function (e) {
                _.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return _.getCurrent();
                }),
                (this.stem = function () {
                  var t = _.cursor;
                  return (
                    (function () {
                      for (var t, n, r, i = _.cursor; ; ) {
                        if (((_.bra = _.cursor), (t = _.find_among(f, 11))))
                          switch (((_.ket = _.cursor), t)) {
                            case 1:
                              _.slice_from("a");
                              continue;
                            case 2:
                              _.slice_from("e");
                              continue;
                            case 3:
                              _.slice_from("i");
                              continue;
                            case 4:
                              _.slice_from("o");
                              continue;
                            case 5:
                              _.slice_from("u");
                              continue;
                            case 6:
                              if (_.cursor >= _.limit) break;
                              _.cursor++;
                              continue;
                          }
                        break;
                      }
                      for (
                        _.cursor = i,
                          _.bra = i,
                          _.eq_s(1, "y")
                            ? ((_.ket = _.cursor), _.slice_from("Y"))
                            : (_.cursor = i);
                        ;

                      )
                        if (((n = _.cursor), _.in_grouping(v, 97, 232))) {
                          if (((r = _.cursor), (_.bra = r), _.eq_s(1, "i")))
                            (_.ket = _.cursor),
                              _.in_grouping(v, 97, 232) &&
                                (_.slice_from("I"), (_.cursor = n));
                          else if (((_.cursor = r), _.eq_s(1, "y")))
                            (_.ket = _.cursor),
                              _.slice_from("Y"),
                              (_.cursor = n);
                          else if (e(n)) break;
                        } else if (e(n)) break;
                    })(),
                    (_.cursor = t),
                    (l = _.limit),
                    (u = l),
                    r() ||
                      ((l = _.cursor) < 3 && (l = 3), r() || (u = _.cursor)),
                    (_.limit_backward = t),
                    (_.cursor = _.limit),
                    (function () {
                      var e,
                        t,
                        n,
                        r,
                        u,
                        l,
                        f = _.limit - _.cursor;
                      if (((_.ket = _.cursor), (e = _.find_among_b(m, 5))))
                        switch (((_.bra = _.cursor), e)) {
                          case 1:
                            i() && _.slice_from("heid");
                            break;
                          case 2:
                            c();
                            break;
                          case 3:
                            i() &&
                              _.out_grouping_b(y, 97, 232) &&
                              _.slice_del();
                        }
                      if (
                        ((_.cursor = _.limit - f),
                        a(),
                        (_.cursor = _.limit - f),
                        (_.ket = _.cursor),
                        _.eq_s_b(4, "heid") &&
                          ((_.bra = _.cursor),
                          o() &&
                            ((t = _.limit - _.cursor),
                            _.eq_s_b(1, "c") ||
                              ((_.cursor = _.limit - t),
                              _.slice_del(),
                              (_.ket = _.cursor),
                              _.eq_s_b(2, "en") && ((_.bra = _.cursor), c())))),
                        (_.cursor = _.limit - f),
                        (_.ket = _.cursor),
                        (e = _.find_among_b(w, 6)))
                      )
                        switch (((_.bra = _.cursor), e)) {
                          case 1:
                            if (o()) {
                              if (
                                (_.slice_del(),
                                (n = _.limit - _.cursor),
                                (_.ket = _.cursor),
                                _.eq_s_b(2, "ig") &&
                                  ((_.bra = _.cursor),
                                  o() &&
                                    ((r = _.limit - _.cursor),
                                    !_.eq_s_b(1, "e"))))
                              ) {
                                (_.cursor = _.limit - r), _.slice_del();
                                break;
                              }
                              (_.cursor = _.limit - n), s();
                            }
                            break;
                          case 2:
                            o() &&
                              ((u = _.limit - _.cursor),
                              _.eq_s_b(1, "e") ||
                                ((_.cursor = _.limit - u), _.slice_del()));
                            break;
                          case 3:
                            o() && (_.slice_del(), a());
                            break;
                          case 4:
                            o() && _.slice_del();
                            break;
                          case 5:
                            o() && d && _.slice_del();
                        }
                      (_.cursor = _.limit - f),
                        _.out_grouping_b(b, 73, 232) &&
                          ((l = _.limit - _.cursor),
                          _.find_among_b(g, 4) &&
                            _.out_grouping_b(v, 97, 232) &&
                            ((_.cursor = _.limit - l),
                            (_.ket = _.cursor),
                            _.cursor > _.limit_backward &&
                              (_.cursor--, (_.bra = _.cursor), _.slice_del())));
                    })(),
                    (_.cursor = _.limit_backward),
                    (function () {
                      for (var e; ; )
                        if (((_.bra = _.cursor), (e = _.find_among(h, 3))))
                          switch (((_.ket = _.cursor), e)) {
                            case 1:
                              _.slice_from("y");
                              break;
                            case 2:
                              _.slice_from("i");
                              break;
                            case 3:
                              if (_.cursor >= _.limit) return;
                              _.cursor++;
                          }
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.du.stemmer, "stemmer-du"),
        (e.du.stopWordFilter = e.generateStopWordFilter(
          " aan al alles als altijd andere ben bij daar dan dat de der deze die dit doch doen door dus een eens en er ge geen geweest haar had heb hebben heeft hem het hier hij hoe hun iemand iets ik in is ja je kan kon kunnen maar me meer men met mij mijn moet na naar niet niets nog nu of om omdat onder ons ook op over reeds te tegen toch toen tot u uit uw van veel voor want waren was wat werd wezen wie wil worden wordt zal ze zelf zich zij zijn zo zonder zou".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.du.stopWordFilter, "stopWordFilter-du");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      if (void 0 === e)
        throw new Error(
          "Lunr is not present. Please include / require Lunr before this script."
        );
      if (void 0 === e.stemmerSupport)
        throw new Error(
          "Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script."
        );
      (e.da = function () {
        this.pipeline.reset(),
          this.pipeline.add(e.da.trimmer, e.da.stopWordFilter, e.da.stemmer),
          this.searchPipeline &&
            (this.searchPipeline.reset(),
            this.searchPipeline.add(e.da.stemmer));
      }),
        (e.da.wordCharacters =
          "A-Za-z??????-????-????-????-?????-??????-??????-??????-??????-??????-????????????-??????????????????-??????-??????-??????-??????-??????-??????-??????-??????-??????-??????-???"),
        (e.da.trimmer = e.trimmerSupport.generateTrimmer(e.da.wordCharacters)),
        e.Pipeline.registerFunction(e.da.trimmer, "trimmer-da"),
        (e.da.stemmer = (function () {
          var t = e.stemmerSupport.Among,
            n = e.stemmerSupport.SnowballProgram,
            r = new (function () {
              function e() {
                var e,
                  t = d.limit - d.cursor;
                d.cursor >= i &&
                  ((e = d.limit_backward),
                  (d.limit_backward = i),
                  (d.ket = d.cursor),
                  d.find_among_b(a, 4)
                    ? ((d.bra = d.cursor),
                      (d.limit_backward = e),
                      (d.cursor = d.limit - t),
                      d.cursor > d.limit_backward &&
                        (d.cursor--, (d.bra = d.cursor), d.slice_del()))
                    : (d.limit_backward = e));
              }
              var r,
                i,
                o,
                s = [
                  new t("hed", -1, 1),
                  new t("ethed", 0, 1),
                  new t("ered", -1, 1),
                  new t("e", -1, 1),
                  new t("erede", 3, 1),
                  new t("ende", 3, 1),
                  new t("erende", 5, 1),
                  new t("ene", 3, 1),
                  new t("erne", 3, 1),
                  new t("ere", 3, 1),
                  new t("en", -1, 1),
                  new t("heden", 10, 1),
                  new t("eren", 10, 1),
                  new t("er", -1, 1),
                  new t("heder", 13, 1),
                  new t("erer", 13, 1),
                  new t("s", -1, 2),
                  new t("heds", 16, 1),
                  new t("es", 16, 1),
                  new t("endes", 18, 1),
                  new t("erendes", 19, 1),
                  new t("enes", 18, 1),
                  new t("ernes", 18, 1),
                  new t("eres", 18, 1),
                  new t("ens", 16, 1),
                  new t("hedens", 24, 1),
                  new t("erens", 24, 1),
                  new t("ers", 16, 1),
                  new t("ets", 16, 1),
                  new t("erets", 28, 1),
                  new t("et", -1, 1),
                  new t("eret", 30, 1),
                ],
                a = [
                  new t("gd", -1, -1),
                  new t("dt", -1, -1),
                  new t("gt", -1, -1),
                  new t("kt", -1, -1),
                ],
                c = [
                  new t("ig", -1, 1),
                  new t("lig", 0, 1),
                  new t("elig", 1, 1),
                  new t("els", -1, 1),
                  new t("l??st", -1, 2),
                ],
                u = [
                  17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128,
                ],
                l = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16],
                d = new n();
              (this.setCurrent = function (e) {
                d.setCurrent(e);
              }),
                (this.getCurrent = function () {
                  return d.getCurrent();
                }),
                (this.stem = function () {
                  var t = d.cursor;
                  return (
                    (function () {
                      var e,
                        t = d.cursor + 3;
                      if (((i = d.limit), 0 <= t && t <= d.limit)) {
                        for (r = t; ; ) {
                          if (((e = d.cursor), d.in_grouping(u, 97, 248))) {
                            d.cursor = e;
                            break;
                          }
                          if (((d.cursor = e), e >= d.limit)) return;
                          d.cursor++;
                        }
                        for (; !d.out_grouping(u, 97, 248); ) {
                          if (d.cursor >= d.limit) return;
                          d.cursor++;
                        }
                        (i = d.cursor) < r && (i = r);
                      }
                    })(),
                    (d.limit_backward = t),
                    (d.cursor = d.limit),
                    (function () {
                      var e, t;
                      if (
                        d.cursor >= i &&
                        ((t = d.limit_backward),
                        (d.limit_backward = i),
                        (d.ket = d.cursor),
                        (e = d.find_among_b(s, 32)),
                        (d.limit_backward = t),
                        e)
                      )
                        switch (((d.bra = d.cursor), e)) {
                          case 1:
                            d.slice_del();
                            break;
                          case 2:
                            d.in_grouping_b(l, 97, 229) && d.slice_del();
                        }
                    })(),
                    (d.cursor = d.limit),
                    e(),
                    (d.cursor = d.limit),
                    (function () {
                      var t,
                        n,
                        r,
                        o = d.limit - d.cursor;
                      if (
                        ((d.ket = d.cursor),
                        d.eq_s_b(2, "st") &&
                          ((d.bra = d.cursor),
                          d.eq_s_b(2, "ig") && d.slice_del()),
                        (d.cursor = d.limit - o),
                        d.cursor >= i &&
                          ((n = d.limit_backward),
                          (d.limit_backward = i),
                          (d.ket = d.cursor),
                          (t = d.find_among_b(c, 5)),
                          (d.limit_backward = n),
                          t))
                      )
                        switch (((d.bra = d.cursor), t)) {
                          case 1:
                            d.slice_del(),
                              (r = d.limit - d.cursor),
                              e(),
                              (d.cursor = d.limit - r);
                            break;
                          case 2:
                            d.slice_from("l??s");
                        }
                    })(),
                    (d.cursor = d.limit),
                    (function () {
                      var e;
                      d.cursor >= i &&
                        ((e = d.limit_backward),
                        (d.limit_backward = i),
                        (d.ket = d.cursor),
                        d.out_grouping_b(u, 97, 248)
                          ? ((d.bra = d.cursor),
                            (o = d.slice_to(o)),
                            (d.limit_backward = e),
                            d.eq_v_b(o) && d.slice_del())
                          : (d.limit_backward = e));
                    })(),
                    !0
                  );
                });
            })();
          return function (e) {
            return "function" == typeof e.update
              ? e.update(function (e) {
                  return r.setCurrent(e), r.stem(), r.getCurrent();
                })
              : (r.setCurrent(e), r.stem(), r.getCurrent());
          };
        })()),
        e.Pipeline.registerFunction(e.da.stemmer, "stemmer-da"),
        (e.da.stopWordFilter = e.generateStopWordFilter(
          "ad af alle alt anden at blev blive bliver da de dem den denne der deres det dette dig din disse dog du efter eller en end er et for fra ham han hans har havde have hende hendes her hos hun hvad hvis hvor i ikke ind jeg jer jo kunne man mange med meget men mig min mine mit mod ned noget nogle nu n??r og ogs?? om op os over p?? selv sig sin sine sit skal skulle som s??dan thi til ud under var vi vil ville vor v??re v??ret".split(
            " "
          )
        )),
        e.Pipeline.registerFunction(e.da.stopWordFilter, "stopWordFilter-da");
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : t()(e.lunr);
  })(this, function () {
    return function (e) {
      e.multiLanguage = function () {
        for (
          var t = Array.prototype.slice.call(arguments),
            n = t.join("-"),
            r = "",
            i = [],
            o = [],
            s = 0;
          s < t.length;
          ++s
        )
          "en" == t[s]
            ? ((r += "\\w"),
              i.unshift(e.stopWordFilter),
              i.push(e.stemmer),
              o.push(e.stemmer))
            : ((r += e[t[s]].wordCharacters),
              i.unshift(e[t[s]].stopWordFilter),
              i.push(e[t[s]].stemmer),
              o.push(e[t[s]].stemmer));
        var a = e.trimmerSupport.generateTrimmer(r);
        return (
          e.Pipeline.registerFunction(a, "lunr-multi-trimmer-" + n),
          i.unshift(a),
          function () {
            this.pipeline.reset(),
              this.pipeline.add.apply(this.pipeline, i),
              this.searchPipeline &&
                (this.searchPipeline.reset(),
                this.searchPipeline.add.apply(this.searchPipeline, o));
          }
        );
      };
    };
  }),
  (function (e) {
    (e.fn.ghostHunter = function (n) {
      var r = e.extend({}, e.fn.ghostHunter.defaults, n);
      if (r.results) return t.init(this, r), t;
    }),
      (e.fn.ghostHunter.defaults = {
        resultsData: !1,
        onPageLoad: !1,
        onKeyUp: !1,
        result_template: "<a href='{{link}}'><p><h2>{{title}}</h2></p></a>",
        info_template: "<p>Number of posts found: {{amount}}</p>",
        displaySearchInfo: !0,
        zeroResultsInfo: !0,
        before: !1,
        onComplete: !1,
        filterfields: !1,
      });
    var t = {
      isInit: !1,
      init: function (e, t) {
        var n = this;
        (this.target = e),
          (this.results = t.results),
          (this.blogData = {}),
          (this.result_template = t.result_template),
          (this.info_template = t.info_template),
          (this.zeroResultsInfo = t.zeroResultsInfo),
          (this.displaySearchInfo = t.displaySearchInfo),
          (this.before = t.before),
          (this.onComplete = t.onComplete),
          (this.filterfields = t.filterfields),
          (this.index = lunr(function () {
            this.use(
              lunr.multiLanguage(
                "en",
                "ru",
                "fr",
                "de",
                "es",
                "pt",
                "it",
                "fi",
                "du",
                "da"
              )
            ),
              this.ref("id"),
              this.field("title", { boost: 10 }),
              this.field("plaintext", { boost: 5 }),
              this.field("primaryTagName"),
              this.field("primaryAuthorName"),
              this.field("link");
          })),
          t.onPageLoad
            ? window.setTimeout(function () {
                n.loadAPI();
              }, 1)
            : e.focus(function () {
                n.loadAPI();
              }),
          e.closest("form").submit(function (t) {
            t.preventDefault(), n.find(e.val());
          }),
          t.onKeyUp &&
            e.keyup(function () {
              n.find(e.val());
            });
      },
      loadAPI: function () {
        if (this.isInit) return !1;
        var t = this.index,
          n = this.blogData,
          r =
            site_url +
            "/ghost/api/v3/content/posts/?key=" +
            search_api_key +
            "&limit=all&fields=id,title,url,feature_image,visibility,primary_tag,primary_author&include=authors,tags&formats=plaintext";
        e.get(r).done(function (e) {
          (searchData = e.posts),
            searchData.forEach(function (e) {
              var r = {
                  id: String(e.id),
                  title: String(e.title),
                  plaintext: String(e.plaintext),
                  link: String(e.url),
                  featureImage: String(e.feature_image),
                  primaryAuthorName: String(e.primary_author.name),
                  primaryTagName: String(e.primary_tag.name),
                },
                i = e.feature_image.replace(/images/, "images/size/w652");
              t.add(r),
                (n[e.id] = {
                  title: e.title,
                  link: e.url,
                  featureImage: i,
                  primaryAuthorName: e.primary_author.name,
                  primaryTagName: e.primary_tag.name,
                });
            });
        }),
          (this.isInit = !0);
      },
      find: function (t) {
        var n = this.index.search(t),
          r = e(this.results),
          i = [];
        r.empty(),
          this.before && this.before(),
          (this.zeroResultsInfo || n.length > 0) &&
            this.displaySearchInfo &&
            r.append(this.format(this.info_template, { amount: n.length }));
        for (var o = 0; o < n.length; o++) {
          var s = n[o].ref,
            a = this.blogData[s];
          r.append(this.format(this.result_template, a)), i.push(a);
        }
        this.onComplete && this.onComplete(i);
      },
      clear: function () {
        e(this.results).empty(), this.target.val("");
      },
      format: function (e, t) {
        return e.replace(/{{([^{}]*)}}/g, function (e, n) {
          var r = t[n];
          return "string" == typeof r || "number" == typeof r ? r : e;
        });
      },
    };
  })(jQuery);
var _self =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (e) {
    function t(e, t, n, r) {
      (this.type = e),
        (this.content = t),
        (this.alias = n),
        (this.length = 0 | (r || "").length);
    }
    function n(e, t, n, r) {
      e.lastIndex = t;
      var i = e.exec(n);
      if (i && r && i[1]) {
        var o = i[1].length;
        (i.index += o), (i[0] = i[0].slice(o));
      }
      return i;
    }
    function r(e, t, n) {
      var r = t.next,
        i = { value: n, prev: t, next: r };
      return (t.next = i), (r.prev = i), e.length++, i;
    }
    function i() {
      a.manual || a.highlightAll();
    }
    var o = /\blang(?:uage)?-([\w-]+)\b/i,
      s = 0,
      a = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler:
          e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof t
              ? new t(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, "__id", { value: ++s }), e.__id
            );
          },
          clone: function e(t, n) {
            var r, i;
            switch (((n = n || {}), a.util.type(t))) {
              case "Object":
                if (((i = a.util.objId(t)), n[i])) return n[i];
                for (var o in ((r = {}), (n[i] = r), t))
                  t.hasOwnProperty(o) && (r[o] = e(t[o], n));
                return r;
              case "Array":
                return (
                  (i = a.util.objId(t)),
                  n[i]
                    ? n[i]
                    : ((r = []),
                      (n[i] = r),
                      t.forEach(function (t, i) {
                        r[i] = e(t, n);
                      }),
                      r)
                );
              default:
                return t;
            }
          },
          getLanguage: function (e) {
            for (; e && !o.test(e.className); ) e = e.parentElement;
            return e
              ? (e.className.match(o) || [, "none"])[1].toLowerCase()
              : "none";
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (r) {
              var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) || [])[1];
              if (e) {
                var t = document.getElementsByTagName("script");
                for (var n in t) if (t[n].src == e) return t[n];
              }
              return null;
            }
          },
          isActive: function (e, t, n) {
            for (var r = "no-" + t; e; ) {
              var i = e.classList;
              if (i.contains(t)) return !0;
              if (i.contains(r)) return !1;
              e = e.parentElement;
            }
            return !!n;
          },
        },
        languages: {
          extend: function (e, t) {
            var n = a.util.clone(a.languages[e]);
            for (var r in t) n[r] = t[r];
            return n;
          },
          insertBefore: function (e, t, n, r) {
            var i = (r = r || a.languages)[e],
              o = {};
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                if (s == t)
                  for (var c in n) n.hasOwnProperty(c) && (o[c] = n[c]);
                n.hasOwnProperty(s) || (o[s] = i[s]);
              }
            var u = r[e];
            return (
              (r[e] = o),
              a.languages.DFS(a.languages, function (t, n) {
                n === u && t != e && (this[t] = o);
              }),
              o
            );
          },
          DFS: function e(t, n, r, i) {
            i = i || {};
            var o = a.util.objId;
            for (var s in t)
              if (t.hasOwnProperty(s)) {
                n.call(t, s, t[s], r || s);
                var c = t[s],
                  u = a.util.type(c);
                "Object" !== u || i[o(c)]
                  ? "Array" !== u || i[o(c)] || ((i[o(c)] = !0), e(c, n, s, i))
                  : ((i[o(c)] = !0), e(c, n, null, i));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, t) {
          a.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function (e, t, n) {
          var r = {
            callback: n,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          a.hooks.run("before-highlightall", r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector)
            )),
            a.hooks.run("before-all-elements-highlight", r);
          for (var i, o = 0; (i = r.elements[o++]); )
            a.highlightElement(i, !0 === t, r.callback);
        },
        highlightElement: function (t, n, r) {
          function i(e) {
            (l.highlightedCode = e),
              a.hooks.run("before-insert", l),
              (l.element.innerHTML = l.highlightedCode),
              a.hooks.run("after-highlight", l),
              a.hooks.run("complete", l),
              r && r.call(l.element);
          }
          var s = a.util.getLanguage(t),
            c = a.languages[s];
          t.className =
            t.className.replace(o, "").replace(/\s+/g, " ") + " language-" + s;
          var u = t.parentElement;
          u &&
            "pre" === u.nodeName.toLowerCase() &&
            (u.className =
              u.className.replace(o, "").replace(/\s+/g, " ") +
              " language-" +
              s);
          var l = { element: t, language: s, grammar: c, code: t.textContent };
          if ((a.hooks.run("before-sanity-check", l), !l.code))
            return a.hooks.run("complete", l), void (r && r.call(l.element));
          if ((a.hooks.run("before-highlight", l), l.grammar))
            if (n && e.Worker) {
              var d = new Worker(a.filename);
              (d.onmessage = function (e) {
                i(e.data);
              }),
                d.postMessage(
                  JSON.stringify({
                    language: l.language,
                    code: l.code,
                    immediateClose: !0,
                  })
                );
            } else i(a.highlight(l.code, l.grammar, l.language));
          else i(a.util.encode(l.code));
        },
        highlight: function (e, n, r) {
          var i = { code: e, grammar: n, language: r };
          return (
            a.hooks.run("before-tokenize", i),
            (i.tokens = a.tokenize(i.code, i.grammar)),
            a.hooks.run("after-tokenize", i),
            t.stringify(a.util.encode(i.tokens), i.language)
          );
        },
        tokenize: function (e, i) {
          var o = i.rest;
          if (o) {
            for (var s in o) i[s] = o[s];
            delete i.rest;
          }
          var c = new (function () {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          })();
          return (
            r(c, c.head, e),
            (function e(i, o, s, c, u, l) {
              for (var d in s)
                if (s.hasOwnProperty(d) && s[d]) {
                  var f = s[d];
                  f = Array.isArray(f) ? f : [f];
                  for (var h = 0; h < f.length; ++h) {
                    if (l && l.cause == d + "," + h) return;
                    var p = f[h],
                      m = p.inside,
                      w = !!p.lookbehind,
                      g = !!p.greedy,
                      v = p.alias;
                    if (g && !p.pattern.global) {
                      var b = p.pattern.toString().match(/[imsuy]*$/)[0];
                      p.pattern = RegExp(p.pattern.source, b + "g");
                    }
                    for (
                      var y = p.pattern || p, _ = c.next, k = u;
                      _ !== o.tail && !(l && k >= l.reach);
                      k += _.value.length, _ = _.next
                    ) {
                      var x = _.value;
                      if (o.length > i.length) return;
                      if (!(x instanceof t)) {
                        var C,
                          z = 1;
                        if (g) {
                          if (!(C = n(y, k, i, w))) break;
                          var S = C.index,
                            T = C.index + C[0].length,
                            E = k;
                          for (E += _.value.length; E <= S; )
                            (_ = _.next), (E += _.value.length);
                          if (
                            ((E -= _.value.length),
                            (k = E),
                            _.value instanceof t)
                          )
                            continue;
                          for (
                            var M = _;
                            M !== o.tail &&
                            (E < T || "string" == typeof M.value);
                            M = M.next
                          )
                            z++, (E += M.value.length);
                          z--, (x = i.slice(k, E)), (C.index -= k);
                        } else if (!(C = n(y, 0, x, w))) continue;
                        var S = C.index,
                          A = C[0],
                          j = x.slice(0, S),
                          q = x.slice(S + A.length),
                          P = k + x.length;
                        l && P > l.reach && (l.reach = P);
                        var F = _.prev;
                        j && ((F = r(o, F, j)), (k += j.length)),
                          (function (e, t, n) {
                            for (
                              var r = t.next, i = 0;
                              i < n && r !== e.tail;
                              i++
                            )
                              r = r.next;
                            ((t.next = r).prev = t), (e.length -= i);
                          })(o, F, z);
                        (_ = r(o, F, new t(d, m ? a.tokenize(A, m) : A, v, A))),
                          q && r(o, _, q),
                          1 < z &&
                            e(i, o, s, _.prev, k, {
                              cause: d + "," + h,
                              reach: P,
                            });
                      }
                    }
                  }
                }
            })(e, c, i, c.head, 0),
            (function (e) {
              for (var t = [], n = e.head.next; n !== e.tail; )
                t.push(n.value), (n = n.next);
              return t;
            })(c)
          );
        },
        hooks: {
          all: {},
          add: function (e, t) {
            var n = a.hooks.all;
            (n[e] = n[e] || []), n[e].push(t);
          },
          run: function (e, t) {
            var n = a.hooks.all[e];
            if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
          },
        },
        Token: t,
      };
    if (
      ((e.Prism = a),
      (t.stringify = function e(t, n) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) {
          var r = "";
          return (
            t.forEach(function (t) {
              r += e(t, n);
            }),
            r
          );
        }
        var i = {
            type: t.type,
            content: e(t.content, n),
            tag: "span",
            classes: ["token", t.type],
            attributes: {},
            language: n,
          },
          o = t.alias;
        o &&
          (Array.isArray(o)
            ? Array.prototype.push.apply(i.classes, o)
            : i.classes.push(o)),
          a.hooks.run("wrap", i);
        var s = "";
        for (var c in i.attributes)
          s +=
            " " +
            c +
            '="' +
            (i.attributes[c] || "").replace(/"/g, "&quot;") +
            '"';
        return (
          "<" +
          i.tag +
          ' class="' +
          i.classes.join(" ") +
          '"' +
          s +
          ">" +
          i.content +
          "</" +
          i.tag +
          ">"
        );
      }),
      !e.document)
    )
      return (
        e.addEventListener &&
          (a.disableWorkerMessageHandler ||
            e.addEventListener(
              "message",
              function (t) {
                var n = JSON.parse(t.data),
                  r = n.language,
                  i = n.code,
                  o = n.immediateClose;
                e.postMessage(a.highlight(i, a.languages[r], r)),
                  o && e.close();
              },
              !1
            )),
        a
      );
    var c = a.util.currentScript();
    if (
      (c &&
        ((a.filename = c.src),
        c.hasAttribute("data-manual") && (a.manual = !0)),
      !a.manual)
    ) {
      var u = document.readyState;
      "loading" === u || ("interactive" === u && c && c.defer)
        ? document.addEventListener("DOMContentLoaded", i)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(i)
        : window.setTimeout(i, 16);
    }
    return a;
  })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
  "undefined" != typeof global && (global.Prism = Prism),
  (Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
  (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside["internal-subset"].inside =
    Prism.languages.markup),
  Prism.hooks.add("wrap", function (e) {
    "entity" === e.type &&
      (e.attributes.title = e.content.replace(/&amp;/, "&"));
  }),
  Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (e, t) {
      var n = {};
      (n["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[t],
      }),
        (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var r = {
        "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
      };
      r["language-" + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
      var i = {};
      (i[e] = {
        pattern: RegExp(
          "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
            /__/g,
            function () {
              return e;
            }
          ),
          "i"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: r,
      }),
        Prism.languages.insertBefore("markup", "cdata", i);
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend("markup", {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml),
  (function (e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
          "i"
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
        },
      },
      selector: RegExp(
        "[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"
      ),
      string: { pattern: t, greedy: !0 },
      property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var n = e.languages.markup;
    n &&
      (n.tag.addInlined("style", "css"),
      e.languages.insertBefore(
        "inside",
        "attr-value",
        {
          "style-attr": {
            pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
            lookbehind: !0,
            inside: {
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  style: {
                    pattern: /(["'])[\s\S]+(?=["']$)/,
                    lookbehind: !0,
                    alias: "language-css",
                    inside: e.languages.css,
                  },
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              "attr-name": /^style/i,
            },
          },
        },
        n.tag
      ));
  })(Prism),
  (Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
      Prism.languages.clike["class-name"],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number:
      /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
  (Prism.languages.javascript["class-name"][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex,
        },
        "regex-flags": /[a-z]+$/,
        "regex-delimiter": /^\/|\/$/,
      },
    },
    "function-variable": {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function",
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
      pattern:
        /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": { pattern: /^`|`$/, alias: "string" },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\${|}$/,
              alias: "punctuation",
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
    Prism.languages.markup.tag.addInlined("script", "javascript"),
  (Prism.languages.js = Prism.languages.javascript),
  (Prism.languages.go = Prism.languages.extend("clike", {
    string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
    keyword:
      /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|iota|nil|true|false)\b/,
    number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
    operator:
      /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin:
      /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  })),
  delete Prism.languages.go["class-name"],
  $(document).ready(function () {
    "use strict";
    function e(e) {
      return $("<textarea/>").html(e).text();
    }
    function t() {
      0 === i.scrollTop
        ? (i.scrollTop = 1)
        : i.scrollHeight - i.scrollTop === i.clientHeight && (i.scrollTop -= 1);
    }
    function n(e) {
      e.preventDefault(),
        (function (e) {
          var t = e.val().trim().toLowerCase();
          return "" === t
            ? (e.addClass("has-error"), e.focus(), !1)
            : t.match(
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
              )
            ? (e.removeClass("has-error"), !0)
            : (e.addClass("has-error"), e.focus(), !1);
        })(l) &&
          $.ajax({
            type: "POST",
            url: ENV.SERVER_ORIGIN + "/~backend/v3/blogSignups.create",
            data: JSON.stringify({
              email_address: l.val().trim().toLowerCase(),
            }),
            success: function () {
              d.addClass("is-active"), d.focus();
            },
          });
    }
    function r(e) {
      e.preventDefault(), d.removeClass("is-active");
    }
    $("body").addClass("js-enabled");
    document.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
      var t = e.closest(".kg-gallery-image"),
        n = e.attributes.width.value / e.attributes.height.value;
      t.style.flex = n + " 1 0%";
    }),
      $(".js-header").headroom({
        tolerance: { down: 10, up: 20 },
        classes: {
          initial: "js-header--headroom",
          top: "js-header--top",
          notTop: "js-header--not-top",
          pinned: "js-header--pinned",
          unpinned: "js-header--unpinned",
        },
      }),
      $(".js-nav-toggle").click(function (e) {
        e.preventDefault(),
          $(".c-nav-wrap").toggleClass("is-active"),
          $(this).toggleClass("c-nav-toggle--close"),
          $("body").toggleClass("no-scroll");
      }),
      $(".c-content").fitVids({
        customSelector: [
          'iframe[src*="ted.com"]',
          'iframe[src*="player.twitch.tv"]',
          'iframe[src*="dailymotion.com"]',
          'iframe[src*="facebook.com"]',
        ],
      });
    var i = $(".c-search")[0],
      o = $(".js-search-input"),
      s = $(".js-search-results");
    $(".js-search-toggle").click(function (e) {
      e.preventDefault(),
        $(".js-search").addClass("is-active"),
        $("body").addClass("no-scroll"),
        $(".js-signup-input").prop("disabled", !0),
        $(".js-off-canvas-container").removeClass("is-active"),
        setTimeout(function () {
          o.focus();
        }, 500);
    }),
      $(".c-search, .js-search-close, .js-search-close .icon").on(
        "click keyup",
        function (e) {
          (e.target != this &&
            "js-search-close" != e.target.className &&
            "icon" != e.target.className &&
            27 != e.keyCode) ||
            ($(".c-search").removeClass("is-active"),
            $(".js-signup-input").prop("disabled", !1),
            $(".c-nav-wrap").hasClass("is-active") ||
              $("body").removeClass("no-scroll"));
        }
      ),
      o.ghostHunter({
        results: s,
        onKeyUp: !0,
        result_template:
          "      <a href={{link}} class='c-search-result'>        <div class='c-search-result__content'>          <div class='c-search-result__title'>{{title}}</div>          <div class='c-search-result__metadata'>            <span class='c-search-result__tag'>{{primaryTagName}}</span>            <span class='c-search-result__separator'>??</span>            <span class='c-search-result__author'>{{primaryAuthorName}}</span>          </div>        </div>        <div class='c-search-result__media'>          <div class='c-search-result__image is-inview' style='background-image: url({{featureImage}})'></div>        </div>      </a>",
        zeroResultsInfo: !1,
        displaySearchInfo: !1,
        before: function () {
          s.fadeIn();
        },
        onComplete: function (e) {
          0 === e.length
            ? $(".c-search__placeholder").removeClass("u-hidden")
            : ($(".c-search__placeholder").addClass("u-hidden"), t());
        },
      }),
      window.addEventListener && i.addEventListener("scroll", t, !0);
    var a = $("link[rel=next]").attr("href"),
      c = $(".js-load-posts");
    c.click(function (t) {
      t.preventDefault();
      var n = a.split(/page/)[0] + "page/" + pagination_next_page_number + "/";
      console.log(c.children()[0]),
        $.ajax({
          url: n,
          beforeSend: function () {
            c.text(e(pagination_loading_text)), c.addClass("c-btn--loading");
          },
        }).done(function (t) {
          var n = $(".js-post-card-wrap", t);
          $(".js-grid").append(n),
            c.text(e(pagination_more_posts_text)),
            c.removeClass("c-btn--loading"),
            pagination_next_page_number++,
            pagination_next_page_number > pagination_available_pages_number &&
              c.addClass("u-hidden").attr("disabled", !0);
        });
    });
    var u = $(".js-signup-btn"),
      l = $(".js-signup-input"),
      d = $(".js-signup-confirm");
    u.click(n),
      l.keydown(function (e) {
        13 === e.which && n(e);
      }),
      d.click(r),
      d.keydown(r);
  });
