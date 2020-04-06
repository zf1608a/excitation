import React from 'react';
import { Layout } from 'antd';
import { BugTwoTone } from '@ant-design/icons';

const { Footer  } = Layout;

class DavidFooter extends React.Component {
    render() {
        return(
            <Footer>
                员工营销系统 © 2020 Created by David
                <span>
                    <BugTwoTone twoToneColor="#eb2f96" />
                </span>
                .
            </Footer>
        );
    }
}

export default DavidFooter;