const router = require('express').Router();

const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createPublication } = require('../services/publications');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
    const publ = {
        title: req.body.title,
        technique: req.body.technique,
        picture: req.body.picture,
        certificate: req.body.certificate,
        owner: req.session.user._id
    };

    try {
        await createPublication(publ);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Page', data: publ, errors });
    }
});

module.exports = router;
