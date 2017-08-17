import React from 'react';

import { Router, Route, IndexRedirect, IndexRoute, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Index from './index/index';
import Baike from './baike/index';
import NoMatch from './noMatch';
import CommonHeader from 'common-header';
import CommonFooter from 'common-footer';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CommonHeader/>
                <div>
                    <div className="header-search">
                        <div className="search">
                            {/* <search-require words="words" action="refreshList(words)"></search-require> */}
                        </div>
                    </div>
                </div>
                <div className="layout-body">
                    <div className="layout-container">
                        <div>
                            <BrowserRouter>
                                <Switch>
                                    <IndexRoute component={Index} />
                                </Switch>
                            </BrowserRouter>
                        </div>
                        <CommonFooter/>
                    </div>
                </div>
            </div>
        );
    }
}
