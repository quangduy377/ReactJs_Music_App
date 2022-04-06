import addImg from "../../../images/add.png";
import unifyImg from "../../../images/unify.png"
import EmptyClasses from './empty.module.css'
import backgroundImg from '../../../images/background_2.jpg'
import React, {useContext} from 'react'
import NavContext from "../../context/navigate-context";
const Empty = (props) => {
  const navCtx = useContext(NavContext)
  return (
    <React.Fragment>
      <div>
        <img src={backgroundImg} className={EmptyClasses["img_background"]}/>
      </div>
      <header>
        <div className={EmptyClasses["header"]}>
          <a href="welcome.html" className={EmptyClasses["header-link"]}>
            <img
              src={unifyImg}
              className={EmptyClasses["header-icon__image"]}
            />
          </a>
          <p className={EmptyClasses["header-title"]}>Unify</p>
          <div className={EmptyClasses["header-logout"]}>
            <div className={EmptyClasses["header-logout__section"]}>
              <button className={EmptyClasses["header-logout__button"]}>Log out</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={EmptyClasses["main-container"]} onClick={navCtx.handleOpenPage.openAddPage}>
          <div className={EmptyClasses["main-container__add"]}>
            <img className={EmptyClasses["main-container__img"]} src={addImg} />
            <p>
              You currently have no songs <br /> Click to add
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Empty;
