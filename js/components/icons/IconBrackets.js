/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBrackets = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M532.159 135.744c-3.05-76.3-144.327-159.768-107.115-122.556 37.211 37.211 51.827 122.556 51.827 122.556v752.71s-14.604 85.147-51.816 122.359c-37.211 37.211 104.055-46.06 107.104-122.359V138.519c0.032-0.882 0.039-1.798 0-2.775z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBrackets.defaultProps = {
  size: 18,
};

IconBrackets = React.memo ? React.memo(IconBrackets) : IconBrackets;

export default IconBrackets;
