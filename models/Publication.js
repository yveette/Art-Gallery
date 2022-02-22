const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO add validation

const publicationSchema = new Schema({
    title: { type: String, required: true },
    technique: { type: String, required: true },
    picture: { type: String, required: true },
    certificate: { type: String, enum: ['Yes', 'No'], required: true },
    owner: { type: ObjectId, ref: 'User', required: true },
    shared: { type: [ObjectId], ref: 'User', default: [] }
});

const Publication = model('Publication', publicationSchema);

module.exports = Publication;