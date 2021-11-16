import { Note, Resource } from "../models/Resource";
import { isArrayOfType } from "./isArrayOfType";
import { isOptionalType } from "./isOptionalType";

export const isValidNote = (data: any): data is Note =>
  typeof data === "object" && typeof data.subject === "string" && typeof data.message === "string";

export const isValidResource = (data: any): data is Resource =>
  typeof data === "object" &&
  typeof data.name === "string" &&
  typeof data.available === "boolean" &&
  typeof data.count === "number" &&
  isOptionalType(data.owner, "string") &&
  (!data.notes || isArrayOfType(data.notes, isValidNote));
