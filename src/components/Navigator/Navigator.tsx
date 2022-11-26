import "./Navigator.scss";

const Navigator = (): JSX.Element => {
  return (
    <div className="navigator">
      <div className="navigator__column">
        <div className="navigator__box">
          <img
            className="navigator__img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="#"
          />
        </div>
        <div className="navigator__box navigator__username">Sumi</div>
        <div className="navigator__box navigator__useremail">
          equepem@gmail.com
        </div>
      </div>
      <div className="navigator__column">
        <div className="navigator__box navigator__links">
          <li className="navigator__link">
            <a href="#"> Dashboard</a>
          </li>
        </div>
        <div className="navigator__box">
          <li className="navigator__link">
            <a href="#">Expenses</a>
          </li>
        </div>
        <div className="navigator__box">
          <li className="navigator__link">
            <a href="#">Plan</a>
          </li>
        </div>
        <div className="navigator__box">
          <li className="navigator__link">
            <a href="#"> Summary</a>
          </li>
        </div>
        <div className="navigator__box">
          <li className="navigator__link">
            <a href="#"> Settings</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
