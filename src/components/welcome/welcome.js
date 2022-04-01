import React from "react";
import WelcomeClass from './welcome.module.css'
import SharedClass from '../../shared/shared.module.css'
import unifyIcon from '../../images/unify.png'
import Header from "../header/header";
const Welcome = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <div className={WelcomeClass["main-container"]}>
          <div className={SharedClass["main-container__item"]}>
            <p className={SharedClass["main-container__title"]}>Welcome to Unify</p>
          </div>
          <div className={SharedClass["main-container__item"]}>
            <button className={WelcomeClass["main-container__button"]} onClick={props.openHomePage}>Let's get started</button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Welcome;
