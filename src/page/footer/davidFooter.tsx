import React from 'react';
import { Layout } from 'antd';
import { BugTwoTone } from '@ant-design/icons';

import '@/page/footer/davidFooter.css'

/**
 * 自定义页面尾
 * 
 * @author David
 * @version 1.0
 */
const { Footer  } = Layout;

class DavidFooter extends React.Component {
    render() {
        return(
            <Footer className = 'david'>
                员工营销系统 © 2020 Created by David
                <span>
                    <BugTwoTone twoToneColor="#eb2f96" />
                </span>
            </Footer>
        );
    }
}

export default DavidFooter;