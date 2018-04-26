'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _Box = require('../Box');

var _Button = require('../Button');

var _Text = require('../Text');

var _hocs = require('../hocs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hover: undefined
    }, _this.onClickTab = function (event) {
      var onActivate = _this.props.onActivate;

      if (event) {
        event.preventDefault();
      }
      onActivate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tab.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active && nextProps.active) {
      this.setState({ hover: undefined });
    }
  };

  Tab.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        active = _props.active,
        title = _props.title,
        _onMouseOver = _props.onMouseOver,
        _onMouseOut = _props.onMouseOut,
        rest = _objectWithoutProperties(_props, ['active', 'title', 'onMouseOver', 'onMouseOut']);

    var hover = this.state.hover;
    var grommet = this.context.grommet;


    delete rest.onActivate;

    var dark = grommet && grommet.dark;

    var activeTitle = typeof title === 'string' ? _react2.default.createElement(
      _Text.Text,
      { weight: 'bold' },
      title
    ) : title;

    var inactiveTitle = typeof title === 'string' ? _react2.default.createElement(
      _Text.Text,
      { color: dark ? 'light-2' : 'dark-4' },
      title
    ) : title;

    return _react2.default.createElement(
      _Button.Button,
      _extends({
        plain: true,
        role: 'tab',
        'aria-selected': active,
        'aria-expanded': active,
        onClick: this.onClickTab,
        onMouseOver: function onMouseOver() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          if (!active) {
            _this2.setState({ hover: dark ? 'light-4' : 'border' });
          }
          if (_onMouseOver) {
            _onMouseOver(args);
          }
        },
        onMouseOut: function onMouseOut() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          if (!active) {
            _this2.setState({ hover: undefined });
          }
          if (_onMouseOut) {
            _onMouseOut(args);
          }
        }
      }, rest),
      _react2.default.createElement(
        _Box.Box,
        {
          pad: { bottom: 'xsmall' },
          margin: { horizontal: 'small' },
          border: active || hover ? { side: 'bottom', size: 'medium', color: hover || (dark ? 'white' : 'black') } : { side: 'bottom', size: 'medium', color: 'transparent' }
        },
        active ? activeTitle : inactiveTitle
      )
    );
  };

  return Tab;
}(_react.Component);

Tab.contextTypes = {
  grommet: _propTypes2.default.object
};
exports.default = (0, _recompose.compose)(_hocs.withTheme)(Tab);