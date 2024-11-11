import React from 'react';
import Navbar from './index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [(Story: React.FC) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
};

export const LightMode = () => <Navbar isDarkMode={false} onThemeChange={() => {}} />;
export const DarkMode = () => <Navbar isDarkMode={true} onThemeChange={() => {}} />;
