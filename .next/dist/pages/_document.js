'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\healtylife\\pages\\_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'body { margin: 0 } /* custom! */'), _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/css/Style.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJmbHVzaCIsIk15RG9jdW1lbnQiLCJwcm9wcyIsImN1c3RvbVZhbHVlIiwicmVuZGVyUGFnZSIsImh0bWwiLCJoZWFkIiwiZXJyb3JIdG1sIiwiY2h1bmtzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7O0FBQy9CLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7OzZCQU9WLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkVBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFKSixBQUNFLEFBR0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BRFIsQUFDYyxBQUNaLDZCQUFBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBVEosQUFNRSxBQUdFLEFBRUY7QUFGRTtBQUFBLHFEQUVNLEtBQVIsQUFBWSxvREFBbUQsV0FBL0QsQUFBeUUsMkVBQTBFLGFBQW5KLEFBQStKO29CQUEvSjtzQkFYRixBQVdFLEFBQ0E7QUFEQTtvREFDUSxLQUFSLEFBQVksNkVBQTRFLFdBQXhGLEFBQWtHLDJFQUEwRSxhQUE1SyxBQUF3TDtvQkFBeEw7c0JBWkYsQUFZRSxBQUNBO0FBREE7b0RBQ1EsS0FBUixBQUFZLDhFQUE2RSxXQUF6RixBQUFtRywyRUFBMEUsYUFBN0ssQUFBeUw7b0JBQXpMO3NCQWRKLEFBQ0UsQUFhRSxBQUdMO0FBSEs7Ozs7OzBDQXJCaUM7VUFBZCxBQUFjLGtCQUFkLEFBQWM7O3dCQUFBLEFBQ0s7VUFETCxBQUM3QixtQkFENkIsQUFDN0I7VUFENkIsQUFDdkIsbUJBRHVCLEFBQ3ZCO1VBRHVCLEFBQ2pCLHdCQURpQixBQUNqQjtVQURpQixBQUNOLHFCQURNLEFBQ04sQUFDL0I7O1VBQU0sU0FBTixBQUFlLEFBQ2Y7YUFBTyxFQUFFLE1BQUYsTUFBUSxNQUFSLE1BQWMsV0FBZCxXQUF5QixRQUF6QixRQUFpQyxRQUF4QyxBQUFPLEFBQ1I7Ozs7O0FBTHFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9oZWFsdHlsaWZlIn0=