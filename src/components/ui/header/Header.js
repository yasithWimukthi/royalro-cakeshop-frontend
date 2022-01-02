import React from "react";
import './header.css';
import {Button} from "antd";
import {SearchOutlined} from "@ant-design/icons";


const Header = () => {
    return(
        <div className="header-container">
            <div className="search-bar">
                <div className="logo-box">
                    <div className="logo-container"></div>
                    <p>Royalro</p>
                </div>
                <div className="search-bar-container">
                    <form>
                        <input type="text" className="search-input" placeholder="Search"/>
                        <Button className="search-btn" type="primary" icon={<SearchOutlined />}>
                            <span className="search-text">Search</span>
                        </Button>
                    </form>
                </div>
            </div>
            <div className="navigation-bar">

            </div>
        </div>
    )
}

export default Header;