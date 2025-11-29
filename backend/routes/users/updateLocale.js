import express from 'express';
import { DataTypes } from 'sequelize';
import defineUser from '../../models/users.js';
import authMiddleware from '../../middleware/auth.js';
const router = express.Router();

export default function (sequelize) {
  const { verifySignedIn } = authMiddleware(sequelize);
  const User = defineUser(sequelize, DataTypes);

  router.put('/locale', verifySignedIn, async (req, res) => {
    try {
      const userId = req.userId;
      const { locale } = req.body;

      // Validate locale
      const validLocales = ['en', 'ja', 'pt-BR'];
      if (!locale || !validLocales.includes(locale)) {
        return res.status(400).send('Invalid locale');
      }

      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }

      await user.update({ locale });

      // Return updated user without password
      const updatedUser = await User.findByPk(userId, {
        attributes: ['id', 'email', 'username', 'role', 'avatarPath', 'locale'],
      });

      res.json({ user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
}
