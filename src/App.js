import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/incomeExpenses";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
