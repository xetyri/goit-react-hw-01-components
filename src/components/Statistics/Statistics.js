import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <div className={s.profile}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map((index) => (
          <li className={s.item} key={index.id}>
            <span className={s.label}>{index.label}</span>
            <span className={s.percentage}>{index.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
