import { IProblem } from "./IProblem";

export interface StockProblem {
  objectId: string;
  problems: {
    problem: IProblem;
    date: string;
  }[];
}
