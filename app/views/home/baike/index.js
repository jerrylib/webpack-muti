import React from 'react';
import { Link } from 'react-router-dom';
export default class Baike extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>home/baike</h1>
                <Link to="/index">index</Link>
            </div>
        );
    }
}
