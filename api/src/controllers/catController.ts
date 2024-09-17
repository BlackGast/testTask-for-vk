import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Like } from '../entities/Like';
import { User } from '../entities/User';

export const listLikes = async (req: Request, res: Response) => {
  const likes = await getRepository(Like).find();
  res.json({ data: likes });
};

export const newLike = async (req: Request, res: Response) => {
  try {
    const like = await getRepository(Like).save(req.body);
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: 'Ошибка при добавлении лайка' });
  }
};

export const dropLike = async (req: Request, res: Response) => {
  const result = await getRepository(Like).delete({ cat_id: req.params.cat_id });
  if (result.affected) {
    res.status(200).send();
  } else {
    res.status(404).json({ error: 'Лайк не найден' });
  }
};

export const newUser = async (req: Request, res: Response) => {
  try {
    const user = await getRepository(User).save(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Ошибка при регистрации пользователя' });
  }
};
