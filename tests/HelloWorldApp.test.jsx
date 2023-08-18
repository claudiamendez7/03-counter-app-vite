import { render } from "@testing-library/react";
import { HelloWorldApp } from "../src/HelloWorldApp";


describe('Pruebas en <HelloWorldApp/>', () => {

    test('Debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Claus';
        const {container} = render(<HelloWorldApp title={title}/>);

        expect (container).toMatchSnapshot();

    });

    test('Debe mostrar el titulo de un h1', () => {

        const title = 'Hola, Soy Claus';
        const {container, getByText} = render(<HelloWorldApp title={title}/>);

        expect (getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    });

});