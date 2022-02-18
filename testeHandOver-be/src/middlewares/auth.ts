import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ error: "No JWT Token Provided" });

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ error: "Token JWT error" });
  }
  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });
  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) return res.status(401).send({ error: "Invalid JWT Token" });
      req.userId = decoded.id;
      return next();
    });
  } catch (e) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }
};
