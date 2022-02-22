const Publication = require('../models/Publication');
const User = require('../models/User');

async function createPublication(publ) {
    const result = new Publication(publ);
    await result.save();

    //add created id to user 
    const user = await User.findById(result.owner);
    user.publications.push(result._id);
    await user.save();
}

async function getAll() {
    return Publication.find({}).lean();
}

async function getPublById(id) {
    return Publication.findById(id).populate('owner', 'username').lean();
}


module.exports = {
    createPublication,
    getAll,
    getPublById,
};