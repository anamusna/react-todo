import React from 'react';

class TodoForm extends React.Component {
	nameRef = React.createRef();

	onClickCreate = (event) => {
		event.preventDefault();
		const item = {
			nameRef: this.nameRef.current.value
		};
		// from a level above at index.js
		this.props.addItem(item);
		// reset the form
		event.currentTarget.reset();
	};

	render() {
		return (
			<form className="input-group my-3" onSubmit={this.onClickCreate}>
				<input
					className="form-control"
					name="name"
					ref={this.nameRef}
					type="text"
					placeholder="Add a new bucket list item ..."
				/>
				<button type="submit" className="btn btn-outline-secondary">
					<i className="fa fa-plus" aria-hidden="true" />&nbsp;Add item
				</button>
			</form>
		);
	}
}

export default TodoForm;
