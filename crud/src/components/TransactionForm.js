import React, { useState } from "react";

function TransactionForm({ onAddOrEdit, editTransaction }) {
	const [bAccountNo, setBAccountNo] = useState("");
	const [iFSC, setIFSC] = useState("");
	const [bName, setBName] = useState("");
	const [amount, setAmount] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (bAccountNo.length && iFSC.length && bName.length && amount.length) {
			onAddOrEdit({ bAccountNo, iFSC, bName, amount });
		} else {
			alert("Please fill up all the input");
		}

		setBAccountNo("");
		setIFSC("");
		setBName("");
		setAmount("");
	};

	// const handleOnChange = (e) => {
	// 	const setValueToState =
	// 		e.target.name === "bAccountNo"
	// 			? setBAccountNo(e.target.value)
	// 			: e.target.name === "iFSC"
	// 			? setIFSC(e.target.value)
	// 			: e.target.name === "bName"
	// 			? setBName(e.target.value)
	// 			: e.target.name === "amount"
	// 			? setAmount(e.target.value)
	// 			: "";
	// };

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={(e) => setBAccountNo(e.target.value)}
				type="text"
				value={bAccountNo}
				placeholder="A/C NO."
				name="bAccountNo"
			/>
			<input
				onChange={(e) => setIFSC(e.target.value)}
				value={iFSC}
				type="text"
				placeholder="IFSC Code"
				name="iFSC"
			/>
			<input
				onChange={(e) => setBName(e.target.value)}
				value={bName}
				type="text"
				placeholder="A/C Holder name"
				name="bName"
			/>
			<input
				onChange={(e) => setAmount(e.target.value)}
				value={amount}
				type="number"
				placeholder="Amount"
				name="amount"
			/>
			<input className="btn" type="submit" value="Submit" />
		</form>
	);
}

export default TransactionForm;
