const mongoose = require("../connect");
const {Schema, SchemaTypes} = mongoose;
const {USER_SCHEMA} = require('../../utils/config').SCHEMAS;
const schema = new Schema({
    fbID:{type:SchemaTypes.String, required:true, unique:true},
    emailID:{type:SchemaTypes.String, required:true, unique:true},
    userName:{type:SchemaTypes.String, required:true},
    accessToken:{type:SchemaTypes.String}
})
const User_Model = mongoose.model(USER_SCHEMA,schema);
module.exports = User_Model;