/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'icon-eat' | 'icon-travel' | 'icon-play' | 'icon-study' | 'icon-looks' | 'icon-brackets' | 'icon-create' | 'icon-money' | 'icon-calendar' | 'icon-list' | 'icon-more';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
