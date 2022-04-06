import Welcome from "./components/welcome/welcome";
import React, { useReducer } from "react";
import Home from "./components/home/home";
import Empty from "./components/main/empty/empty";
import Add from "./components/main/add/add";
import List from "./components/list/list";
import SignUp from "./components/signup/signup";
import NavContext, {
  NavContextProvider,
} from "./components/context/navigate-context";
import { useContext } from "react";

function App() {
  const navCtx = useContext(NavContext);
  console.log(navCtx.OnPage);
  return (
    <div>
      {navCtx.OnPage.isWelcomePage && <Welcome></Welcome>}
      {navCtx.OnPage.isHomePage && <Home></Home>}
      {navCtx.OnPage.isSignUpPage && <SignUp></SignUp>}
      {navCtx.OnPage.isMainPage && <Empty></Empty>}
      {navCtx.OnPage.isAddPage && <Add></Add>}
      {navCtx.OnPage.isListPage && <List></List>}
    </div>
  );
}

export default App;
