function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import StyledStack from './StyledStack';

import { withTheme } from '../hocs';

import doc from './doc';

var Stack = function (_Component) {
  _inherits(Stack, _Component);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Stack.prototype.render = function render() {
    var _props = this.props,
        anchor = _props.anchor,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['anchor', 'children']);

    // make all children but the first absolutely positioned


    var styledChildren = React.Children.map(children, function (child, index) {
      if (index === 0) {
        return child;
      }
      var style = {
        position: 'absolute',
        overflow: 'hidden'
      };
      if (anchor === 'center') {
        style.top = '50%';
        style.left = '50%';
        style.transform = 'translate(-50%, -50%)';
      } else if (anchor === 'left') {
        style.top = '50%';
        style.left = '0';
        style.transform = 'translateY(-50%)';
      } else if (anchor === 'right') {
        style.top = '50%';
        style.right = '0';
        style.transform = 'translateY(-50%)';
      } else if (anchor === 'top') {
        style.top = '0';
        style.right = '50%';
        style.transform = 'translateX(-50%)';
      } else if (anchor === 'bottom') {
        style.top = '0';
        style.right = '50%';
        style.transform = 'translateX(-50%)';
      } else if (anchor === 'top-left') {
        style.top = '0';
        style.left = '0';
      } else if (anchor === 'bottom-left') {
        style.bottom = '0';
        style.left = '0';
      } else if (anchor === 'top-right') {
        style.top = '0';
        style.right = '0';
      } else if (anchor === 'bottom-right') {
        style.bottom = '0';
        style.right = '0';
      }
      return React.cloneElement(child, { style: style });
    });

    return React.createElement(
      StyledStack,
      rest,
      styledChildren
    );
  };

  return Stack;
}(Component);

Stack.defaultProps = {
  anchor: 'center'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Stack);
}

export default compose(withTheme)(Stack);