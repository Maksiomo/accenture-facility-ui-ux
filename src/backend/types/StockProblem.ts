import { IProblem } from "./IProblem";

export interface StockProblem {
  objectId: string;
  averageDangerTier: number;
  problems: {
    problem: IProblem;
    date: string;
  }[];
}
