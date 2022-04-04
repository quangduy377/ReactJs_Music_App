import React from "react"
import background2Img from '../../images/background_2.jpg'
import unifyImg from '../../images/unify.png'
import searchImg from '../../images/search.png'
import singerImg from '../../images/singers/1.jpg'
import ListClasses from './list.module.css'

const List = props =>{
    return(<React.Fragment>
        <img className={ListClasses["main-img"]} src={background2Img}/>
    <header>
      <div className={ListClasses["header"]}>
        <a href="../../welcome/welcome.html" className={ListClasses["header-link"]}>
          <img src={unifyImg} className={ListClasses["header-icon__image"]} />
        </a>
        <p className={ListClasses["header-title"]}>Unify</p>
        <div className={ListClasses["header-logout"]}>
          <div className={ListClasses["header-logout__section"]}>
            <button className={ListClasses["header-logout__button"]}>Log out</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className={ListClasses["main-filter"]}>
        <div className={ListClasses["main-filter__section"]}>
          <select>
            <option value="Singer">Singer's name: A-Z</option>
            <option value="Song">Song's name: A-Z</option>
            <option value="Most_recent">Most recent</option>
            <option value="Most_hear">Most hear</option>
          </select>
        </div>

        <div className={ListClasses["main-filter__section main-search"]}>
          <input className={ListClasses["main-filter__input"]} type="text" placeholder="search singer, song, etc."/>
          <button className={ListClasses["main-filter__button"]}>
            <img src={searchImg}/>
          </button>
        </div>
        
      </div>
        <div className={ListClasses["main-section"]} style={{color: 'white'}}>
            <form className={ListClasses["main-section__form"]}>
                <div className={ListClasses["main-section__element_img"]}>
                    <img src={singerImg}/>
                </div>
                <div className={ListClasses["main-section__container"]}>
                    <div className={ListClasses["main-section__field"]}>
                        <p>Song: <span>Stronger</span> </p>                        
                        <select>
                          <option>...</option>
                          <option>
                            Remove
                          </option>
                          <option>
                            Modify
                          </option>
                        </select> 
                    </div>
                    <div className={ListClasses["main-section__field"]}>
                        <p>Singer: <span>Kelly Clarkson</span></p>
                    </div>
                    <div className={ListClasses["main-section__field"]}>
                        <p>Link: 
                            <a href="https://www.google.com/">Click here!</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </main>
    </React.Fragment>)
}
export default List