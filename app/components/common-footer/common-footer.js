import React from 'react';
export default class CommonFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-1">
                    <span className="company">网龙网络公司版权所有</span>
                </div>
                <div className="footer-2">
                    <span className="copy-right">Copyright ©2017 Net Dragon Websoft Holdings Limited.</span>
                </div>
            </div>
        );
    }
}
