import React from "react";
import HomeClasses from './home.module.css'
import SharedClasses from '../../shared/shared.module.css'
import UnifyImg from '../../images/unify.png'
import Header from "../header/header";
const Home = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <div>
          <div className={SharedClasses["main-container__item"]}>
            <p className={SharedClasses["main-container__title"]}>Sign in to Unify</p>
          </div>
          <div className={SharedClasses["main-container__item"]}>
            <form className={HomeClasses["main-container__form"]}>
              <div className={HomeClasses["main-container__singin"]}>
                <div className={HomeClasses["main-container__field"]}>
                  <label>Username:</label>
                  <input type="text" />
                </div>
                <div className={HomeClasses["main-container__field"]}>
                  <label>Password:</label>
                  <input type="text" />
                </div>
                <div className={HomeClasses["main-container__field"]}>
                  <button className={HomeClasses["main-container__button"]} onClick={props.onMainPage}>Sign in</button>
                </div>
              </div>

              <div className={HomeClasses["main-container__field"]}>
                <div className={HomeClasses["main-container__signup_area"]}>
                  <a href="../signup/signup.html">
                    <p className={HomeClasses["main-container__signup"]}>
                      I don't have an account, click here to sign up.
                    </p>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Home;
