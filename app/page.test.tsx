import { render, screen } from '@testing-library/react';
import Home from './page';

test('renders heading', () => {
  render(<Home/>);
  expect(screen.getByText('Welcome to Vocab App')).toBeInTheDocument();
});
