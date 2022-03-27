import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home environmentName="test" />);

    const heading = screen.getByRole('heading', {
      name: /Jól adni jó/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
