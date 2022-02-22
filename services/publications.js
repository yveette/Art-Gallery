const Publication = require('../models/Publication');
const User = require('../models/User');

async function createPublication(publ) {
    const result = new Publication(publ);
    await result.save();
}


module.exports = {
    createPublication,
};