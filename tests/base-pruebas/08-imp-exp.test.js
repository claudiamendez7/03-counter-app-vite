import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por id', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id:1, name: 'Batman', owner:'DC'});

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();

    });

    // Tarea:
    // Retornar un arreglo con los héroes de DC ===3
    // Usar toEqual al arreglo filtrado

    // Retornar un arreglo con los héroes de Marvel ===2
    
    test('getHeroesByOwner debe retornar héroes de DC', () => {

        const owner = 'DC'; 
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC'},
            { id: 4, name: 'Flash', owner: 'DC'}
        ]);

        expect (heroes).toEqual(heroes.filter((heroe)=> heroe.owner === owner ));

    });

    test('getHeroesByOwner debe retornar héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect (heroes).toEqual(heroes.filter((heroe)=> heroe.owner === owner ));
    });

});