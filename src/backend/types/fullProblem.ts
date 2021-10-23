import { IProblem } from "./IProblem";

export interface FullProblem {
  objectId: string;
  averageDangerTier: number;
  problems: {
    problem: IProblem;
    date: string;
  }[];
}
