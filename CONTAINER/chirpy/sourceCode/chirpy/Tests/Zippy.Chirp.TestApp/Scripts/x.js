$(function () {
  alert("dah dah dah dah");
});
$(function () {
  alert("test test");
});
$(function () {});
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
Sys.Mvc.NumberValidator.create = function () {
  return Function.createDelegate(
    new Sys.Mvc.NumberValidator(),
    new Sys.Mvc.NumberValidator().validate
  );
};
Sys.Mvc.NumberValidator.prototype = {
  validate: function (a) {
    if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(a)) return true;
    a = Number.parseLocale(a);
    return !isNaN(a);
  },
};
Sys.Mvc.FormContext = function (a, b) {
  this._errors = [];
  this.fields = Array(0);
  this._formElement = a;
  this._validationSummaryElement = b;
  a[Sys.Mvc.FormContext._formValidationTag] = this;
  if (b) {
    var c = b.getElementsByTagName("ul");
    if (c.length > 0) this._validationSummaryULElement = c[0];
  }
  this._onClickHandler = Function.createDelegate(this, this._form_OnClick);
  this._onSubmitHandler = Function.createDelegate(this, this._form_OnSubmit);
};
Sys.Mvc.FormContext._Application_Load = function () {
  var a = window.mvcClientValidationMetadata;
  if (a)
    for (; a.length > 0; ) {
      var b = a.pop();
      Sys.Mvc.FormContext._parseJsonOptions(b);
    }
};
Sys.Mvc.FormContext._getFormElementsWithName = function (a, b) {
  for (
    var c = [], d = document.getElementsByName(b), e = 0;
    e < d.length;
    e++
  ) {
    var f = d[e];
    Sys.Mvc.FormContext._isElementInHierarchy(a, f) && Array.add(c, f);
  }
  return c;
};
Sys.Mvc.FormContext.getValidationForForm = function (a) {
  return a[Sys.Mvc.FormContext._formValidationTag];
};
Sys.Mvc.FormContext._isElementInHierarchy = function (a, b) {
  for (; b; ) {
    if (a === b) return true;
    b = b.parentNode;
  }
  return false;
};
Sys.Mvc.FormContext._parseJsonOptions = function (a) {
  var b = $get(a.FormId),
    c = !Sys.Mvc._validationUtil.stringIsNullOrEmpty(a.ValidationSummaryId)
      ? $get(a.ValidationSummaryId)
      : null;
  c = new Sys.Mvc.FormContext(b, c);
  c.enableDynamicValidation();
  c.replaceValidationSummary = a.ReplaceValidationSummary;
  for (var d = 0; d < a.Fields.length; d++) {
    var e = a.Fields[d],
      f = Sys.Mvc.FormContext._getFormElementsWithName(b, e.FieldName),
      g = !Sys.Mvc._validationUtil.stringIsNullOrEmpty(e.ValidationMessageId)
        ? $get(e.ValidationMessageId)
        : null,
      h = new Sys.Mvc.FieldContext(c);
    Array.addRange(h.elements, f);
    h.validationMessageElement = g;
    h.replaceValidationMessageContents = e.ReplaceValidationMessageContents;
    for (f = 0; f < e.ValidationRules.length; f++) {
      g = e.ValidationRules[f];
      var j = Sys.Mvc.ValidatorRegistry.getValidator(g);
      if (j) {
        var i = Sys.Mvc.$create_Validation();
        i.fieldErrorMessage = g.ErrorMessage;
        i.validator = j;
        Array.add(h.validations, i);
      }
    }
    h.enableDynamicValidation();
    Array.add(c.fields, h);
  }
  return c;
};
Sys.Mvc.FormContext.prototype = {
  _onClickHandler: null,
  _onSubmitHandler: null,
  _submitButtonClicked: null,
  _validationSummaryElement: null,
  _validationSummaryULElement: null,
  _formElement: null,
  replaceValidationSummary: false,
  addError: function (a) {
    this.addErrors([a]);
  },
  addErrors: function (a) {
    if (!Sys.Mvc._validationUtil.arrayIsNullOrEmpty(a)) {
      Array.addRange(this._errors, a);
      this._onErrorCountChanged();
    }
  },
  clearErrors: function () {
    Array.clear(this._errors);
    this._onErrorCountChanged();
  },
  _displayError: function () {
    if (this._validationSummaryElement) {
      if (this._validationSummaryULElement) {
        Sys.Mvc._validationUtil.removeAllChildren(
          this._validationSummaryULElement
        );
        for (var a = 0; a < this._errors.length; a++) {
          var b = document.createElement("li");
          Sys.Mvc._validationUtil.setInnerText(b, this._errors[a]);
          this._validationSummaryULElement.appendChild(b);
        }
      }
      Sys.UI.DomElement.removeCssClass(
        this._validationSummaryElement,
        Sys.Mvc.FormContext._validationSummaryValidCss
      );
      Sys.UI.DomElement.addCssClass(
        this._validationSummaryElement,
        Sys.Mvc.FormContext._validationSummaryErrorCss
      );
    }
  },
  _displaySuccess: function () {
    var a = this._validationSummaryElement;
    if (a) {
      var b = this._validationSummaryULElement;
      if (b) b.innerHTML = "";
      Sys.UI.DomElement.removeCssClass(
        a,
        Sys.Mvc.FormContext._validationSummaryErrorCss
      );
      Sys.UI.DomElement.addCssClass(
        a,
        Sys.Mvc.FormContext._validationSummaryValidCss
      );
    }
  },
  enableDynamicValidation: function () {
    Sys.UI.DomEvent.addHandler(
      this._formElement,
      "click",
      this._onClickHandler
    );
    Sys.UI.DomEvent.addHandler(
      this._formElement,
      "submit",
      this._onSubmitHandler
    );
  },
  _findSubmitButton: function (a) {
    if (a.disabled) return null;
    var b = a.name;
    if (b) {
      var c = a.tagName.toUpperCase();
      encodeURIComponent(b);
      if (c === "INPUT") {
        b = a.type;
        if (b === "submit" || b === "image") return a;
      } else if (c === "BUTTON" && b.length && a.type === "submit") return a;
    }
    return null;
  },
  _form_OnClick: function (a) {
    this._submitButtonClicked = this._findSubmitButton(a.target);
  },
  _form_OnSubmit: function (a) {
    var b = this._submitButtonClicked;
    if (!(b && b.disableValidation)) {
      b = this.validate("submit");
      Sys.Mvc._validationUtil.arrayIsNullOrEmpty(b) || a.preventDefault();
    }
  },
  _onErrorCountChanged: function () {
    this._errors.length ? this._displayError() : this._displaySuccess();
  },
  validate: function (a) {
    for (var b = this.fields, c = [], d = 0; d < b.length; d++) {
      var e = b[d].validate(a);
      e && Array.addRange(c, e);
    }
    if (this.replaceValidationSummary) {
      this.clearErrors();
      this.addErrors(c);
    }
    return c;
  },
};
Sys.Mvc.FieldContext = function (a) {
  this._errors = [];
  this.elements = Array(0);
  this.validations = Array(0);
  this.formContext = a;
  this._onBlurHandler = Function.createDelegate(this, this._element_OnBlur);
  this._onChangeHandler = Function.createDelegate(this, this._element_OnChange);
  this._onInputHandler = Function.createDelegate(this, this._element_OnInput);
  this._onPropertyChangeHandler = Function.createDelegate(
    this,
    this._element_OnPropertyChange
  );
};
Sys.Mvc.FieldContext.prototype = {
  _onBlurHandler: null,
  _onChangeHandler: null,
  _onInputHandler: null,
  _onPropertyChangeHandler: null,
  defaultErrorMessage: null,
  formContext: null,
  replaceValidationMessageContents: false,
  validationMessageElement: null,
  addError: function (a) {
    this.addErrors([a]);
  },
  addErrors: function (a) {
    if (!Sys.Mvc._validationUtil.arrayIsNullOrEmpty(a)) {
      Array.addRange(this._errors, a);
      this._onErrorCountChanged();
    }
  },
  clearErrors: function () {
    Array.clear(this._errors);
    this._onErrorCountChanged();
  },
  _displayError: function () {
    var a = this.validationMessageElement;
    if (a) {
      this.replaceValidationMessageContents &&
        Sys.Mvc._validationUtil.setInnerText(a, this._errors[0]);
      Sys.UI.DomElement.removeCssClass(
        a,
        Sys.Mvc.FieldContext._validationMessageValidCss
      );
      Sys.UI.DomElement.addCssClass(
        a,
        Sys.Mvc.FieldContext._validationMessageErrorCss
      );
    }
    a = this.elements;
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      Sys.UI.DomElement.removeCssClass(
        c,
        Sys.Mvc.FieldContext._inputElementValidCss
      );
      Sys.UI.DomElement.addCssClass(
        c,
        Sys.Mvc.FieldContext._inputElementErrorCss
      );
    }
  },
  _displaySuccess: function () {
    var a = this.validationMessageElement;
    if (a) {
      this.replaceValidationMessageContents &&
        Sys.Mvc._validationUtil.setInnerText(a, "");
      Sys.UI.DomElement.removeCssClass(
        a,
        Sys.Mvc.FieldContext._validationMessageErrorCss
      );
      Sys.UI.DomElement.addCssClass(
        a,
        Sys.Mvc.FieldContext._validationMessageValidCss
      );
    }
    a = this.elements;
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      Sys.UI.DomElement.removeCssClass(
        c,
        Sys.Mvc.FieldContext._inputElementErrorCss
      );
      Sys.UI.DomElement.addCssClass(
        c,
        Sys.Mvc.FieldContext._inputElementValidCss
      );
    }
  },
  _element_OnBlur: function (a) {
    if (
      a.target[Sys.Mvc.FieldContext._hasTextChangedTag] ||
      a.target[Sys.Mvc.FieldContext._hasValidationFiredTag]
    )
      this.validate("blur");
  },
  _element_OnChange: function (a) {
    a.target[Sys.Mvc.FieldContext._hasTextChangedTag] = true;
  },
  _element_OnInput: function (a) {
    a.target[Sys.Mvc.FieldContext._hasTextChangedTag] = true;
    a.target[Sys.Mvc.FieldContext._hasValidationFiredTag] &&
      this.validate("input");
  },
  _element_OnPropertyChange: function (a) {
    if (a.rawEvent.propertyName === "value") {
      a.target[Sys.Mvc.FieldContext._hasTextChangedTag] = true;
      a.target[Sys.Mvc.FieldContext._hasValidationFiredTag] &&
        this.validate("input");
    }
  },
  enableDynamicValidation: function () {
    for (var a = this.elements, b = 0; b < a.length; b++) {
      var c = a[b];
      Sys.Mvc._validationUtil.elementSupportsEvent(c, "onpropertychange")
        ? Sys.UI.DomEvent.addHandler(
            c,
            "propertychange",
            this._onPropertyChangeHandler
          )
        : Sys.UI.DomEvent.addHandler(c, "input", this._onInputHandler);
      Sys.UI.DomEvent.addHandler(c, "change", this._onChangeHandler);
      Sys.UI.DomEvent.addHandler(c, "blur", this._onBlurHandler);
    }
  },
  _getErrorString: function (a, b) {
    var c = b || this.defaultErrorMessage;
    if (Boolean.isInstanceOfType(a)) return a ? null : c;
    if (String.isInstanceOfType(a)) return a.length ? a : c;
    return null;
  },
  _getStringValue: function () {
    var a = this.elements;
    return a.length > 0 ? a[0].value : null;
  },
  _markValidationFired: function () {
    for (var a = this.elements, b = 0; b < a.length; b++)
      a[b][Sys.Mvc.FieldContext._hasValidationFiredTag] = true;
  },
  _onErrorCountChanged: function () {
    this._errors.length ? this._displayError() : this._displaySuccess();
  },
  validate: function (a) {
    for (
      var b = this.validations, c = [], d = this._getStringValue(), e = 0;
      e < b.length;
      e++
    ) {
      var f = b[e],
        g = Sys.Mvc.$create_ValidationContext();
      g.eventName = a;
      g.fieldContext = this;
      g.validation = f;
      f = this._getErrorString(f.validator(d, g), f.fieldErrorMessage);
      Sys.Mvc._validationUtil.stringIsNullOrEmpty(f) || Array.add(c, f);
    }
    this._markValidationFired();
    this.clearErrors();
    this.addErrors(c);
    return c;
  },
};
Sys.Mvc.RangeValidator = function (a, b) {
  this._minimum = a;
  this._maximum = b;
};
Sys.Mvc.RangeValidator.create = function (a) {
  var b = a.ValidationParameters.minimum;
  a = a.ValidationParameters.maximum;
  return Function.createDelegate(
    new Sys.Mvc.RangeValidator(b, a),
    new Sys.Mvc.RangeValidator(b, a).validate
  );
};
Sys.Mvc.RangeValidator.prototype = {
  _minimum: null,
  _maximum: null,
  validate: function (a) {
    if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(a)) return true;
    a = Number.parseLocale(a);
    return !isNaN(a) && this._minimum <= a && a <= this._maximum;
  },
};
Sys.Mvc.RegularExpressionValidator = function (a) {
  this._pattern = a;
};
Sys.Mvc.RegularExpressionValidator.create = function (a) {
  a = a.ValidationParameters.pattern;
  return Function.createDelegate(
    new Sys.Mvc.RegularExpressionValidator(a),
    new Sys.Mvc.RegularExpressionValidator(a).validate
  );
};
Sys.Mvc.RegularExpressionValidator.prototype = {
  _pattern: null,
  validate: function (a) {
    if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(a)) return true;
    var b = RegExp(this._pattern).exec(a);
    return (
      !Sys.Mvc._validationUtil.arrayIsNullOrEmpty(b) && b[0].length === a.length
    );
  },
};
Sys.Mvc.RequiredValidator = function () {};
Sys.Mvc.RequiredValidator.create = function () {
  return Function.createDelegate(
    new Sys.Mvc.RequiredValidator(),
    new Sys.Mvc.RequiredValidator().validate
  );
};
Sys.Mvc.RequiredValidator._isRadioInputElement = function (a) {
  if (a.tagName.toUpperCase() === "INPUT")
    if (a.type.toUpperCase() === "RADIO") return true;
  return false;
};
Sys.Mvc.RequiredValidator._isSelectInputElement = function (a) {
  if (a.tagName.toUpperCase() === "SELECT") return true;
  return false;
};
Sys.Mvc.RequiredValidator._isTextualInputElement = function (a) {
  if (a.tagName.toUpperCase() === "INPUT")
    switch (a.type.toUpperCase()) {
      case "TEXT":
      case "PASSWORD":
      case "FILE":
        return true;
    }
  if (a.tagName.toUpperCase() === "TEXTAREA") return true;
  return false;
};
Sys.Mvc.RequiredValidator._validateRadioInput = function (a) {
  for (var b = 0; b < a.length; b++) if (a[b].checked) return true;
  return false;
};
Sys.Mvc.RequiredValidator._validateSelectInput = function (a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    if (c.selected)
      if (!Sys.Mvc._validationUtil.stringIsNullOrEmpty(c.value)) return true;
  }
  return false;
};
Sys.Mvc.RequiredValidator._validateTextualInput = function (a) {
  return !Sys.Mvc._validationUtil.stringIsNullOrEmpty(a.value);
};
Sys.Mvc.RequiredValidator.prototype = {
  validate: function (a, b) {
    var c = b.fieldContext.elements;
    if (!c.length) return true;
    var d = c[0];
    if (Sys.Mvc.RequiredValidator._isTextualInputElement(d))
      return Sys.Mvc.RequiredValidator._validateTextualInput(d);
    if (Sys.Mvc.RequiredValidator._isRadioInputElement(d))
      return Sys.Mvc.RequiredValidator._validateRadioInput(c);
    if (Sys.Mvc.RequiredValidator._isSelectInputElement(d))
      return Sys.Mvc.RequiredValidator._validateSelectInput(d.options);
    return true;
  },
};
Sys.Mvc.StringLengthValidator = function (a, b) {
  this._minLength = a;
  this._maxLength = b;
};
Sys.Mvc.StringLengthValidator.create = function (a) {
  var b = a.ValidationParameters.minimumLength;
  a = a.ValidationParameters.maximumLength;
  return Function.createDelegate(
    new Sys.Mvc.StringLengthValidator(b, a),
    new Sys.Mvc.StringLengthValidator(b, a).validate
  );
};
Sys.Mvc.StringLengthValidator.prototype = {
  _maxLength: 0,
  _minLength: 0,
  validate: function (a) {
    if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(a)) return true;
    return this._minLength <= a.length && a.length <= this._maxLength;
  },
};
Sys.Mvc._validationUtil = function () {};
Sys.Mvc._validationUtil.arrayIsNullOrEmpty = function (a) {
  return !a || !a.length;
};
Sys.Mvc._validationUtil.stringIsNullOrEmpty = function (a) {
  return !a || !a.length;
};
Sys.Mvc._validationUtil.elementSupportsEvent = function (a, b) {
  return b in a;
};
Sys.Mvc._validationUtil.removeAllChildren = function (a) {
  for (; a.firstChild; ) a.removeChild(a.firstChild);
};
Sys.Mvc._validationUtil.setInnerText = function (a, b) {
  var c = document.createTextNode(b);
  Sys.Mvc._validationUtil.removeAllChildren(a);
  a.appendChild(c);
};
Sys.Mvc.ValidatorRegistry = function () {};
Sys.Mvc.ValidatorRegistry.getValidator = function (a) {
  var b = Sys.Mvc.ValidatorRegistry.validators[a.ValidationType];
  return b ? b(a) : null;
};
Sys.Mvc.ValidatorRegistry._getDefaultValidators = function () {
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
Sys.Mvc._validationUtil.registerClass("Sys.Mvc._validationUtil");
Sys.Mvc.ValidatorRegistry.registerClass("Sys.Mvc.ValidatorRegistry");
Sys.Mvc.FormContext._validationSummaryErrorCss = "validation-summary-errors";
Sys.Mvc.FormContext._validationSummaryValidCss = "validation-summary-valid";
Sys.Mvc.FormContext._formValidationTag = "__MVC_FormValidation";
Sys.Mvc.FieldContext._hasTextChangedTag = "__MVC_HasTextChanged";
Sys.Mvc.FieldContext._hasValidationFiredTag = "__MVC_HasValidationFired";
Sys.Mvc.FieldContext._inputElementErrorCss = "input-validation-error";
Sys.Mvc.FieldContext._inputElementValidCss = "input-validation-valid";
Sys.Mvc.FieldContext._validationMessageErrorCss = "field-validation-error";
Sys.Mvc.FieldContext._validationMessageValidCss = "field-validation-valid";
Sys.Mvc.ValidatorRegistry.validators =
  Sys.Mvc.ValidatorRegistry._getDefaultValidators();
Sys.Application.add_load(function () {
  Sys.Application.remove_load(arguments.callee);
  Sys.Mvc.FormContext._Application_Load();
});
