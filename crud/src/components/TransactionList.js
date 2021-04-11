import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
import TransactionForm from "./TransactionForm";

function TransactionList() {
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [transactionLists, setTransactionLists] = useState([]);
	const [editTransaction, setEditTransaction] = useState({});

	useEffect(() => {
		const json = localStorage.getItem("transactions");
		const loadedLists = JSON.parse(json);
		if (loadedLists) {
			setTransactionLists(loadedLists);
		}
	}, []);

	React.useEffect(() => {
		const json = JSON.stringify(transactionLists);
		localStorage.setItem("transactions", json);
	}, [transactionLists]);

	const onAddOrEdit = (data) => {
		const id = Math.floor(Math.random() * 10000) + 1;

		const newLists = [...transactionLists, { ...data, id }];
		setTransactionLists(newLists);

		localStorage.setItem("transactions", JSON.stringify(newLists));
	};

	const onEdit = (data) => {
		setEditTransaction(data);
	};

	const onDelete = (id) => {
		const remainingTransactions = [...transactionLists].filter(
			(transaction) => transaction.id !== id
		);
		setTransactionLists(remainingTransactions);
		localStorage.setItem("transactions", JSON.stringify(remainingTransactions));
	};

	return (
		<div>
			<h1>Transaction list</h1>
			<TransactionForm
				editTransaction={editTransaction}
				onAddOrEdit={onAddOrEdit}
			/>
			<hr />
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>A/C No.</th>
						<th>IFSC Code</th>
						<th>A/C Holder Name</th>
						<th>Amount</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{transactionLists.map((transaction, inedex) => (
						<Transaction
							onEdit={onEdit}
							onDelete={onDelete}
							key={transaction.id}
							inedex={inedex}
							transaction={transaction}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TransactionList;
