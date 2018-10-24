import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import { getRandomTagLine} from '../helpers'

import "../css/style.css";


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header tagline1="Some of the things i want to do" />
                <TodoList />
            </div>
        )
    }
}

export default App;