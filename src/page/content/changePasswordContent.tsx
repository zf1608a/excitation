import React from 'react';
import { Form, Button, Input } from 'antd';

/**
 * 修改用户密码
 * 
 * @author David
 * @version 1.0
 */
const { Item } = Form;
const { Password } = Input;

const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 16, span: 6 },
};

class ChangePasswordContent extends React.Component {
    public onFinish = ( values: any ) => {
        console.log(values);
    }

    render() {
        return(
            <Form
                { ...formLayout }
                name = 'changePassword'
                onFinish = { this.onFinish }
            >
                <Item
                    name = 'password'
                    label = '原来密码'
                    rules = {[
                        {
                            required: true,
                            message: '请输入原来登录密码'
                        }
                    ]}
                    hasFeedback
                >
                    <Password />
                </Item>
                <Item
                    name = 'newPassword'
                    label = '新密码'
                    rules = {[
                        {
                            required: true,
                            message: '请输入新密码'
                        }
                    ]}
                    hasFeedback
                >
                    <Password />
                </Item>
                <Item
                    name = 'confirm'
                    label = '确认密码'
                    dependencies={ ['newPassword'] }
                    rules = {[
                        {
                            required: true,
                            message: '请确认新密码'
                        }, ({ getFieldValue  }) => ({
                            validator(rule, value) {
                                if(!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('两次输入的密码不一致');
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Password />
                </Item>
                <Item { ...tailLayout }>
                    <Button type = 'primary' htmlType = 'submit'>
                        提交
                    </Button>
                </Item>
            </Form>
        );
    }
}

export default ChangePasswordContent;