import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

import { IStore } from '@/redux/type/storeType';

import '@/page/sider/menuSider.css'

/**
 * 菜单边栏
 * 
 * @author David
 * @version 1.0
 */
const { Sider } = Layout;
const { Item } = Menu;

interface IProps {
    hasCollapsed: boolean;
    hasAuthority: boolean;
}

interface IState {

}

class MenuBaseSider extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return(
            <Sider trigger = { null } collapsible collapsed = { this.props.hasCollapsed }>
                <div className = 'logo' />
                <Menu theme = 'dark' mode = 'inline' defaultSelectedKeys = { ['1'] }>
                    <Item key = '1'>
                        <UserOutlined />
                        <span>nav 1</span>
                    </Item>
                    <Item key = '2'>
                        <VideoCameraOutlined />
                        <span>nav 2</span>
                    </Item>
                    <Item key = '3'>
                        <UploadOutlined />
                        <span>nav 3</span>
                    </Item>
                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        hasCollapsed: state.siderReducer.hasCollapsed,
        hasAuthority: state.authorityReducer.hasAuthority
    };
};
  
const actionCreator = {
};
  
const MenuSider = connect(mapStateToProps, actionCreator)(MenuBaseSider);

export default MenuSider;