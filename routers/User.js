const express = require('express')
const router = express.Router()
const {getAllUsers,createUser,getUserById,deleteUserById} =require('../controllers/User')
router.get('/',getAllUsers)
router.post('/',createUser)
router.get('/:id',getUserById)
router.delete('/:id',deleteUserById)
module.exports = router;