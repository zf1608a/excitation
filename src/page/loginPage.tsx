import React from 'react';
import { Layout } from 'antd';

import LoginContent from '@/page/content/loginContent';
import DavidFooter from '@/page/footer/davidFooter';

/**
 * 登录页面
 * 
 * @author David
 * @version 1.0
 */
class LoginPage extends React.Component {
    public render() {
        return(
            <Layout>
                <LoginContent />
                <DavidFooter />
            </Layout>
        );
    }
}

export default LoginPage;