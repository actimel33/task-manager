const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res
            .status(201)
            .send(user)
    } catch (err) {
        res
            .status(400)
            .send(err)
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res
            .status(200)
            .send(users)
    } catch (err) {
        res
            .status(500)
            .send()
    }
});

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (err) {
        res
            .status(500)
            .send();
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res
                .status(404)
                .send();
        }
        res
            .stat(200)
            .send(user);
    } catch (err) {
        res
            .status(500)
            .send();
    }
});

module.exports = router;