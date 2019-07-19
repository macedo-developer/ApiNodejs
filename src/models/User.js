const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: string,
        required: true
    },
    username: {
        type: string,
        required: true,
    },
    password: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    creaedAt: {
        trype: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);