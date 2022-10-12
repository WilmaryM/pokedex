
    const filterPokemon = async() => {
    try{
        const Response = await  fetch('https://pokeapi.co/api/v2/')
            console.log(Response);
        // si es correcta
        if(Response.status === 200){
         const data = await  Response.json();
        console.log(data.)
        }else if(Response.status === 401){
            console.log('no ha sido ejecutada porque carece de credenciales válidas de autenticación')
        }else if(Response.status === 404){
            console.log('No esiste ese dato')
        }
        
    }catch (error) {
    console.log(error);
  }

    }

filterPokemon()
