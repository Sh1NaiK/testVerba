import { HttpError } from "../utils/HttpError";
import { Request, Response } from "express";
import { saveInfo } from "../services/data";
import axios from "axios";

export const getData = async (req: Request, res: Response) => {
  try {
    const data = await axios.get("https://randomuser.me/api/");
    await saveInfo(data.data.results);
    res.status(200).json(data.data.results);
  } catch (err) {
    if (err instanceof HttpError) {
      const httpErr = err as HttpError;
      res
        .status(httpErr.httpCode)
        .json({ status: "error", data: { message: httpErr.message } });
      return;
    } else {
      const error = err as Error;
      res
        .status(500)
        .json({ status: "error", data: { message: error.message } });
      return;
    }
  }
};
