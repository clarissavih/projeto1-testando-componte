import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from './Button';

test('deve disparar o evento ao clicar no botão', () => {
  const handleClick = jest.fn();  // Mock da função de click

  // Renderiza o componente e recupera o botão
  const { getByText } = render(<ButtonComponent onClick={handleClick} />);
  
  // Simula o clique no botão
  fireEvent.click(getByText('Clique aqui'));
  
  // Verifica se a função de click foi chamada
  expect(handleClick).toHaveBeenCalledTimes(1);
});
