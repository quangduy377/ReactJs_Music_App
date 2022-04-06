import React, {useContext} from "react";
import unifyImg from "../../../images/unify.png";
import trashImg from "../../../images/trash.png";
import backgroundImg from '../../../images/background_2.jpg'
import AddClasses from './add.module.css'
import NavContext from "../../context/navigate-context";
const Add = (props) => {
  const navCtx = useContext(NavContext)
  return (
    <React.Fragment>
      <div>
        <img src={backgroundImg} className={AddClasses["img_background"]}/>
      </div>
      <header>
        <div className={AddClasses["header"]}>
          <a href="../../welcome/welcome.html" className={AddClasses["header-link"]}>
            <img src={unifyImg} className={AddClasses["header-icon__image"]} />
          </a>
          <p className={AddClasses["header-title"]}>Unify</p>
          <div className={AddClasses["header-logout"]}>
            <div className={AddClasses["header-logout__section"]}>
              <button className={AddClasses["header-logout__button"]}>Log out</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={AddClasses["main-section"]}>
          <form className={AddClasses["main-section__form"]} onSubmit={navCtx.handleOpenPage.openListPage}>
            <div className={AddClasses["main-section__form_section"]}>
              <label>Singer: </label>
              <input type="text" />
              <button>
                <img src={trashImg} />
              </button>
            </div>
            <div className={AddClasses["main-section__form_section"]}>
              <label>Song: </label>
              <input type="text" />
              <button>
                <img src={trashImg} />
              </button>
            </div>
            <div className={AddClasses["main-section__form_section"]}>
              <label>Link: </label>
              <input type="text" />
              <button>
                <img src={trashImg} />
              </button>
            </div>
            <div className={AddClasses["main-section__form_confirm"]}>
              <button className={AddClasses["main-section__form_button"]} type='submit'>Confirm</button>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Add;
