import React from 'react';
import { shallow } from 'enzyme';

import UserImage from './UserImage';

describe('UserImage', () => {
  
  it('should render an <img> tag with src and alt-text attributes', () => {
    const src ="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const alt="Here is some alt text"
    const wrapper = shallow(<UserImage src={src} alt={alt}/>);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').prop('src')).toEqual(src);
    expect(wrapper.find('img').prop('alt')).toEqual(alt);
  })
}); 