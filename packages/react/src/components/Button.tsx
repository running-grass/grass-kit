import React from 'react';
import PropTypes from 'prop-types'
import { GrassButton as Wbutton } from '@grass-ui/web-component'

import {createComponent, EventName} from '@lit-labs/react';


export const Button = createComponent(
  React,
  'grass-button',
  Wbutton,
  {
    onClick: 'click' as EventName<PointerEvent>,
  }
);
