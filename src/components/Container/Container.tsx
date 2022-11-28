import "./Container.scss";
import ExpensesManager from "../ExpensesManager/ExpensesManager";

const Container = (): JSX.Element => {
  return (
    <div className="container">
      <ExpensesManager />
    </div>
  );
};

export default Container;
