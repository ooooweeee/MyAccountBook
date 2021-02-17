/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconList = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 768a42.667 42.667 0 0 1 0 85.333H298.667a42.667 42.667 0 0 1 0-85.333H896z m0-298.667a42.667 42.667 0 0 1 0 85.334H298.667a42.667 42.667 0 0 1 0-85.334H896z m0-298.666A42.667 42.667 0 0 1 896 256H298.667a42.667 42.667 0 1 1 0-85.333H896z m-810.667 0h85.334V256H85.333v-85.333z m0 298.666h85.334v85.334H85.333v-85.334z m0 298.667h85.334v85.333H85.333V768z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconList.defaultProps = {
  size: 18,
};

IconList = React.memo ? React.memo(IconList) : IconList;

export default IconList;
