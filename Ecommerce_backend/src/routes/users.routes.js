const { Router } = require ('express');
const router = Router();

const {getUsers, createUser, getUser, upDateUser, deleteUser} = 
require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser);
    
 router.route('/:id')
     .get(getUser)
    .put(upDateUser)
   .delete(deleteUser)


module.exports = router; 