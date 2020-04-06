import React from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { IMenuStore } from '@/redux/types/storeTypes';
import { menuCollapsedFun } from '@/redux/actions/menuAction';
import { IMenuCollapsed } from '@/redux/actions/menuAction';
import { IMenuCollapsedStroe } from '@/redux/types/storeTypes'

import '@/page/header/titleHeader.css'

/**
 * 页面头
 * 
 * @author David
 * @version 1.0
 */
const { Header  } = Layout;

interface IProps {
    collapsed: boolean;
    menuCollapsedFun(data: IMenuCollapsedStroe): IMenuCollapsed;
}

interface IState {

}

class TitleBaseHeader extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
    }

    toggle = () => {
        this.props.menuCollapsedFun({
            collapsed: this.props.collapsed
        })
    };

    public render() {
        const menuFoldOutIcon =
                this.props.collapsed ?
                <MenuUnfoldOutlined className = 'trigger' onClick = { this.toggle } /> :
                <MenuFoldOutlined className = 'trigger' onClick = { this.toggle } />
        return(
            <Header className = 'writeBackground' style={{ padding: 0 }}>
                <Row>
                    <Col span = { 2 }>
                        { menuFoldOutIcon }
                    </Col>
                    <Col span={ 2 } offset={ 16 }>
                        这儿是用户组
                    </Col>
                    <Col span={ 2 }>
                        这儿是部门
                    </Col>
                    <Col span={ 2 }>
                        <a href = 'http://www.w3school.com.cn'>这儿下拉菜单</a>
                    </Col>
                </Row>
            </Header>
        );
    }
}

const mapStateToProps = (state: IMenuStore) => {
    return {
        collapsed: state.menuReducer.collapsed
    };
};
  
const actionCreator = {
    menuCollapsedFun
};
  
const TitleHeader = connect(mapStateToProps, actionCreator)(TitleBaseHeader);

export default TitleHeader;