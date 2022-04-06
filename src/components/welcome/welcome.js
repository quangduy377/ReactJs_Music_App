import React, {useContext} from "react";
import WelcomeClass from './welcome.module.css'
import SharedClass from '../../shared/shared.module.css'
import backgroundImg from '../../images/background.webp'
import Header from "../header/header";
import NavContext from "../context/navigate-context";
const Welcome = (props) => {
  const navCtx = useContext(NavContext)
  return (
    <React.Fragment>
      <div>
        <img src={backgroundImg}  className={WelcomeClass["img_background"]}/>
      </div>
      <Header/>
      <main>
        <div className={WelcomeClass["main-container"]}>
          <div className={SharedClass["main-container__item"]}>
            <p className={SharedClass["main-container__title"]}>Welcome to Unify</p>
          </div>
          <div className={SharedClass["main-container__item"]} style={{textAlign:'center'}}>
            <button className={WelcomeClass["main-container__button"]} onClick={navCtx.handleOpenPage.openHomePage}>Let's get started</button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Welcome;
