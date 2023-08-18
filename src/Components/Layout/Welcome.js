import React from "react";
import './Welcome.css';
import logo from '../../Images/logo.png';


const Welcome = () => {
  return (
    <div className="Welcome_Summery">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Header">
        <h1>Expense Tracker</h1>
      </div>
      <div className="Summery">
        <h2>
          Welcome to our innovative expense tracker website, designed to
          simplify your financial management. Gain a clearer understanding of
          your spending habits, set budgets with confidence, and achieve your
          financial goals. With user-friendly tools and insightful
          visualizations, we're here to empower you on your journey to financial
          success.
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
