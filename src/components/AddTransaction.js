import React, { useState } from "react";
import axios from "axios";

const AddTransaction = ({ onTransactionAdded }) => {
    const [transaction, setTransaction] = useState({
        description: "",
        amount: "",
        category: "",
        date: ""
    });

    const handleChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/transactions", transaction)
            .then(response => {
                alert("Transaction Added!");
                setTransaction({ description: "", amount: "", category: "", date: "" });
                onTransactionAdded();
            })
            .catch(error => {
                console.error("Error adding transaction:", error);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Description:</label>
                    <input type="text" name="description" className="form-control" value={transaction.description} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Amount:</label>
                    <input type="number" name="amount" className="form-control" value={transaction.amount} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Category:</label>
                    <input type="text" name="category" className="form-control" value={transaction.category} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Date:</label>
                    <input type="datetime-local" name="date" className="form-control" value={transaction.date} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
