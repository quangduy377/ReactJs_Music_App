import Welcome from "./components/welcome/welcome";
import React, { useReducer } from "react";
import Home from "./components/home/home";
import Empty from "./components/main/empty/empty";
import Add from "./components/main/add/add";
import List from "./components/list/list";

const OPEN_WELCOME_PAGE = 'OPEN_WELCOME_PAGE'
const OPEN_HOME_PAGE = 'OPEN_HOME_PAGE'
const OPEN_MAIN_PAGE = 'OPEN_MAIN_PAGE'
const OPEN_ADD_PAGE = 'OPEN_ADD_PAGE'
const OPEN_LIST_PAGE = 'OPEN_LIST_PAGE'

const initialPageState = {
  isWelcomePage: true,
  isHomePage: false,
  isMainPage: false,
  isAddPage: false,
  isListPage: false,
}

const pageIdentifier = {
  OPEN_WELCOME_PAGE: 'isWelcomePage',
  OPEN_HOME_PAGE: 'isHomePage',
  OPEN_MAIN_PAGE: 'isMainPage',
  OPEN_ADD_PAGE: 'isAddPage',
  OPEN_LIST_PAGE: 'isListPage'
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
  if(action.type===OPEN_ADD_PAGE){
    newPageState = togglePage(OPEN_ADD_PAGE)
  }
  if(action.type===OPEN_LIST_PAGE){
    newPageState = togglePage(OPEN_LIST_PAGE)
  }
  return newPageState
}
function App() {  
  const [pageState, dispatchPage] = useReducer(pageReducer,initialPageState)
  const openHomePage = () =>{
    dispatchPage({type: OPEN_HOME_PAGE})
  }
  const openMainPage = (event) =>{
    event.preventDefault()
    dispatchPage({type: OPEN_MAIN_PAGE})
  }
  const openAddPage = (event) =>{
    event.preventDefault()
    dispatchPage({type: OPEN_ADD_PAGE})
  }
  const openListPage = (event) =>{
    event.preventDefault()
    dispatchPage({type: OPEN_LIST_PAGE})
  }

  console.log("page state: ",pageState)
  return (
    <div>
      {pageState.isWelcomePage && <Welcome openHomePage={openHomePage}></Welcome>}
      {pageState.isHomePage && <Home onMainPage={openMainPage}></Home>}
      {pageState.isMainPage && <Empty onOpenAddPage={openAddPage}></Empty>}
      {pageState.isAddPage && <Add onOpenListPage={openListPage}></Add>}
      {pageState.isListPage && <List></List>}
    </div>
  );
}

export default App;
