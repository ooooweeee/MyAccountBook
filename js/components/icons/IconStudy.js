/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStudy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.3 431.6l94.2-40.4c36.5-15.4 53.2-57.6 37.8-94.2-7-16-19.9-29.5-35.9-36.5L541.9 63.3c-9.6-4.5-19.2-6.4-30.1-6.4-9.6 0-19.2 1.9-28.2 5.8L53.8 260.6C18 277.2 1.9 319.5 18.6 355.4c7.7 16 20.5 28.8 36.5 35.9l94.2 40.4v320.9c1.3 25.6 16.7 48.7 39.1 60.2l290.8 146.7 3.8 1.9c9 3.8 18.6 5.8 28.2 5.8 10.9 0 22.4-2.6 32-7.7L834 812.7l3.8-1.9c22.4-12.8 35.9-36.5 35.9-62.1V432.2c0.6 0.1 0.6 0.1 0.6-0.6z m-362.5-310L955 325.9 511.8 516.2 68.6 325.9l443.2-204.3z m0 780.8L214.6 752.5V459.2l269 115.3c9 3.8 18.6 5.8 28.2 5.8s19.2-1.9 28.2-5.8l269-115.3v293.4L511.8 902.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M935.2 673.1c0 3.2 0.6 6.4 1.9 9 3.8 7 10.9 11.5 18.6 11.5 3.2 0 6.4-0.6 9-1.9 21.8-10.9 35.2-32.7 35.2-57.6V454.7l-65.3 32.7v185.8h0.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconStudy.defaultProps = {
  size: 18,
};

IconStudy = React.memo ? React.memo(IconStudy) : IconStudy;

export default IconStudy;
