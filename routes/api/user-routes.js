const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// set up POST and DELETE at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend);

module.exports = router;