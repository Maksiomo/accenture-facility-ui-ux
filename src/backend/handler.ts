import { NextFunction, Request, Response } from "express";

export default function handler(
  handler: (options: Request) => Promise<unknown>
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await handler(req);
      const response = { data };
      res.send(response);
    } catch (e) {
      next(e);
    }
  };
}
