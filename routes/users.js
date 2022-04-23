import express from "express";
import {createUser, findUser, deleteUser, updateUser} from '../controllers/users.js'

// initialise our router
const router = express.Router();


// all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});
// send data from the frontend to the server

router.post('/', createUser);
// find user by id

router.get('/:id', findUser)
// delete user
router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

// export the router so we can make use of it
export default router;