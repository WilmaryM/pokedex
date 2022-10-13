
    const filterPokemon = async() => {
    try{
        const Response = await  fetch('https://pokeapi.co/api/v2/pokemon')
            console.log(Response);
        // si es correcta
        if(Response.status === 200){
         const data = await  Response.json();

         let pokemon = '';
        data.results.forEach(pokemon => {
            console.log(pokemon.name);
        });




        }else if(Response.status === 401){
            console.log('no ha sido ejecutada porque carece de credenciales válidas de autenticación')
        }else if(Response.status === 404){
            console.log('No existe ese dato')
        }
        else{
            console.log('Error no identificado')
        }
        
    }catch (error) {
    console.log(error);
  }

    }

filterPokemon()
