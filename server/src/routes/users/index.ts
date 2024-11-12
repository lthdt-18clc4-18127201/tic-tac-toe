import express from 'express';
import {
    deleteAUser,
    getAllUSers,
    getUserInfo,
} from './user.controller';
import {
    authenticateJWT
} from '../../middlewares/auth.middleware';
const router = express.Router();

router.delete('/:id', authenticateJWT, deleteAUser);
router.get('/profile', authenticateJWT, getUserInfo);
router.get('/', getAllUSers);

export default router;

