import React from 'react';

class TodoItem extends React.Component {
	onClickDelete = () => {
		this.props.removeItem(this.props.index);
	};

	render() {
		return (
			<div className="container">
				<table>
					<tr className="todo-item">
						<td>
							<div className="custom-control custom-checkbox">
								<input type="text" />
							</div>
						</td>
						<td className="col-action">
							{this.props.items.nameRef}
							<button className="btn btn-outline-secondary" type="submit" onClick={this.onClickDelete}>
								delete
							</button>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default TodoItem;
