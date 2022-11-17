const ExpensesManager = (): JSX.Element => {
  return (
    <div>
      <form>
        <select name="choice">
          <option value="banana">바나나</option>
          <option value="apple">사과</option>
          <option value="orange">오렌지</option>
        </select>
        <label>Amount </label>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ExpensesManager;
