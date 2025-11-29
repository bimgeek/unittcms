import express from 'express';
const router = express.Router();
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import defineUser from '../../models/users.js';
import { roles, defaultDangerKey } from './authSettings.js';

export default function (sequelize) {
  const User = defineUser(sequelize, DataTypes);
  const secretKey = process.env.SECRET_KEY || defaultDangerKey;

  router.post('/signup', async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const userCount = await User.count();
      const initialRole =
        userCount > 0
          ? roles.findIndex((entry) => entry.uid === 'user')
          : roles.findIndex((entry) => entry.uid === 'administrator');

      const user = await User.create({
        email,
        password: hashedPassword,
        username: username,
        role: initialRole,
      });

      const accessToken = jwt.sign({ userId: user.id }, secretKey, {
        expiresIn: '24h',
      });
      const expiresAt = Date.now() + 3600 * 1000 * 24; // expire date(ms)

      // Return user without password
      const userResponse = {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
        avatarPath: user.avatarPath,
        locale: user.locale || 'en',
      };

      res.status(200).json({ access_token: accessToken, expires_at: expiresAt, user: userResponse });
    } catch (error) {
      console.error(error);
      res.status(500).send('Sign up failed');
    }
  });

  return router;
}
