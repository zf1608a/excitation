import React from 'react';
import { Layout } from 'antd';
import MenuSider from '@/page/sider/menuSider';
import TitleHeader from '@/page/header/titleHeader';
import BlankContent from '@/page/content/blankContent';
import DavidFooter from '@/page/footer/davidFooter';

class MainPage extends React.Component {
    render() {
        return(
            <Layout>
                <MenuSider />
                <Layout>
                    <TitleHeader />
                    <BlankContent />
                    <DavidFooter />
                </Layout>
            </Layout>
        );
    }
}

export default MainPage;