/* eslint-disable */

import React from 'react';

import IconEat from './IconEat';
import IconTravel from './IconTravel';
import IconPlay from './IconPlay';
import IconStudy from './IconStudy';
import IconLooks from './IconLooks';
import IconBrackets from './IconBrackets';
import IconCreate from './IconCreate';
import IconMoney from './IconMoney';
import IconCalendar from './IconCalendar';
import IconList from './IconList';
import IconMore from './IconMore';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-eat':
      return <IconEat key="1" {...rest} />;
    case 'icon-travel':
      return <IconTravel key="2" {...rest} />;
    case 'icon-play':
      return <IconPlay key="3" {...rest} />;
    case 'icon-study':
      return <IconStudy key="4" {...rest} />;
    case 'icon-looks':
      return <IconLooks key="5" {...rest} />;
    case 'icon-brackets':
      return <IconBrackets key="6" {...rest} />;
    case 'icon-create':
      return <IconCreate key="7" {...rest} />;
    case 'icon-money':
      return <IconMoney key="8" {...rest} />;
    case 'icon-calendar':
      return <IconCalendar key="9" {...rest} />;
    case 'icon-list':
      return <IconList key="10" {...rest} />;
    case 'icon-more':
      return <IconMore key="11" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
