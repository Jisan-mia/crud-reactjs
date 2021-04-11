import React from "react";

function Transaction({ transaction, inedex, onEdit, onDelete }) {
	return (
		<tr className="transaction">
			<th>{inedex + 1}</th>
			<td> {transaction.bAccountNo} </td>
			<td> {transaction.iFSC} </td>
			<td> {transaction.bName} </td>
			<td> {transaction.amount} </td>
			<td>
				<button className="btn" onClick={() => onEdit(transaction)}>
					EDIT
				</button>
			</td>
			<td>
				<button className="btn" onClick={() => onDelete(transaction.id)}>
					DELETE
				</button>
			</td>
		</tr>
	);
}

export default Transaction;
