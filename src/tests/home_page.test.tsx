import Home from '@/app/page';
import { render } from '@testing-library/react';
import expect from '../../setupTests';
test('Renders the Home component with the main style', () => {
  const { getByText } = render(<Home />);
  const mainElement = getByText(/Conectar con una billetera/i);

  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveClass('main__h1');
});
