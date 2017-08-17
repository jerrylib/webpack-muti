import React from 'react';
export default class CommonHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header clearfix" >
                <div className="layout-wrap">
                    <a href="/" className="btn-logo">教育知识百科</a>
                    {/* <login-bar></login-bar> */}
                    <div className="nav-bar">
                        <ul className="header-nav clearfix">
                            <li><a>首页</a></li>
                            <li><a>百科全书</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
