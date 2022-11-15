interface RepositoriesState {
  data: number[];
}
const initialState = {
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: any
): RepositoriesState => {
  switch (action.type) {
    case "Expense":
      return {
        //I have to subtract expense money from sum
        data: [],
      };
    case "Income":
      return {
        //I have to add expense money from sum
        data: [],
      };
    default:
      return state;
  }
};
export default reducer;
