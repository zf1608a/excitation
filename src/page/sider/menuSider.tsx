import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    SettingFilled,
    UserOutlined,
    TeamOutlined,
    ControlOutlined,
} from '@ant-design/icons';

import { IStore } from '@/redux/type/storeType';
import { IMenu, menuFetch } from '@/communication/authority/menuComm';

import '@/page/sider/menuSider.css'

/**
 * 菜单边栏
 * 
 * @author David
 * @version 1.0
 */
const { Sider } = Layout;
const { SubMenu, Item } = Menu;

interface IProps {
    hasCollapsed: boolean;
    hasAuthority: boolean;
    id: number;
}

interface IState {
    menu: IMenu[];
}

class MenuBaseSider extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            menu: []
        }
    }

    public componentDidMount() {
        this.loadMenu();
    }

    public loadMenu() {
        let content = {
            id: this.props.id
        }

        menuFetch('authority/silderMenu', { json: JSON.stringify(content) })
        .then(response => {
            this.setState({ menu: response.rowList })
        })
    }

    public getIcon(icon: string) {
        switch(icon) {
            case 'SettingFilled':
                return <SettingFilled />
            case 'UserOutlined':
                return <UserOutlined />
            case 'TeamOutlined':
                return <TeamOutlined />
            case 'ControlOutlined':
                return <ControlOutlined />
            default:
        }
    }

    public render() {
        const mySubMenu = (
            this.state.menu.map(v => (
                <SubMenu key = { v.id } title = { <span>{ this.getIcon(v.icon) }<span>{ v.name }</span></span> }>
                    { v.children.map(value => (
                        <Item key = { value.id }>
                            <Link to = { value.link }>
                                <span>
                                    { this.getIcon(value.icon) }
                                    <span>
                                        { value.name }
                                    </span>
                                </span>
                            </Link>
                        </Item>
                    ))}
                </SubMenu>
            ))
        );
        return(
            <Sider trigger = { null } collapsible collapsed = { this.props.hasCollapsed }>
                <div className = 'logo' />
                <Menu theme = 'dark' mode = 'inline' defaultSelectedKeys = { ['1'] }>
                    { mySubMenu }
                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        hasCollapsed: state.siderReducer.hasCollapsed,
        hasAuthority: state.authorityReducer.hasAuthority,
        id: state.authorityReducer.id
    };
};
  
const actionCreator = {
};
  
const MenuSider = connect(mapStateToProps, actionCreator)(MenuBaseSider);

export default MenuSider;