import "./ExpensesManager.scss";
import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelectors";

const ExpensesManager = (): JSX.Element => {
  const [type, setType] = useState("");
  const [expense, setExpense] = useState("");
  const { expensesRepositories } = useActions();
  const { amount } = useTypedSelector((state) => state.repositories);
  console.log(amount);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const convertedAmount = parseInt(expense);
    expensesRepositories(type, convertedAmount);
    console.log(expensesRepositories);
  };

  return (
    <div className="expensesManager">
      <div className="expensesManager__column">
        <h1 className="expensesManager__amount">€ 480.2</h1>
      </div>
      <div className="expensesManager__column">
        <form onSubmit={onSubmit}>
          <select onChange={(e) => setType(e.target.value)} name="choice">
            <option value="transport">Transport</option>
            <option value="grocery">Groceryyyy</option>
            <option value="shopping">Shopping</option>
          </select>
          <label>Amount</label>
          <input onChange={(e) => setExpense(e.target.value)} type="text" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default ExpensesManager;
