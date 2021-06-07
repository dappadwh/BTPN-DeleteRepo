var {Router} = require('express')
var UserDataService = require('../services/deleteUserDataService')
const commonResponse = require('../utils/commonResponse')
 
const userDataService = new UserDataService()
const UserDataRoute = Router()
    .delete('/:ID', async(req, res) => {
        try {
            let data = await userDataService.deleteByID(req.params.ID)
            res.json(commonResponse('success',req.params.ID,`Data with ID ${req.params.ID} has been deleted`))
        } catch (error) {
            res.json(commonResponse('error',null, error))
        }
    })

module.exports = UserDataRoute;