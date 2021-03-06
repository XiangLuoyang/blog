import React from 'react'
import { Link } from 'react-router'

const Leftnav = React.createClass({
    render() {
        return (
            <div className="leftnav">
                <div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/index">主页</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/msg">留言板</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/article">日志</Link>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
            </div>
        )
    }
})

export default Leftnav;