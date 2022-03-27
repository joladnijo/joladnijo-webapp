import { render, screen } from '@testing-library/react';
import { AidCenter, AidCenterCallRequiredEnum } from 'backend-sdk/models';
import { defaultAidCenter } from 'lib/mocks/defaultAidCenter';
import AidCenterInfoPage from '@/pages/aid-centers/[slug]';

describe('AidCenter Info page', () => {
  it('Renders required text when call is required', () => {
    // arrange
    const props: AidCenter = { ...defaultAidCenter, callRequired: AidCenterCallRequiredEnum.Required };

    // act
    render(<AidCenterInfoPage {...props} />);

    // assert
    const requiredText = screen.getByText('Adományküldés előtt kérjük hívja fel a gyűjtőpontot!');
    expect(requiredText).toBeInTheDocument();
  });

  it('Hides required text when call is required', () => {
    // arrange
    const props: AidCenter = { ...defaultAidCenter, callRequired: AidCenterCallRequiredEnum.Denied };

    // act
    render(<AidCenterInfoPage {...props} />);

    // assert
    const requiredText = screen.queryByText('Adományküldés előtt kérjük hívja fel a gyűjtőpontot!');
    expect(requiredText).toBeNull();
  });
});
