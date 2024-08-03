const User = require('../models/users/clients');
module.exports = class Order {
    static getUser = async (req, res) => {
        try {
            const user = await User.find()
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: 'not found' })
        }
    }
    static createUser = async (req, res) => {
        const clientData = req.body;

        try {
            console.log(req.body);
            console.log(User);


            await User.create([clientData]);
            res.status(201).json({ clientData });
        } catch (error) {
            res.status(400).json({ message: error.message });
            console.log(error.message)
        }
    };
}