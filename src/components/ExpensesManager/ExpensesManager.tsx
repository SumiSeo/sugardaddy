import styled from "styled-components";

const Select = styled.select`
  font-size: 2rem;
`;

const Option = styled.option`
  font-size: 1rem;
`;

const ExpensesManager = (): JSX.Element => {
  return (
    <div>
      <form>
        <select name="choice">
          <option value="banana">바나나</option>
          <option value="apple">사과</option>
          <option value="orange">오렌지</option>
        </select>
        <Select>
          <Option>hi</Option>
          <Option>hi</Option>
          <Option>hi</Option>
        </Select>
        <label>Amount </label>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ExpensesManager;
