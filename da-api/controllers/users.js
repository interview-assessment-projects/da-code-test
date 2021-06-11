const mongoose = require('mongoose');
const User = mongoose.model('senders'); // mongo collection name "senders"

// POST: /addUser - adds a new user to list
const addUser = async (req, res) => {
    const userMessageDetails = new Collection({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    User
        .create(userMessageDetails)
        .then(userMessageDetails => {
            if (!userMessageDetails) {
                return res
                    .status(404)
                    .send({
                        message: "User not added with name: " + req.body.name
                    });
            }
            res.send(userMessageDetails);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "User not added with name: " + req.body.name
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
};

module.exports = {
    addUser
}
