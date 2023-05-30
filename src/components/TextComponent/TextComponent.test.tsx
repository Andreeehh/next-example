import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const p = screen.getByText(/children/i);
    expect(p).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
});
