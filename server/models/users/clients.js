const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    market_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    agent_id: {
        type: Number,
        required: true
    },
    visiting_time: {
        type: Date,
        default: Date.now()
    },
    delivering_time: {
        type: String,
        default: 'Not yet'
    },
    loan: {
        type: Number,
        default: 0
    },
    is_active: {
        type: Boolean,
        default: false
    },




});

// UserSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

module.exports = mongoose.model('User', UserSchema);
