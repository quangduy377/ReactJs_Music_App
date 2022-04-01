import SharedClasses from '../../shared/shared.module.css'
import UnifyImg from '../../images/unify.png'
const Header = (props) => {
  return (
    <header>
      <div className={SharedClasses["header"]}>
        <a href="welcome.html" className={SharedClasses["header-link"]}>
          <img src={UnifyImg} className={SharedClasses["header-icon__image"]} />
        </a>
        <p className={SharedClasses["header-title"]}>Unify</p>
      </div>
    </header>
  );
};
export default Header;
