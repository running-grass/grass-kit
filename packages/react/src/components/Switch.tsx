import React from 'react';
import { GrassSwitch } from '@grass-kit/web-component'

import { createComponent, EventName } from '@lit-labs/react';

export const Switch = createComponent(
  React,
  'grass-switch',
  GrassSwitch,
  {
    /**
     * 开关的变化
     */
    onChange: 'change' as EventName<InputEvent>,
  }
);