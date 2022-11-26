import "./Navigator.scss";

const Navigator = (): JSX.Element => {
  return (
    <div className="navigator">
      <div className="navigator__column">
        <div className="navigator__box">
          <img src="../../img/img_portrait.jpg" alt="#" />
        </div>
        <div className="navigator__box">Sumi</div>
        <div className="navigator__box">equepem@gmail.com</div>
      </div>
      <div className="navigator__column">
        <div className="navigator__box">
          <li>
            <a href="#"> Dashboard</a>
          </li>
        </div>
        <div className="navigator__box">
          <li>
            <a href="#">Expenses</a>
          </li>
        </div>
        <div className="navigator__box">
          <li>
            <a href="#">Plan</a>
          </li>
        </div>
        <div className="navigator__box">
          <li>
            <a href="#"> Summary</a>
          </li>
        </div>
        <div className="navigator__box">
          <li>
            <a href="#"> Settings</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
