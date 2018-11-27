webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./src/components/RegistrationForm.js":
/*!********************************************!*\
  !*** ./src/components/RegistrationForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Matt\\thinkful\\mathew-spaced-repetition\\spaced-repetition-client\\src\\components\\RegistrationForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNUP_MUTATION($firstname: String!, \n          $lastname: String!, \n          $email: String!,\n          $password: String!) {\n    signup(email: $email, password: $password, \n      first: $firstname, last: $lastname ) \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 // import Error from './Errors';
// import styled from 'styled-components'

var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject()); // const ErrorStyles = styled.div`
//   padding: 2rem;
//   background: white;
//   margin: 2rem 0;
//   border: 1px solid rgba(0, 0, 0, 0.05);
//   border-left: 5px solid red;
//   p {
//     margin: 0;
//     font-weight: 100;
//   }
//   strong {
//     margin-right: 1rem;
//   }
// `;

var RegistrationForm =
/*#__PURE__*/
function (_Component) {
  _inherits(RegistrationForm, _Component);

  function RegistrationForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RegistrationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegistrationForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(RegistrationForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: SIGNUP_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        if (error) return "Error ".concat(error);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          method: "post",
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            signup();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "Signup for an Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "firstname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "firstname",
          placeholder: "firstname",
          value: _this2.state.firstname,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "lastname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "lastname",
          placeholder: "lastname",
          value: _this2.state.lastname,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Sign Up!")));
      });
    }
  }]);

  return RegistrationForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RegistrationForm);

/***/ })

})
//# sourceMappingURL=signup.js.e87f6c4357188111070a.hot-update.js.map