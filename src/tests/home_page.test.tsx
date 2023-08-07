import Home from '@/app/page';
import { render } from '@testing-library/react';
import expect from '../../setupTests';
test('renderiza el componente Home con el estilo principal', () => {
  const { getByText } = render(<Home />);
  const mainElement = getByText(/Conectar con una billetera/i);

  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveClass('main__h1'); // Asegura que el elemento tenga la clase CSS 'main'
});
