import React, { useContext } from "react";
import ExpenseContext from "../../store/expense-context";
import { useHistory } from "react-router-dom";
import classes from "./VerifyEmail.module.css";
import useHttp from "../../hook/useHttp";
const VerifyEmail = () => {
  const { error, sendRequest } = useHttp();
  const expctx = useContext(ExpenseContext);
  const history = useHistory();
  const verifyMailHandler = async (event) => {
    event.preventDefault();
    try {
      const verifyObj = {
        requestType: "VERIFY_EMAIL",
        idToken: expctx.ExpenseToken,
      };

      const resData = () => {
        history.push("/linksend");
      };

      sendRequest(
        {
          request:'post',
          url: "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD9IHVJXmO199ELEojC5tmtnsW91qJmN8g",
          body: verifyObj,
          header: { "Content-Type": "X-Firebase-Locale" },
        },
        resData
      );
    } catch (err) {
      console.log(err);
      alert("Something Went wrong.Try to relogin your account");
    }
  };

  return (
    <React.Fragment>
     
      <form>
        <h2>Verify your email</h2>
        <button className={classes.verify_button} onClick={verifyMailHandler}>
          Click here
        </button>
        {error && <h3 className={classes.error_tag}>{`${error} !!!`}</h3>}
      </form>
    </React.Fragment>
  );
};
export default VerifyEmail;