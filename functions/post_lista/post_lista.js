const output = require("@output");


const handler = async (event) => {
    let lista = [100, 200, 300, 400, 500]
    let {
        httpMethod:method,
        queryStringParameters:p
    } = event;

    if (method == "POST") {
        let {item} = p;
        return output(lista[item])
    }

    return output({})
}

module.exports = {
    handler
}