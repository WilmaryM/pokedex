
// si funciona correctamente la api
const options = {
     method: 'GET',
     Headers:{
}
};
fetch('https://pokeapi.co/api/v2/', options)
    .then(res =>  {
        return res.json();
    })
    .then(res => console.log(res))
    .catch(error => console.log('Error'))




    // prueva
    
const form = document.querySelector('#formulario_busqueda')
 const input = document.querySelector("#name")

    function consultaPokemon(id, num){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
        res.json()
            .then(function (pokemon) {
             crearPokemon(pokemon, num)
            });
    });
    };
    consultaPokemon(4)


    function busarPokeones() {
        let buscar = Math.round(Math.random() * 150)
        
        consultaPokemon(buscar, 1)
    }
    busarPokeones()

    function crearPokemon(pokemon, num) {
        let item = busqueda.querySelector(`name${num}`)
    }
crearPokemon(5)

