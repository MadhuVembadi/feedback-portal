const exp = require('express');
const callRecordApp = exp.Router();
const expressAsyncHandler = require('express-async-handler');
require('dotenv').config();
callRecordApp.post('/notificationClient',expressAsyncHandler(async(request,response) => {
    console.log(request);
    response.send(request.body);
}))
module.exports = callRecordApp;