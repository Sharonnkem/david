import PropTypes from "prop-types";
import "./OverviewCard.css";

const OverviewCard = ({ title, count }) => {
  return (
    <div className="overview-card">
      <h4>{title}</h4>
      <p>{count}</p>
    </div>
  );
};

OverviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default OverviewCard;
