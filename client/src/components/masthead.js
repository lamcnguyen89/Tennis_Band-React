import React, { Component } from 'react';

class Masthead extends Component {
    render() {
        return(
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase banner">Tennis</h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Masthead;