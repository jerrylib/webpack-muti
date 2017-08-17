import React from 'react';
import { Link } from 'react-router-dom';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>home/index</h1>
                <Link to="/baike">baike</Link>
            </div>
        );
    }
}
