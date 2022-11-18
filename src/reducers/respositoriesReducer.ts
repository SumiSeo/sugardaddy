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
        //I have to subtract expense money from sum
        expense: action.payload,
        income: [],
        amount: [],
      };
    case ActionType.ADD_INCOME:
      return {
        //I have to add expense money from sum
        expense: action.payload,
        income: [],
        amount: [],
      };
    default:
      return state;
  }
};
export default reducer;
