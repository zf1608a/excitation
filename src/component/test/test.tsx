import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class MyTest extends React.Component {
    public render() {
        const onClick = (o: any) => {
            console.log(typeof o);
            console.log(o);
          };
    
        const menu = (
            <Menu onClick = { onClick }>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );

        return (
            <Dropdown overlay = { menu }>
                <a href = '@' onClick = { e => e.preventDefault() } className="ant-dropdown-link" >
                    点我
                    <DownOutlined />
                </a>
            </Dropdown>
        );
    }
}

export default MyTest;