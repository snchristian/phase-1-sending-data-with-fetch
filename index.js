const personData = {
    name:"Steve",
    email:"steve@steve.com"
}

function submitData(){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(personData),

    }) 
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        document.querySelector('body').innerHTML= object.id
    })
    .catch(function(error){
        alert("Bad Thing please check your code!");
        document.querySelector('body').innerHTML= error.message
    })
}
 