//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftMvcValidation.js

Type.registerNamespace("Sys.Mvc");
Sys.Mvc.$create_Validation = function () {
  return {};
};
Sys.Mvc.$create_JsonValidationField = function () {
  return {};
};
Sys.Mvc.$create_JsonValidationOptions = function () {
  return {};
};
Sys.Mvc.$create_JsonValidationRule = function () {
  return {};
};
Sys.Mvc.$create_ValidationContext = function () {
  return {};
};
Sys.Mvc.NumberValidator = function () {};
Sys.Mvc.NumberValidator.create = function (rule) {
  return Function.createDelegate(
    new Sys.Mvc.NumberValidator(),
    new Sys.Mvc.NumberValidator().validate
  );
};
Sys.Mvc.NumberValidator.prototype = {
  validate: function (value, context) {
    if (Sys.Mvc._ValidationUtil.$1(value)) {
      return true;
    }
    var $0 = Number.parseLocale(value);
    return !isNaN($0);
  },
};
Sys.Mvc.FormContext = function (formElement, validationSummaryElement) {
  this.$5 = [];
  this.fields = new Array(0);
  this.$9 = formElement;
  this.$7 = validationSummaryElement;
  formElement["__MVC_FormValidation"] = this;
  if (validationSummaryElement) {
    var $0 = validationSummaryElement.getElementsByTagName("ul");
    if ($0.length > 0) {
      this.$8 = $0[0];
    }
  }
  this.$3 = Function.createDelegate(this, this.$D);
  this.$4 = Function.createDelegate(this, this.$E);
};
Sys.Mvc.FormContext._Application_Load = function () {
  var $0 = window.mvcClientValidationMetadata;
  if ($0) {
    while ($0.length > 0) {
      var $1 = $0.pop();
      Sys.Mvc.FormContext.$12($1);
    }
  }
};
Sys.Mvc.FormContext.$F = function ($p0, $p1) {
  var $0 = [];
  var $1 = document.getElementsByName($p1);
  for (var $2 = 0; $2 < $1.length; $2++) {
    var $3 = $1[$2];
    if (Sys.Mvc.FormContext.$10($p0, $3)) {
      Array.add($0, $3);
    }
  }
  return $0;
};
Sys.Mvc.FormContext.getValidationForForm = function (formElement) {
  return formElement["__MVC_FormValidation"];
};
Sys.Mvc.FormContext.$10 = function ($p0, $p1) {
  while ($p1) {
    if ($p0 === $p1) {
      return true;
    }
    $p1 = $p1.parentNode;
  }
  return false;
};
Sys.Mvc.FormContext.$12 = function ($p0) {
  var $0 = $get($p0.FormId);
  var $1 = !Sys.Mvc._ValidationUtil.$1($p0.ValidationSummaryId)
    ? $get($p0.ValidationSummaryId)
    : null;
  var $2 = new Sys.Mvc.FormContext($0, $1);
  $2.enableDynamicValidation();
  $2.replaceValidationSummary = $p0.ReplaceValidationSummary;
  for (var $3 = 0; $3 < $p0.Fields.length; $3++) {
    var $4 = $p0.Fields[$3];
    var $5 = Sys.Mvc.FormContext.$F($0, $4.FieldName);
    var $6 = !Sys.Mvc._ValidationUtil.$1($4.ValidationMessageId)
      ? $get($4.ValidationMessageId)
      : null;
    var $7 = new Sys.Mvc.FieldContext($2);
    Array.addRange($7.elements, $5);
    $7.validationMessageElement = $6;
    $7.replaceValidationMessageContents = $4.ReplaceValidationMessageContents;
    for (var $8 = 0; $8 < $4.ValidationRules.length; $8++) {
      var $9 = $4.ValidationRules[$8];
      var $A = Sys.Mvc.ValidatorRegistry.getValidator($9);
      if ($A) {
        var $B = Sys.Mvc.$create_Validation();
        $B.fieldErrorMessage = $9.ErrorMessage;
        $B.validator = $A;
        Array.add($7.validations, $B);
      }
    }
    $7.enableDynamicValidation();
    Array.add($2.fields, $7);
  }
  return $2;
};
Sys.Mvc.FormContext.prototype = {
  $3: null,
  $4: null,
  $6: null,
  $7: null,
  $8: null,
  $9: null,
  replaceValidationSummary: false,
  addError: function (message) {
    this.addErrors([message]);
  },
  addErrors: function (messages) {
    if (!Sys.Mvc._ValidationUtil.$0(messages)) {
      Array.addRange(this.$5, messages);
      this.$11();
    }
  },
  clearErrors: function () {
    Array.clear(this.$5);
    this.$11();
  },
  $A: function () {
    if (this.$7) {
      if (this.$8) {
        Sys.Mvc._ValidationUtil.$3(this.$8);
        for (var $0 = 0; $0 < this.$5.length; $0++) {
          var $1 = document.createElement("li");
          Sys.Mvc._ValidationUtil.$4($1, this.$5[$0]);
          this.$8.appendChild($1);
        }
      }
      Sys.UI.DomElement.removeCssClass(this.$7, "validation-summary-valid");
      Sys.UI.DomElement.addCssClass(this.$7, "validation-summary-errors");
    }
  },
  $B: function () {
    var $0 = this.$7;
    if ($0) {
      var $1 = this.$8;
      if ($1) {
        $1.innerHTML = "";
      }
      Sys.UI.DomElement.removeCssClass($0, "validation-summary-errors");
      Sys.UI.DomElement.addCssClass($0, "validation-summary-valid");
    }
  },
  enableDynamicValidation: function () {
    Sys.UI.DomEvent.addHandler(this.$9, "click", this.$3);
    Sys.UI.DomEvent.addHandler(this.$9, "submit", this.$4);
  },
  $C: function ($p0) {
    if ($p0.disabled) {
      return null;
    }
    var $0 = $p0.name;
    if ($0) {
      var $1 = $p0.tagName.toUpperCase();
      var $2 = encodeURIComponent($0);
      var $3 = $p0;
      if ($1 === "INPUT") {
        var $4 = $3.type;
        if ($4 === "submit" || $4 === "image") {
          return $3;
        }
      } else if ($1 === "BUTTON" && $0.length && $3.type === "submit") {
        return $3;
      }
    }
    return null;
  },
  $D: function ($p0) {
    this.$6 = this.$C($p0.target);
  },
  $E: function ($p0) {
    var $0 = $p0.target;
    var $1 = this.$6;
    if ($1 && $1.disableValidation) {
      return;
    }
    var $2 = this.validate("submit");
    if (!Sys.Mvc._ValidationUtil.$0($2)) {
      $p0.preventDefault();
    }
  },
  $11: function () {
    if (!this.$5.length) {
      this.$B();
    } else {
      this.$A();
    }
  },
  validate: function (eventName) {
    var $0 = this.fields;
    var $1 = [];
    for (var $2 = 0; $2 < $0.length; $2++) {
      var $3 = $0[$2];
      var $4 = $3.validate(eventName);
      if ($4) {
        Array.addRange($1, $4);
      }
    }
    if (this.replaceValidationSummary) {
      this.clearErrors();
      this.addErrors($1);
    }
    return $1;
  },
};
Sys.Mvc.FieldContext = function (formContext) {
  this.$A = [];
  this.elements = new Array(0);
  this.validations = new Array(0);
  this.formContext = formContext;
  this.$6 = Function.createDelegate(this, this.$D);
  this.$7 = Function.createDelegate(this, this.$E);
  this.$8 = Function.createDelegate(this, this.$F);
  this.$9 = Function.createDelegate(this, this.$10);
};
Sys.Mvc.FieldContext.prototype = {
  $6: null,
  $7: null,
  $8: null,
  $9: null,
  defaultErrorMessage: null,
  formContext: null,
  replaceValidationMessageContents: false,
  validationMessageElement: null,
  addError: function (message) {
    this.addErrors([message]);
  },
  addErrors: function (messages) {
    if (!Sys.Mvc._ValidationUtil.$0(messages)) {
      Array.addRange(this.$A, messages);
      this.$14();
    }
  },
  clearErrors: function () {
    Array.clear(this.$A);
    this.$14();
  },
  $B: function () {
    var $0 = this.validationMessageElement;
    if ($0) {
      if (this.replaceValidationMessageContents) {
        Sys.Mvc._ValidationUtil.$4($0, this.$A[0]);
      }
      Sys.UI.DomElement.removeCssClass($0, "field-validation-valid");
      Sys.UI.DomElement.addCssClass($0, "field-validation-error");
    }
    var $1 = this.elements;
    for (var $2 = 0; $2 < $1.length; $2++) {
      var $3 = $1[$2];
      Sys.UI.DomElement.removeCssClass($3, "input-validation-valid");
      Sys.UI.DomElement.addCssClass($3, "input-validation-error");
    }
  },
  $C: function () {
    var $0 = this.validationMessageElement;
    if ($0) {
      if (this.replaceValidationMessageContents) {
        Sys.Mvc._ValidationUtil.$4($0, "");
      }
      Sys.UI.DomElement.removeCssClass($0, "field-validation-error");
      Sys.UI.DomElement.addCssClass($0, "field-validation-valid");
    }
    var $1 = this.elements;
    for (var $2 = 0; $2 < $1.length; $2++) {
      var $3 = $1[$2];
      Sys.UI.DomElement.removeCssClass($3, "input-validation-error");
      Sys.UI.DomElement.addCssClass($3, "input-validation-valid");
    }
  },
  $D: function ($p0) {
    if (
      $p0.target["__MVC_HasTextChanged"] ||
      $p0.target["__MVC_HasValidationFired"]
    ) {
      this.validate("blur");
    }
  },
  $E: function ($p0) {
    $p0.target["__MVC_HasTextChanged"] = true;
  },
  $F: function ($p0) {
    $p0.target["__MVC_HasTextChanged"] = true;
    if ($p0.target["__MVC_HasValidationFired"]) {
      this.validate("input");
    }
  },
  $10: function ($p0) {
    if ($p0.rawEvent.propertyName === "value") {
      $p0.target["__MVC_HasTextChanged"] = true;
      if ($p0.target["__MVC_HasValidationFired"]) {
        this.validate("input");
      }
    }
  },
  enableDynamicValidation: function () {
    var $0 = this.elements;
    for (var $1 = 0; $1 < $0.length; $1++) {
      var $2 = $0[$1];
      if (Sys.Mvc._ValidationUtil.$2($2, "onpropertychange")) {
        Sys.UI.DomEvent.addHandler($2, "propertychange", this.$9);
      } else {
        Sys.UI.DomEvent.addHandler($2, "input", this.$8);
      }
      Sys.UI.DomEvent.addHandler($2, "change", this.$7);
      Sys.UI.DomEvent.addHandler($2, "blur", this.$6);
    }
  },
  $11: function ($p0, $p1) {
    var $0 = $p1 || this.defaultErrorMessage;
    if (Boolean.isInstanceOfType($p0)) {
      return $p0 ? null : $0;
    }
    if (String.isInstanceOfType($p0)) {
      return $p0.length ? $p0 : $0;
    }
    return null;
  },
  $12: function () {
    var $0 = this.elements;
    return $0.length > 0 ? $0[0].value : null;
  },
  $13: function () {
    var $0 = this.elements;
    for (var $1 = 0; $1 < $0.length; $1++) {
      var $2 = $0[$1];
      $2["__MVC_HasValidationFired"] = true;
    }
  },
  $14: function () {
    if (!this.$A.length) {
      this.$C();
    } else {
      this.$B();
    }
  },
  validate: function (eventName) {
    var $0 = this.validations;
    var $1 = [];
    var $2 = this.$12();
    for (var $3 = 0; $3 < $0.length; $3++) {
      var $4 = $0[$3];
      var $5 = Sys.Mvc.$create_ValidationContext();
      $5.eventName = eventName;
      $5.fieldContext = this;
      $5.validation = $4;
      var $6 = $4.validator($2, $5);
      var $7 = this.$11($6, $4.fieldErrorMessage);
      if (!Sys.Mvc._ValidationUtil.$1($7)) {
        Array.add($1, $7);
      }
    }
    this.$13();
    this.clearErrors();
    this.addErrors($1);
    return $1;
  },
};
Sys.Mvc.RangeValidator = function (minimum, maximum) {
  this.$0 = minimum;
  this.$1 = maximum;
};
Sys.Mvc.RangeValidator.create = function (rule) {
  var $0 = rule.ValidationParameters["minimum"];
  var $1 = rule.ValidationParameters["maximum"];
  return Function.createDelegate(
    new Sys.Mvc.RangeValidator($0, $1),
    new Sys.Mvc.RangeValidator($0, $1).validate
  );
};
Sys.Mvc.RangeValidator.prototype = {
  $0: null,
  $1: null,
  validate: function (value, context) {
    if (Sys.Mvc._ValidationUtil.$1(value)) {
      return true;
    }
    var $0 = Number.parseLocale(value);
    return !isNaN($0) && this.$0 <= $0 && $0 <= this.$1;
  },
};
Sys.Mvc.RegularExpressionValidator = function (pattern) {
  this.$0 = pattern;
};
Sys.Mvc.RegularExpressionValidator.create = function (rule) {
  var $0 = rule.ValidationParameters["pattern"];
  return Function.createDelegate(
    new Sys.Mvc.RegularExpressionValidator($0),
    new Sys.Mvc.RegularExpressionValidator($0).validate
  );
};
Sys.Mvc.RegularExpressionValidator.prototype = {
  $0: null,
  validate: function (value, context) {
    if (Sys.Mvc._ValidationUtil.$1(value)) {
      return true;
    }
    var $0 = new RegExp(this.$0);
    var $1 = $0.exec(value);
    return !Sys.Mvc._ValidationUtil.$0($1) && $1[0].length === value.length;
  },
};
Sys.Mvc.RequiredValidator = function () {};
Sys.Mvc.RequiredValidator.create = function (rule) {
  return Function.createDelegate(
    new Sys.Mvc.RequiredValidator(),
    new Sys.Mvc.RequiredValidator().validate
  );
};
Sys.Mvc.RequiredValidator.$0 = function ($p0) {
  if ($p0.tagName.toUpperCase() === "INPUT") {
    var $0 = $p0.type.toUpperCase();
    if ($0 === "RADIO") {
      return true;
    }
  }
  return false;
};
Sys.Mvc.RequiredValidator.$1 = function ($p0) {
  if ($p0.tagName.toUpperCase() === "SELECT") {
    return true;
  }
  return false;
};
Sys.Mvc.RequiredValidator.$2 = function ($p0) {
  if ($p0.tagName.toUpperCase() === "INPUT") {
    var $0 = $p0.type.toUpperCase();
    switch ($0) {
      case "TEXT":
      case "PASSWORD":
      case "FILE":
        return true;
    }
  }
  if ($p0.tagName.toUpperCase() === "TEXTAREA") {
    return true;
  }
  return false;
};
Sys.Mvc.RequiredValidator.$3 = function ($p0) {
  for (var $0 = 0; $0 < $p0.length; $0++) {
    var $1 = $p0[$0];
    if ($1.checked) {
      return true;
    }
  }
  return false;
};
Sys.Mvc.RequiredValidator.$4 = function ($p0) {
  for (var $0 = 0; $0 < $p0.length; $0++) {
    var $1 = $p0[$0];
    if ($1.selected) {
      if (!Sys.Mvc._ValidationUtil.$1($1.value)) {
        return true;
      }
    }
  }
  return false;
};
Sys.Mvc.RequiredValidator.$5 = function ($p0) {
  return !Sys.Mvc._ValidationUtil.$1($p0.value);
};
Sys.Mvc.RequiredValidator.prototype = {
  validate: function (value, context) {
    var $0 = context.fieldContext.elements;
    if (!$0.length) {
      return true;
    }
    var $1 = $0[0];
    if (Sys.Mvc.RequiredValidator.$2($1)) {
      return Sys.Mvc.RequiredValidator.$5($1);
    }
    if (Sys.Mvc.RequiredValidator.$0($1)) {
      return Sys.Mvc.RequiredValidator.$3($0);
    }
    if (Sys.Mvc.RequiredValidator.$1($1)) {
      return Sys.Mvc.RequiredValidator.$4($1.options);
    }
    return true;
  },
};
Sys.Mvc.StringLengthValidator = function (minLength, maxLength) {
  this.$1 = minLength;
  this.$0 = maxLength;
};
Sys.Mvc.StringLengthValidator.create = function (rule) {
  var $0 = rule.ValidationParameters["minimumLength"];
  var $1 = rule.ValidationParameters["maximumLength"];
  return Function.createDelegate(
    new Sys.Mvc.StringLengthValidator($0, $1),
    new Sys.Mvc.StringLengthValidator($0, $1).validate
  );
};
Sys.Mvc.StringLengthValidator.prototype = {
  $0: 0,
  $1: 0,
  validate: function (value, context) {
    if (Sys.Mvc._ValidationUtil.$1(value)) {
      return true;
    }
    return this.$1 <= value.length && value.length <= this.$0;
  },
};
Sys.Mvc._ValidationUtil = function () {};
Sys.Mvc._ValidationUtil.$0 = function ($p0) {
  return !$p0 || !$p0.length;
};
Sys.Mvc._ValidationUtil.$1 = function ($p0) {
  return !$p0 || !$p0.length;
};
Sys.Mvc._ValidationUtil.$2 = function ($p0, $p1) {
  return $p1 in $p0;
};
Sys.Mvc._ValidationUtil.$3 = function ($p0) {
  while ($p0.firstChild) {
    $p0.removeChild($p0.firstChild);
  }
};
Sys.Mvc._ValidationUtil.$4 = function ($p0, $p1) {
  var $0 = document.createTextNode($p1);
  Sys.Mvc._ValidationUtil.$3($p0);
  $p0.appendChild($0);
};
Sys.Mvc.ValidatorRegistry = function () {};
Sys.Mvc.ValidatorRegistry.getValidator = function (rule) {
  var $0 = Sys.Mvc.ValidatorRegistry.validators[rule.ValidationType];
  return $0 ? $0(rule) : null;
};
Sys.Mvc.ValidatorRegistry.$0 = function () {
  return {
    required: Function.createDelegate(null, Sys.Mvc.RequiredValidator.create),
    stringLength: Function.createDelegate(
      null,
      Sys.Mvc.StringLengthValidator.create
    ),
    regularExpression: Function.createDelegate(
      null,
      Sys.Mvc.RegularExpressionValidator.create
    ),
    range: Function.createDelegate(null, Sys.Mvc.RangeValidator.create),
    number: Function.createDelegate(null, Sys.Mvc.NumberValidator.create),
  };
};
Sys.Mvc.NumberValidator.registerClass("Sys.Mvc.NumberValidator");
Sys.Mvc.FormContext.registerClass("Sys.Mvc.FormContext");
Sys.Mvc.FieldContext.registerClass("Sys.Mvc.FieldContext");
Sys.Mvc.RangeValidator.registerClass("Sys.Mvc.RangeValidator");
Sys.Mvc.RegularExpressionValidator.registerClass(
  "Sys.Mvc.RegularExpressionValidator"
);
Sys.Mvc.RequiredValidator.registerClass("Sys.Mvc.RequiredValidator");
Sys.Mvc.StringLengthValidator.registerClass("Sys.Mvc.StringLengthValidator");
Sys.Mvc._ValidationUtil.registerClass("Sys.Mvc._ValidationUtil");
Sys.Mvc.ValidatorRegistry.registerClass("Sys.Mvc.ValidatorRegistry");
Sys.Mvc.ValidatorRegistry.validators = Sys.Mvc.ValidatorRegistry.$0();
// ---- Do not remove this footer ----
// Generated using Script# v0.5.0.0 (http://projects.nikhilk.net)
// -----------------------------------
Sys.Application.add_load(function () {
  Sys.Application.remove_load(arguments.callee);
  Sys.Mvc.FormContext._Application_Load();
});
