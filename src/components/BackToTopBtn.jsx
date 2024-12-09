import PropTypes from 'prop-types';
import 'remixicon/fonts/remixicon.css';
import './backToTopBtn.css';

function BackToTopBtn({ scroll }) {
  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      className={`back-to-top ${scroll > 100 ? 'active' : ''}`}
      onClick={backToTop}
    >
      <i className="ri-arrow-up-s-fill"></i>
    </a>
  );
}

BackToTopBtn.propTypes = {
  scroll: PropTypes.number.isRequired,
};

export default BackToTopBtn;
