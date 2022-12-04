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
            <option value="1">Expense</option>
            <option value="2">Income</option>
          </select>
          <select onChange={(e) => setType(e.target.value)} name="choice">
            <option value="1">Transport</option>
            <option value="2">Grocery</option>
            <option value="2">Hang out</option>
            <option value="2">Facture</option>
          </select>
          <input onChange={(e) => setExpense(e.target.value)} type="text" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default ExpensesManager;
