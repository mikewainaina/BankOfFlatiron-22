import React from "react";
import "../../src/App.css";
import { Table } from "react-bootstrap";
export default function TransactionTable({ transactions, onDelete }) {
  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <>
      <div className="container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
