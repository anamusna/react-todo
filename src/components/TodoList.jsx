import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	render() {
		const { items } = this.props;
		const itemIds = Object.keys(items);

		var test = itemIds.map((id) => {
			return <TodoItem key={id} index={id} items={items[id]} removeItem={this.props.removeItem} />;
		});

		return (
			<div className="todo-list">
				<table className="todo-items table table-borderless">
					<tbody>
						<td>{test}</td>
					</tbody>
				</table>
			</div>
		);
	}
}
export default TodoList;
