import React from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { IStore } from '@/redux/type/storeType';
import { siderCollapsedFun, ISiderCollapsed } from '@/redux/action/siderAction';

import '@/page/header/propertyHeader.css'

/**
 * 页面头
 * 
 * @author David
 * @version 1.0
 */
const { Header  } = Layout;

interface IProps {
    hasCollapsed: boolean;
    hasAuthority: boolean;
    siderCollapsedFun(data: IStore): ISiderCollapsed;
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
                hasAuthority: this.props.hasAuthority
            }
        })
    };

    public onDropdownMenuClick = (key: any) => {
        console.log(key);
    }

    public render() {
        const menuFoldOutIcon =
                this.props.hasCollapsed ?
                <MenuUnfoldOutlined className = 'trigger' onClick = { this.toggle } /> :
                <MenuFoldOutlined className = 'trigger' onClick = { this.toggle } />

        return(
            <Header className = 'writeBackground' style={{ padding: 0 }}>
                <Row>
                    <Col span = { 2 }>
                        { menuFoldOutIcon }
                    </Col>
                    <Col span = { 4 } offset = { 18 }>

                    </Col>
                </Row>
            </Header>
        );
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        hasCollapsed: state.siderReducer.hasCollapsed,
        hasAuthority: state.authorityReducer.hasAuthority
    };
};
  
const actionCreator = {
    siderCollapsedFun
};
  
const PropertyHeader = connect(mapStateToProps, actionCreator)(PropertyBaseHeader);

export default PropertyHeader;