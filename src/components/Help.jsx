
import React from "react";
import Header from "./Header";

class Help extends React.Component {
    componentDidMount() {
        document.title = "todo questions";
    }
    render() {
        return (
            <div className="container">
                <Header tagline="what questions do you have?" />
                <ul>
                    <li>Where is the data?</li>
                    <li>What do you do with my data?</li>
                </ul>
            </div>
        )
    }
}

export default Help;