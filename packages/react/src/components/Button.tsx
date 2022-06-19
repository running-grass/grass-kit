import React from 'react';
import PropTypes from 'prop-types'
import { Button as Xbutton } from '@x-style/web-component'

import {createComponent, EventName} from '@lit-labs/react';


export const Button = createComponent(
  React,
  'x-button',
  Xbutton,
  {
    onClick: 'click' as EventName<PointerEvent>,
  }
);


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
   onClick: PropTypes.func,
  };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
