import { Request, Response } from "express";
import { isValidResource } from "../helpers/isValidResource";

export const createResourceController = (req: Request, res: Response) => {
  const { body } = req;

  if (!isValidResource(body)) {
    return res.status(400).json({
      message: "invalid resource input"
    })
  }

  return res.status(201).json({
    message: "the resource was created"
  })
};
