import styled from "styled-components";
import React, { useState } from "react";

const Select = styled.select`
  font-size: 2rem;
`;

const ExpensesManager = (): JSX.Element => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select name="choice">
          <option value="transport">Transport</option>
          <option value="grocery">Grocery</option>
          <option value="shopping">Shopping</option>
        </select>
        <label>Amount</label>
        <input onChange={(e) => console.log(e.target.value)} type="text" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ExpensesManager;
