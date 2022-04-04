import React from "react";
import addImg from "../../../images/add.png";
import unifyImg from "../../../images/unify.png"
import EmptyClasses from './empty.module.css'
const Empty = (props) => {
  return (
    <React.Fragment>
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
        <div className={EmptyClasses["main-container"]} onClick={props.onOpenAddPage}>
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
