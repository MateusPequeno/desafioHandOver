import bcrypt from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepositories";
import { Request, Response } from "express";

export const createUser = async function (
  request: Request,
  response: Response
) {
  const userRepository = getCustomRepository(UserRepository);

  const { name, password, userPermissionLevel } = request.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  request.body.password = encryptedPassword;
  try {
    const user = userRepository.create({
      name,
      password,
      userPermissionLevel,
    });
    await userRepository.save(user);
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export const getAllUser = async function (
  request: Request,
  response: Response
) {
  const userRepository = getCustomRepository(UserRepository);
  try {
    return response.json(await userRepository.find());
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export const getSingleUser = async function (
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const userRepository = getCustomRepository(UserRepository);
  try {
    const user = await userRepository.findOne(id);
    return response.json(user);
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};

export const deleteUser = async function (
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const userRepository = getCustomRepository(UserRepository);
  try {
    const user = await userRepository.findOne(id);
    await userRepository.delete(user);
    return response.send(
      `❌ User with the id of ${id}, has been removed from the database!`
    );
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};

export const updateUser = async function (
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const userRepository = getCustomRepository(UserRepository);
  try {
    userRepository.update(id, request.body);
    response.send(
      `✔ User with the id of ${id}, has been updated in the database!`
    );
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};
