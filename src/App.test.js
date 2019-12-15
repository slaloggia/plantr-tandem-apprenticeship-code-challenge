import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
// import PlantSchedule from './plantSchedule';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


test('renders Plantr heading', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Your Plantr Watering Schedule/i);
  expect(header).toBeInTheDocument();
});
