import React, { useReducer, useState } from "react";
const OPEN_WELCOME_PAGE = "OPEN_WELCOME_PAGE";
const OPEN_HOME_PAGE = "OPEN_HOME_PAGE";
const OPEN_MAIN_PAGE = "OPEN_MAIN_PAGE";
const OPEN_ADD_PAGE = "OPEN_ADD_PAGE";
const OPEN_LIST_PAGE = "OPEN_LIST_PAGE";
const OPEN_SIGNUP_PAGE = "OPEN_SIGNUP_PAGE";

const NavContext = React.createContext({
  OnPage: {
    isWelcomePage: true,
    isHomePage: false,
    isMainPage: false,
    isAddPage: false,
    isListPage: false,
    isSignUpPage: false,
  },
  handleOpenPage: {
    openHomePage: () => {},
    openMainPage: () => {},
    openAddPage: () => {},
    openListPage: () => {},
    openSignUpPage: ()=>{},
  },
  isLogin: false,
});

const initialPageState = {
  isWelcomePage: true,
  isHomePage: false,
  isMainPage: false,
  isAddPage: false,
  isListPage: false,
  isSignUpPage: false,
};

const pageIdentifier = {
  OPEN_WELCOME_PAGE: "isWelcomePage",
  OPEN_HOME_PAGE: "isHomePage",
  OPEN_MAIN_PAGE: "isMainPage",
  OPEN_ADD_PAGE: "isAddPage",
  OPEN_LIST_PAGE: "isListPage",
  OPEN_SIGNUP_PAGE: "isSignUpPage",
};

const togglePage = (key) => {
  const newPageState = { ...initialPageState };
  for (const att in newPageState) {
    //this page is on
    if (pageIdentifier[key] === att) {
      newPageState[att] = true;
    } else {
      newPageState[att] = false;
    }
  }
  return newPageState;
};

const pageReducer = (state, action) => {
  let newPageState = {};
  if (action.type === OPEN_WELCOME_PAGE) {
    newPageState = togglePage(OPEN_WELCOME_PAGE);
    // console.log(newPageState)
  }
  if (action.type === OPEN_HOME_PAGE) {
    newPageState = togglePage(OPEN_HOME_PAGE);
    // console.log(newPageState)
  }
  if (action.type === OPEN_MAIN_PAGE) {
    newPageState = togglePage(OPEN_MAIN_PAGE);
    // console.log(newPageState)
  }
  if (action.type === OPEN_ADD_PAGE) {
    newPageState = togglePage(OPEN_ADD_PAGE);
  }
  if (action.type === OPEN_LIST_PAGE) {
    newPageState = togglePage(OPEN_LIST_PAGE);
  }
  if (action.type === OPEN_SIGNUP_PAGE) {
    newPageState = togglePage(OPEN_SIGNUP_PAGE);
  }
  return newPageState;
};

export const NavContextProvider = (props) => {
  const [pageState, dispatchPage] = useReducer(pageReducer, initialPageState);
  const [isLoggedIn, setLoggedIn] = useState(false)
  const openHomePage = () => {
    dispatchPage({ type: OPEN_HOME_PAGE });
  };
  const openSignUpPage = () => {
    dispatchPage({ type: OPEN_SIGNUP_PAGE });
  };
  const openMainPage = () => {
    dispatchPage({ type: OPEN_MAIN_PAGE });
    setLoggedIn(true)
  };
  const openAddPage = () => {
    dispatchPage({ type: OPEN_ADD_PAGE });
  };
  const openListPage = () => {
    dispatchPage({ type: OPEN_LIST_PAGE });
  };

  return (
    <NavContext.Provider
      value={{
        OnPage: {
            isWelcomePage: pageState.isWelcomePage,
            isHomePage: pageState.isHomePage,
            isMainPage: pageState.isMainPage,
            isAddPage: pageState.isAddPage,
            isListPage: pageState.isListPage,
            isSignUpPage: pageState.isSignUpPage,
          },
          handleOpenPage: {
            openHomePage: openHomePage,
            openMainPage: openMainPage,
            openAddPage: openAddPage,
            openListPage: openListPage,
            openSignUpPage: openSignUpPage
          },
          isLogin: isLoggedIn
      }}
    >
        {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
