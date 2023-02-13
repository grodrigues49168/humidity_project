import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../src/components/Forms/Cadastrar/index";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes ', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("Cadastro"));
        expect(getByTestId("Cadastro")).toBeTruthy();
        expect(getByTestId("inputTempmx")).toBeTruthy();
        expect(getByTestId("inputTempmn")).toBeTruthy();
        expect(getByTestId("inputQntd")).toBeTruthy();
        expect(getByTestId("inputEmail")).toBeTruthy();
        expect(getByTestId("inputSenha")).toBeTruthy();
       
    })
})
describe ('Testes do componente Input', () => {
    it('Teste de input ', () => {
      const { getByTestId} = render(<App />);
      
      fireEvent.press(getByTestId("inputNome"));
    })
        it('Teste de input ', () => {
        const { getByTestId} = render(<App />);
       
        fireEvent.press(getByTestId("inputTempmx"));
        })
        it('Teste de input ', () => {
            const { getByTestId} = render(<App />);
           
            fireEvent.press(getByTestId("inputTempmn"));
            })
            it('Teste de input Senha tela Login', () => {
                const { getByTestId} = render(<App />);
               
                fireEvent.press(getByTestId("inputQntd"));
                })
                it('Teste de input ', () => {
                    const { getByTestId} = render(<App />);
                   
                    fireEvent.press(getByTestId("inputData"));
                    })
                })
