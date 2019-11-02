import React from 'react';
import { Slider } from './Slider';
import { Services } from './Services';
import { Blogs } from './Blogs';
import { Callback } from './Callback';
import { Facts } from './Facts';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Slider />
      <Services />
      <Blogs />>
      <Facts />
      <Callback />
    </div>
  );
}

HomePage.displayName = 'HomePage';
