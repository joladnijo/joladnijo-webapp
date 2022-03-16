import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    backendApiBaseUrl: 'http://example.test',
  },
}));

describe('Home', () => {
  beforeEach(() => {});
  it('renders a heading', () => {
    render(<Home environmentName="test" slug="test-slug" />);

    const heading = screen.getByRole('heading', {
      name: /Jól adni jó. Teszteljük a backend hívást/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
