import renderer from 'react-test-renderer';
import App from '../src/App'



describe('Teste de Snapshot', () => {
    it('Snapshot de App', () => {
        const tela = renderer.create(<App/>).toJSON();
        expect(tela).toMatchSnapshot();
    })
})
