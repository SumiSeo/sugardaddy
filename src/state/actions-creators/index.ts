import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const expensesRepositories = (
  consumeType: string,
  consumeAmount: number
) => {
  return (dispatch: Dispatch<Action>) => {
    if (consumeType === ActionType.ADD_EXPENSE) {
      dispatch({
        type: ActionType.ADD_EXPENSE,
        payload: consumeAmount,
      });
    }
    if (consumeType === ActionType.ADD_INCOME) {
      dispatch({
        type: ActionType.ADD_INCOME,
        payload: consumeAmount,
      });
    }
  };
};
