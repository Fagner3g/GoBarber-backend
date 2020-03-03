import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Fagner Gomes',
    email: 'fagner.gomes@gmail.com',
    password_hash: '23423423',
  });

  return res.json(user);
});

export default routes;
