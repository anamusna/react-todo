import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import base from '../base';
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};
	}

	addItem = (item) => {
		// copy the state item
		const items = { ...this.state.items };
		// create new item to existing items
		items[`item${Date.now()}`] = item;
		// update state of items
		this.setState({ items: items });
	};

	removeItem = (index) => {
		console.log('removing item ' + index);
		delete this.state.items[index];
		this.setState({ items: this.state.items });
	};
	componentWillMount() {
		this.ref = base.syncState(`${this.props.params}/items`, {
			context: this,
			state: 'items'
		});
	}

	render() {
		return (
			<div className="container">
				<Header tagline="These are my bucket list items" />
				<TodoForm addItem={this.addItem} />
				<div className="todo-list">
					<TodoList items={this.state.items} removeItem={this.removeItem} />
				</div>
			</div>
		);
	}
}
export default App;
