const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async users(req, res) {
        const users = await User.find();

        return res.json(users);
    }
}