import { getCustomRepository } from "typeorm";
import { PanelsRepository } from "../repositories/PanelsRepositories";
import { Request, Response } from "express";

export const getPanels = async function (request: Request, response: Response) {
  const panelsRepository = getCustomRepository(PanelsRepository);
  try {
    return response.json(await panelsRepository.find());
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export const createPanels = async function (
  request: Request,
  response: Response
) {
  const { name, prices, stockQuantity } = request.body;

  const panelsRepository = getCustomRepository(PanelsRepository);
  try {
    const panels = panelsRepository.create({
      name,
      prices,
      stockQuantity,
    });
    await panelsRepository.save(panels);
    return response.json(panels);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export const getSinglePanels = async function (
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const panelsRepository = getCustomRepository(PanelsRepository);
  try {
    const panels = await panelsRepository.findOne(id);
    return response.json(panels);
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};

export const deletePanels = async function (
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const panelsRepository = getCustomRepository(PanelsRepository);
  try {
    const panels = await panelsRepository.findOne(id);
    await panelsRepository.delete(panels);
    return response.send(
      `❌ Panels with the id of ${id}, has been removed from the database!`
    );
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};

export const updatePanels = async function (
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const panelsRepository = getCustomRepository(PanelsRepository);
  try {
    panelsRepository.update(id, request.body);
    response.send(
      `✔ Panels with the id of ${id}, has been updated in the database!`
    );
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};
