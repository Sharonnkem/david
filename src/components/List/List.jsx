import PropTypes from "prop-types";
import uxs from '../../svg/uxs.svg';
import "./List.css";

const List = ({ title, items }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
            <li
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "#D9D9D94D" : "#ffffff", 
              padding: "3px 10px",
              listStyleType: "none",
            }}
          >
            {item}
            <button><img src={uxs} alt="uxs" /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
