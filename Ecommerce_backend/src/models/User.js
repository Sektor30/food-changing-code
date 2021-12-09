const { Schema, model } = require ('mongoose');
// const bcrypt =require ('bcryptjs')

const UserSchema = new Schema ({
    email: {
        type: String,
        required:true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required:true,
    },
    role: {
        type: String,
        required:true,
        trim: true
        // type: Schema.Types.ObjectId,
        // ref: 'Role',
    },
}, {
    timestamps: true,
    versionKey: false
});


module.exports = model('User', UserSchema);