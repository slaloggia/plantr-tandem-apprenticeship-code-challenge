import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import PlantSchedule from './plantSchedule';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlantSchedule />, div);
});

test('renders date heading', () => {
    const { getByText } = render(<PlantSchedule />);
    const header = getByText(/Monday/i);
    expect(header).toBeInTheDocument();
  });
  
  