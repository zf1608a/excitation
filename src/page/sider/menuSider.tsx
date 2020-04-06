import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

import { IMenuStore } from '@/redux/types/storeTypes';

import '@/page/sider/menuSider.css'

const { Sider } = Layout;
const { Item } = Menu;

interface IProps {
    collapsed: boolean;
}

class MenuBaseSider extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return(
            <Sider trigger = { null } collapsible collapsed = { this.props.collapsed }>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
                    <Item key="1">
                        <UserOutlined />
                        <span>nav 1</span>
                    </Item>
                    <Item key="2">
                        <VideoCameraOutlined />
                        <span>nav 2</span>
                    </Item>
                    <Item key="3">
                        <UploadOutlined />
                        <span>nav 3</span>
                    </Item>
                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = (state: IMenuStore) => {
    return {
        collapsed: state.menuReducer.collapsed
    };
};
  
const actionCreator = {
};
  
const MenuSider = connect(mapStateToProps, actionCreator)(MenuBaseSider);

export default MenuSider;