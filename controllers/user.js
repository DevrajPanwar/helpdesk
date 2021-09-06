const userOperations= require('../db/services/operations');
const {SUCCESS, SERVER_ERROR} = require('../utils/config').CODES;
const messageBundle = require('../locales/eng.json');
module.exports = {
    async facebookLogin(request, response){
        try{
        console.log('BODY ::::::: ', request.body);
        const userObject = request.body;
        const user = await userOperations.login(userObject);
        console.log('User ', user);
        response.status(SUCCESS).json({...user});
        }
        catch(err){
            response.status(SERVER_ERROR).json({message:messageBundle['facebook.user.loginfails']})
            console.log("error in user ",err);
        }

    },
    dashboard(request,response){
        console.log("in dashboard");
        response.render("dashboard");
    }



}