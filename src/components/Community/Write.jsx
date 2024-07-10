import React from "react";
import useInputs from "../useInputs";

const Write = () => {
	const [state, onChangeInput] = useInputs({ title: "", content: "" });

	const onSubmitForm = (e) => {
		e.preventDefault();
		// Add logic to add a new ListItem
	};

	return (
		<div>
			<h1>Write</h1>
			<form onSubmit={onSubmitForm}>
				<input
					placeholder="Title"
					name="title"
					value={state.title}
					onChange={onChangeInput}
				/>
				{/* Add content input and submit/cancel buttons */}
			</form>
		</div>
	);
};

export default Write;
