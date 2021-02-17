/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTravel = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M683.82 821.84H376.71v21.94c0 12.11-9.82 21.94-21.94 21.94-12.11 0-21.94-9.82-21.94-21.94v-24.13c-51.07-10.44-87.74-55.37-87.75-107.49v-416.8c0-29.09 11.56-56.99 32.12-77.56a109.682 109.682 0 0 1 77.56-32.12h350.99c29.09 0 56.99 11.56 77.56 32.12a109.682 109.682 0 0 1 32.12 77.56v416.8c0 52.12-36.68 97.05-87.74 107.49v24.13c0 12.11-9.83 21.94-21.94 21.94-12.11 0-21.94-9.82-21.94-21.94v-21.94z m87.74-350.99V295.36a65.805 65.805 0 0 0-65.81-65.81H354.77c-17.45 0-34.19 6.93-46.53 19.28a65.815 65.815 0 0 0-19.28 46.53v175.49h482.6z m0 43.88h-482.6v197.43a65.805 65.805 0 0 0 65.81 65.81h350.99c17.45 0 34.19-6.93 46.54-19.27a65.81 65.81 0 0 0 19.27-46.54V514.73zM201.21 383.11c5.82 0 11.4 2.31 15.51 6.42 4.11 4.12 6.42 9.69 6.42 15.51v87.75c0 12.11-9.82 21.94-21.94 21.94-12.11 0-21.94-9.82-21.94-21.94v-87.75c0-5.82 2.31-11.39 6.42-15.51 4.14-4.11 9.71-6.42 15.53-6.42z m658.1 0a21.934 21.934 0 0 1 21.94 21.93v87.75c0 12.11-9.83 21.94-21.94 21.94-12.11 0-21.94-9.82-21.94-21.94v-87.75c0-5.82 2.31-11.39 6.42-15.51 4.12-4.11 9.7-6.42 15.52-6.42zM354.77 646.35c-24.23 0-43.87-19.64-43.87-43.87 0-24.23 19.64-43.87 43.87-43.87 24.23 0 43.87 19.64 43.87 43.87 0 24.23-19.64 43.87-43.87 43.87z m350.99 0c-24.23 0-43.87-19.64-43.87-43.87 0-24.23 19.65-43.87 43.87-43.87 24.23 0 43.87 19.64 43.87 43.87 0 24.23-19.64 43.87-43.87 43.87z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTravel.defaultProps = {
  size: 18,
};

IconTravel = React.memo ? React.memo(IconTravel) : IconTravel;

export default IconTravel;