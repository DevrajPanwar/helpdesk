const User_Model = require("../models/schema");
const messageBundle = require('../../locales/eng.json');
const login = async(userObject)=>{
    let doc = await find(userObject.facebookid);
    if(doc && doc.name){
        return {message:messageBundle['facebook.user.login'],doc};
    }
    else{
       doc =   await User_Model.create(userObject);
       return {message: messageBundle['facebook.user.register'],doc};
    }

}
const find = async (facebookId)=>{
    return await User_Model.findOne({fbID: facebookId})
}
module.exports = {login};