const express=require('express');
const { addInfo,getData,getUserById,updateUser,deleteUserData } = require('../controllers/information');
const router = express.Router();





router.post('/addinfo',addInfo)
router.get('/getdata',getData)
router.get('/getuser/:id',getUserById)
router.patch('/updateuser/:id',updateUser)
router.delete('/deleteData/:id',deleteUserData)
module.exports = router