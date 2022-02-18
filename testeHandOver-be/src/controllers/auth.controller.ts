import bcrypt from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepositories";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";

export const authenticate = async (req, res) => {
  try {
    const { name, password } = req.body;
    const userRepositories = getCustomRepository(UserRepository);
    const user = await userRepositories.findOne({ name });

    if (!user) return res.status(400).send({ error: "User not found" });

    if (password !== user.password)
      return res.status(400).send({ error: "Invalid username or password" });

    const token = jwt.sign(
      {
        id: user.id,
      },
      authConfig.secret,
      {
        expiresIn: 86400,
      }
    );
    user.password = undefined;
    res.send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
};

export const validate = async (req, res) => {
  try {
    if (!req.body.token) {
      res.status(400).json({ message: "Nessário informar o token" });
    }

    const decode = await jwt.decode(req.body.token);

    res.status(200).send(decode);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const refreshToken = async (req, res) => {
  try {
    if (!req.body.token) {
      res.status(400).json({ message: "Nessário informar o token" });
    }

    const decode = await jwt.decode(req.body.token);

    const token = jwt.sign(
      { id: decode.id, name: decode.name },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({ token });
  } catch (e) {
    res.status(500).send(e);
  }
};
