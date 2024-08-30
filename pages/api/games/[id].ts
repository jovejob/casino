// pages/api/games/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/search/data.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const gameId = Array.isArray(id) ? id[0] : id;

  if (!gameId) {
    return res.status(400).json({ message: 'Bad Request: Missing ID' });
  }

  const game = database.find((game) => game.id === gameId);

  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }

  res.status(200).json(game);
};

export default handler;
