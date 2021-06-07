const Collection = require("../database/connection")

class UserDataService{
    
    async deleteByID(id){
        const user = await Collection('userData')
        return user.remove({id: id})
    }
}

module.exports = UserDataService;