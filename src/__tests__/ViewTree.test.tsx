import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewTree from '../ViewTree';

describe('ViewTree component', () => {

  it('renders without errors', () => {
    render(<ViewTree />);
  });

  it('displays the tree width and depth when buttons are clicked', async () => {
    render(<ViewTree />);

    const widthButton = screen.getByText('Click to watch width of root');
    const depthButton = screen.getByText('Click to watch depth of root');

    fireEvent.click(widthButton);

    await waitFor(() => {
      expect(screen.getByText('30 - 20 - 55 - 18 - 26 - 33 - 80 - 10 - 25 - 27 - 32 - 43 - 71 - 263 - 11 - 62 - 72 - 90')).toBeInTheDocument();
    });

    fireEvent.click(depthButton);

    await waitFor(() => {
      expect(screen.getByText('30 - 20 - 18 - 10 - 11 - 26 - 25 - 27 - 55 - 33 - 32 - 43 - 80 - 71 - 62 - 72 - 263 - 90')).toBeInTheDocument();
    });
  });


  it('displays a node path when searching for a node', async () => {
    const { container } = render(<ViewTree />);

    const input = container.querySelector('#searchInput');

    fireEvent.change(input, { target: { value: '10' } });

    await waitFor(() => {
      expect(container.querySelector('.container-path')).toHaveTextContent('This was the route to get to the node:30 - 20 - 18 - 10');
    });
  });

});
