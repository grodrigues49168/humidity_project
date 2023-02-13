import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../src/Screens/Login/index";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Login', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("Login"));
        expect(getByTestId("Login")).toBeTruthy();
        expect(getByTestId("inputEmail")).toBeTruthy();
        expect(getByTestId("inputSenha")).toBeTruthy();
       
    })
})
describe ('Testes do componente Input', () => {
    it('Teste de input email tela Login', () => {
      const { getByTestId} = render(<App />);
      fireEvent.press(getByTestId("Login"));
      fireEvent.press(getByTestId("inputEmail"));
    })
        it('Teste de input Senha tela Login', () => {
        const { getByTestId} = render(<App />);
        fireEvent.press(getByTestId("Login"));
        fireEvent.press(getByTestId("inputSenha"));
        })
})