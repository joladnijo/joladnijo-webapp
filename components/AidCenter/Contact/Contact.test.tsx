import { render, screen } from '@testing-library/react';
import { defaultAidCenter } from 'lib/mocks/defaultAidCenter';
import Contact from '../Contact';

describe('components/AidCenter/Contact', () => {
  it('renders Contact', () => {
    render(<Contact {...defaultAidCenter} />);

    const heading = screen.getByText(/Kapcsolat/i);

    expect(heading).toBeInTheDocument();
  });
});
