import React, { useEffect, useState } from "react";
import axios from "axios";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/transactions")
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Transaction List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(tx => (
                        <tr key={tx.id}>
                            <td>{tx.id}</td>
                            <td>{tx.description}</td>
                            <td>${tx.amount.toFixed(2)}</td>
                            <td>{tx.category}</td>
                            <td>{new Date(tx.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
