import React from 'react';
import { RouteComponentProps, withRouter, Link, Route, Switch } from 'react-router-dom';
import { Layout, Col, Row, Breadcrumb  } from 'antd';
import MenuSider from '@/page/sider/menuSider';
import PropertyHeader from '@/page/header/propertyHeader';
import DavidFooter from '@/page/footer/davidFooter';
import MainContent from '@/page/content/mainContent';
import ChangePasswordContent from '@/page/content/changePasswordContent';

/**
 * 主页面
 * 
 * @author David
 * @version 1.0
 */
const { Content  } = Layout;

interface IProps extends RouteComponentProps {

}

class MainBasePage extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        // 构造面包屑
        const breadcrumbNameMap: any = {
            '/': '主页',
            '/changePassword': '修改密码'
        };
        const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key = { url }>
                    <Link to = { url }>{ breadcrumbNameMap[url] }</Link>
                </Breadcrumb.Item>
            );
        });

        const breadcrumbItems = [(
            <Breadcrumb.Item key = 'home'>
                <Link to = '/'>主页</Link>
            </Breadcrumb.Item>
        )].concat(extraBreadcrumbItems);

        return(
            <Layout>
                <MenuSider />
                <Layout>
                    <PropertyHeader />
                    <Content>
                        <Row>
                            <Col span = { 6 }>
                                <Breadcrumb className = 'separate'>
                                    { breadcrumbItems }
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <div>
                            <Switch>
                                <Route path = '/changePassword' component={ ChangePasswordContent } />
                                <Route path = '/' component={ MainContent } />
                            </Switch>
                        </div>
                    </Content>
                    <DavidFooter />
                </Layout>
            </Layout>
        );
    }
}

const MainPage = withRouter(MainBasePage);

export default MainPage;