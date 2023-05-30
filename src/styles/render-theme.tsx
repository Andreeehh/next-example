import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { RenderResult, render } from '@testing-library/react';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
