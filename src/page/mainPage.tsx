import React from 'react';
import { Layout } from 'antd';
import MenuSider from '@/page/sider/menuSider';
import PropertyHeader from '@/page/header/propertyHeader';
import BlankContent from '@/page/content/blankContent';
import DavidFooter from '@/page/footer/davidFooter';

/**
 * 主页面
 * 
 * @author David
 * @version 1.0
 */
class MainPage extends React.Component {
    public render() {
        return(
            <Layout>
                <MenuSider />
                <Layout>
                    <PropertyHeader />
                    <BlankContent />
                    <DavidFooter />
                </Layout>
            </Layout>
        );
    }
}

export default MainPage;