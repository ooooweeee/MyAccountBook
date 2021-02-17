/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCalendar = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M213.333 938.667a128 128 0 0 1-128-128v-512a128 128 0 0 1 128-128H256V128a42.667 42.667 0 1 1 85.333 0v42.667h341.334V128A42.667 42.667 0 0 1 768 128v42.667h42.667a128 128 0 0 1 128 128v512a128 128 0 0 1-128 128H213.333z m128-213.334H170.667v85.334a42.667 42.667 0 0 0 42.666 42.666h128v-128z m256 0H426.667v128h170.666v-128z m256 0H682.667v128h128a42.667 42.667 0 0 0 42.666-42.666v-85.334zM341.333 512H170.667v128h170.666V512z m256 0H426.667v128h170.666V512z m256 0H682.667v128h170.666V512zM256 256h-42.667a42.667 42.667 0 0 0-42.666 42.667v128h682.666v-128A42.667 42.667 0 0 0 810.667 256H768v42.667a42.667 42.667 0 0 1-85.333 0V256H341.333v42.667a42.667 42.667 0 1 1-85.333 0V256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCalendar.defaultProps = {
  size: 18,
};

IconCalendar = React.memo ? React.memo(IconCalendar) : IconCalendar;

export default IconCalendar;
