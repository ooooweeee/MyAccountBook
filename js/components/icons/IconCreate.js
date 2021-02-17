/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCreate = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 170.667a42.667 42.667 0 0 1 42.667 42.666v256h256a42.667 42.667 0 0 1 0 85.334h-256v256a42.667 42.667 0 0 1-85.334 0v-256h-256a42.667 42.667 0 0 1 0-85.334h256v-256A42.667 42.667 0 0 1 512 170.667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCreate.defaultProps = {
  size: 18,
};

IconCreate = React.memo ? React.memo(IconCreate) : IconCreate;

export default IconCreate;
