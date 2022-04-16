import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { FeedItemGroup } from 'lib/models';

describe('Home', () => {
  it('renders a heading', () => {
    // arrange
    const feedItemGroups: FeedItemGroup[] = [];
    // act
    render(<Home feedItemGroups={feedItemGroups} />);

    const heading = screen.getByRole('heading', {
      name: /Ukrán válsághelyzet/i,
    });

    // assert
    expect(heading).toBeInTheDocument();
  });
});
