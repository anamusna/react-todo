
import React from "react";
import Header from "./Header";

class NotFound extends React.Component {
    componentDidMount() {
        document.title = "4o4 Not found";
    }
    render() {
        return (
            <div className="container">
                <Header tagline="404 - sorry! not found" />
                <div className="alert alert-danger">
                    <p><strong>Please navigate to another page</strong></p>
                </div>
            </div>
        )
    }
}

export default NotFound;