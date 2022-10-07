const output = require("@output");


const handler = async (event) => {
  
  let lista = [100,200,300,400,500]
  let {httpMethod:method} = event
  
  switch(method){
     case "GET":
       return output(lista)

     case "POST":
       lista.push(600)
       return output(lista)
    
     default:
       return output({})
  }
}

module.exports = {
  handler
}

