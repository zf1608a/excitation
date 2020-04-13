import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { IStore } from '@/redux/type/storeType';
import { siderCollapsedFun, ISiderCollapsed } from '@/redux/action/siderAction';
import { authorityOutFun, IAuthorityOut } from '@/redux/action/authorityAction';

import '@/page/header/propertyHeader.css'

/**
 * 页面头
 * 
 * @author David
 * @version 1.0
 */
const { Header  } = Layout;
const { Item } = Menu;

interface IProps {
    hasCollapsed: boolean;
    hasAuthority: boolean;
    id: number;
    name: string;
    siderCollapsedFun(data: IStore): ISiderCollapsed;
    authorityOutFun(data: IStore): IAuthorityOut;
}

interface IState {

}

class PropertyBaseHeader extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
    }

    public toggle = () => {
        this.props.siderCollapsedFun({
            siderReducer: {
                hasCollapsed: this.props.hasCollapsed
            },
            authorityReducer: {
                hasAuthority: this.props.hasAuthority,
                id: this.props.id,
                name: this.props.name
            }
        })
    };

    public dropdownMenuClick = ({ key }: any) => {
        switch(key) {
            case '2':
                this.props.authorityOutFun({
                    siderReducer: {
                        hasCollapsed: this.props.hasCollapsed
                    },
                    authorityReducer: {
                        hasAuthority: this.props.hasAuthority,
                        id: this.props.id,
                        name: this.props.name
                    }
                });
                break;
            default:
        }
    }
    
    public render() {
        const menuFoldOutIcon =
                this.props.hasCollapsed ?
                <MenuUnfoldOutlined className = 'leftSeparate' onClick = { this.toggle } /> :
                <MenuFoldOutlined className = 'leftSeparate' onClick = { this.toggle } />

        const dropdownMenu = (
            <Menu onClick = { this.dropdownMenuClick }>
                <Item key="1"><Link to={ '/changePassword' }>修改密码</Link></Item>
                <Item key="2">登出</Item>
            </Menu>
        );

        return(
            <Header className = 'writeBackground' style={{ padding: 0 }}>
                <Row>
                    <Col span = { 2 }>
                        { menuFoldOutIcon }
                    </Col>
                    <Col span = { 3 } offset = { 19 }>
                    <Dropdown className = 'rightSeparate' overlay = { dropdownMenu }>
                        <a href = '@' onClick = { e => e.preventDefault() } className = 'ant-dropdown-link' >
                            { this.props.name }
                            <DownOutlined />
                        </a>
                    </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        hasCollapsed: state.siderReducer.hasCollapsed,
        hasAuthority: state.authorityReducer.hasAuthority,
        id: state.authorityReducer.id,
        name: state.authorityReducer.name
    };
};
  
const actionCreator = {
    siderCollapsedFun,
    authorityOutFun
};
  
const PropertyHeader = connect(mapStateToProps, actionCreator)(PropertyBaseHeader);

export default PropertyHeader;