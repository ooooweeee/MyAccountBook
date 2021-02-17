/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMoney = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M793.6 93.867a42.667 42.667 0 0 1 11.477 55.253l-2.944 4.48-247.466 329.941V512h128a42.667 42.667 0 0 1 0 85.333h-128v85.334h128a42.667 42.667 0 0 1 0 85.333h-128v128a42.667 42.667 0 0 1-85.334 0V768h-128a42.667 42.667 0 0 1 0-85.333h128v-85.334h-128a42.667 42.667 0 0 1 0-85.333h128v-28.459L221.867 153.6a42.667 42.667 0 0 1 64.81-55.296l3.456 4.096 221.824 295.765L733.867 102.4a42.667 42.667 0 0 1 59.733-8.533z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMoney.defaultProps = {
  size: 18,
};

IconMoney = React.memo ? React.memo(IconMoney) : IconMoney;

export default IconMoney;
