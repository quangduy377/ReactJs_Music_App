import React, {useRef, useContext} from "react";
import HomeClasses from './home.module.css'
import SharedClasses from '../../shared/shared.module.css'
import backgroundImg from '../../images/background.webp'
import Header from "../header/header";
import NavContext from "../context/navigate-context";
const Home = (props) => {
  const navCtx = useContext(NavContext)
  const userNameInput = useRef()
  const passwordInput = useRef()
  const onAuthentication = (event) =>{
    event.preventDefault()
    const userName = userNameInput.current.value
    const passWord = passwordInput.current.value
    navCtx.handleOpenPage.openMainPage()
  }
  return (
    <React.Fragment>
      <div>
        <img src={backgroundImg} className={HomeClasses["img_background"]}/>
      </div>
      <Header/>
      <main style={{paddingTop:'13rem'}}>
        <div>
          <div className={SharedClasses["main-container__item"]}>
            <p className={SharedClasses["main-container__title"]}>Sign in to Unify</p>
          </div>
          <div className={SharedClasses["main-container__item"]}>
            <form className={HomeClasses["main-container__form"]} onSubmit={onAuthentication}>
              <div className={HomeClasses["main-container__singin"]}>
                <div className={HomeClasses["main-container__field"]}>
                  <label>Username:</label>
                  <input type="text" ref={userNameInput}/>
                </div>
                <div className={HomeClasses["main-container__field"]}>
                  <label>Password:</label>
                  <input type="text" ref={passwordInput}/>
                </div>
                <div className={HomeClasses["main-container__field"]}>
                  <button className={HomeClasses["main-container__button"]} type='submit'>Sign in</button>
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
