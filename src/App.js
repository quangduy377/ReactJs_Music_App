import Welcome from "./components/welcome/welcome";
import React, { useReducer } from "react";
import Home from "./components/home/home";

const OPEN_WELCOME_PAGE = 'OPEN_WELCOME_PAGE'
const OPEN_HOME_PAGE = 'OPEN_HOME_PAGE'
const OPEN_MAIN_PAGE = 'OPEN_MAIN_PAGE'

const initialPageState = {
  isWelcomePage: true,
  isHomePage: false,
  isMainPage: false,
}

const pageIdentifier = {
  OPEN_WELCOME_PAGE: 'isWelcomePage',
  OPEN_HOME_PAGE: 'isHomePage',
  OPEN_MAIN_PAGE: 'isMainPage'
}

const togglePage = (key) =>{
  const newPageState = {...initialPageState}
  for(const att in newPageState){
    //this page is on
    if(pageIdentifier[key]===att){
      newPageState[att]=true
    }
    else{
      newPageState[att]=false
    }
  }
  return newPageState
}

const pageReducer = (state, action) =>{
  let newPageState={}
  if(action.type===OPEN_WELCOME_PAGE){
    newPageState = togglePage(OPEN_WELCOME_PAGE)
    // console.log(newPageState)
  }
  if(action.type===OPEN_HOME_PAGE){
    newPageState = togglePage(OPEN_HOME_PAGE)
    // console.log(newPageState)
  }
  if(action.type===OPEN_MAIN_PAGE){
    newPageState = togglePage(OPEN_MAIN_PAGE)
    // console.log(newPageState)
  }
  return newPageState
}
function App() {  
  const [pageState, dispatchPage] = useReducer(pageReducer,initialPageState)
  const openHomePage = () =>{
    dispatchPage({type: OPEN_HOME_PAGE})
  }
  const openMainPage = () =>{
    dispatchPage({type: OPEN_MAIN_PAGE})
  }
  console.log("page state: ",pageState)
  return (
    <div>
      {pageState.isWelcomePage && <Welcome openHomePage={openHomePage}></Welcome>}
      {pageState.isHomePage && <Home onMainPage={openMainPage}></Home>}
    </div>
  );
}

export default App;
