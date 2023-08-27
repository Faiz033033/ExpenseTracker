import React, { useContext } from "react";
import Header from "./Layout/Header";
import Auth from "./Pages/Auth/Auth";
import Welcome from "./Pages/Welcome/Welcome";
import { Switch, Route,Redirect } from "react-router-dom";
import Contact from "./Pages/Contact";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import VerifyLinkSend from "./Pages/Auth/VerifyLinkSend";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import ExpenseContext from "./store/expense-context";
import ExpensesForm from "./Pages/Expenses/ExpensesForm";
import "./App.css";
function App() {
  const expctx=useContext(ExpenseContext)
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/verifymail'>
          <VerifyEmail/>
        </Route>
        <Route path='/linksend'>
          <VerifyLinkSend/>
        </Route>
        <Route path='/forget_pass'>
          <ForgetPassword/>
        </Route>
         <Route path="/expenses">
         {expctx.ExpenseToken && <ExpensesForm/>}
         {!expctx.ExpenseToken && <Redirect to="/" />}
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;