import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshTransactions = () => {
      setRefresh(!refresh);
  };
  return (
    <div className="container mt-4">
            <h1 className="text-center">Finance Tracker</h1>
            <AddTransaction onTransactionAdded={refreshTransactions} />
            <TransactionList key={refresh} />
    </div>
  );
}

export default App;




