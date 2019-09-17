const UtilsFunctions = {};



UtilsFunctions.envCheck = () => {
    if (process.env.NODE_ENV === "production") {
        return true;
    }
    return false;
};

module.exports = UtilsFunctions;