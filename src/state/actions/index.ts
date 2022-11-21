import { ActionType } from "../action-types";

interface AddExpense {
  type: ActionType.ADD_EXPENSE;
  payload: number;
}

interface AddIncome {
  type: ActionType.ADD_INCOME;
  payload: number;
}

export type Action = AddExpense | AddIncome;
