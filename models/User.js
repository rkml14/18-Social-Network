const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: [{type: String, unique: true, required: true, trim: true }],
        email: [{type: String, required: true, unique: true, match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']}],
        thoughts: [{type: Schema.Types.thoughtID, ref: 'thought'}],
        friends: [{type: Schema.Types.userID, ref: 'user'}]
    },
    {
        toJason: {
        virtuals: true,
    },
    id: false,
    }
);


userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;