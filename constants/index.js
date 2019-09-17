const UtilFunctions = require("../utils")
const Constants = {};
let PORT;
Constants.Port = () => {
    if (UtilFunctions.envCheck()) {
        PORT = process.env.PORT
    } else {
        PORT = 5000
    }
    return PORT
}


module.exports = Constants;