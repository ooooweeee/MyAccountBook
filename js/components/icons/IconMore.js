/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMore = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 426.667a85.333 85.333 0 1 1 0 170.666 85.333 85.333 0 0 1 0-170.666z m-298.667 0a85.333 85.333 0 1 1 0 170.666 85.333 85.333 0 0 1 0-170.666z m597.334 0a85.333 85.333 0 1 1 0 170.666 85.333 85.333 0 0 1 0-170.666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMore.defaultProps = {
  size: 18,
};

IconMore = React.memo ? React.memo(IconMore) : IconMore;

export default IconMore;
