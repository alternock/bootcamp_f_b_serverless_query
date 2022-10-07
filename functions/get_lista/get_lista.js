const output = require("@output");


const handler = async (event) => {
    let lista = [100, 200, 300, 400, 500]
    let {httpMethod:method} = event;

    if (method == "GET") {
        return output(lista)
    }
   
    return output({})
}

module.exports = {
    handler
}