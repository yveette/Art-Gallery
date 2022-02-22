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


async function sharePubl(publId, userId) {
    const publ = await Publication.findById(publId);

    if (publ.shared.includes(userId)) {
        throw new Error('User is already shared this publication!');
    }

    publ.shared.push(userId);
    await publ.save();
}

async function updatePubl(id, publ) {
    const existing = await Publication.findById(id);

    existing.title = publ.title;
    existing.technique = publ.technique;
    existing.picture = publ.picture;
    existing.certificate = publ.certificate;

    await existing.save();
}

async function deleteById(id) {
    await Publication.findByIdAndDelete(id);
}

module.exports = {
    createPublication,
    getAll,
    getPublById,
    sharePubl,
    updatePubl,
    deleteById
};