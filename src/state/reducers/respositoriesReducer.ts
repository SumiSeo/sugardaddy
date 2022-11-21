import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  amount: number[];
  expense: number[];
  income: number[];
}
const initialState = {
  amount: [],
  expense: [],
  income: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.ADD_EXPENSE:
      return {
        expense: [...state.expense, action.payload],
        income: [...state.income],
        amount: [...state.amount],
      };
    case ActionType.ADD_INCOME:
      return {
        expense: [...state.expense],
        income: [...state.income, action.payload],
        amount: [...state.amount],
      };
    default:
      return state;
  }
};
export default reducer;
