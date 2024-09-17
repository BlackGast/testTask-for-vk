import { Router } from 'express';
import { listLikes, newLike, dropLike, newUser } from '../controllers/catController';

const router = Router();

router.get('/likes', listLikes);

router.post('/likes', newLike);

router.delete('/likes/:cat_id', dropLike);

router.post('/user', newUser);

export default router;
