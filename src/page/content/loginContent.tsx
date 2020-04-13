import React from 'react';
import { Card } from 'antd';

import LoginForm from '@/component/form/loginForm';

import '@/page/content/content.css';

/**
 * 用户登录content
 * 
 * @author David
 * @version 1.0
 */
const CARD_TITLE = '用户登录';

class LoginContent extends React.Component {
    public render() {
        return(
            <div>
                <div className = 'loginContent'>
                    <Card type = 'inner' title = { CARD_TITLE }>
                        <LoginForm />
                    </Card>
                </div>
            </div>
        )
    }
}

export default LoginContent;