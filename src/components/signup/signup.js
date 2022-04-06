import SignUpClasses from "./signup.module.css";
import SharedClasses from "../../shared/shared.module.css";
import Header from "../header/header";
import trashImg from "../../images/trash.png";
import backgroundImg from "../../images/background.webp";
import React from "react";
const SignUp = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <div>
          <img
            className={SignUpClasses["img_background"]}
            src={backgroundImg}
          />
        </div>
        <div>
          <div className={SharedClasses["main-container__item"]}>
            <p className={SharedClasses["main-container__title"]}>
              Join our network.
            </p>
          </div>
          <div className={SharedClasses["main-container__item"]}>
            <form className={SignUpClasses["main-container__form"]}>
              <div className={SignUpClasses["main-container__singin"]}>
                <div className={SignUpClasses["main-container__field"]}>
                  <label>Username:</label>
                  <div className={SignUpClasses["main-container__input"]}>
                    <input type="text" />
                    <button>
                      <img
                        src={trashImg}
                        className={SignUpClasses["main-container__input_img"]}
                      />
                    </button>
                  </div>
                </div>
                <div className={SignUpClasses["main-container__field"]}>
                  <label>Password:</label>
                  <div className={SignUpClasses["main-container__input"]}>
                    <input type="text" />
                    <button>
                      <img
                        src={trashImg}
                        className={SignUpClasses["main-container__input_img"]}
                      />
                    </button>
                  </div>
                </div>
                <div className={SignUpClasses["main-container__field"]}>
                  <label>Re-enter Password:</label>
                  <div className={SignUpClasses["main-container__input"]}>
                    <input type="text" />
                    <button>
                      <img
                        src={trashImg}
                        className={SignUpClasses["main-container__input_img"]}
                      />
                    </button>
                  </div>
                </div>
                <div className={SignUpClasses["main-container__field"]}>
                  <button className={SignUpClasses["main-container__button"]}>
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default SignUp;
