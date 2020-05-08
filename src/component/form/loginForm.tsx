import React from 'react';
import { connect } from 'react-redux';
import { Form, Select, Input, Button, message } from 'antd';

import { IStore } from '@/redux/type/storeType';
import { authorityInFun, IAuthorityIn } from '@/redux/action/authorityAction';
import { userOptionFetch, IOption } from '@/communication/authority/userOptionComm';
import { loginFetch } from '@/communication/authority/loginComm';

/**
 * 用户登录表单
 * 
 * @author David
 * @version 1.0
 */
const FormItem = Form.Item;
const { Option } = Select;

const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 16, span: 6 },
};

interface IProps {
    hasCollapsed: boolean;
    hasAuthority: boolean;
    id: number;
    name: string;
    authorityInFun(data: IStore): IAuthorityIn;
}

interface IState {
    data: IOption[];
    value: string;
}

class LoginBaseForm extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            data: [],
            value: ''
        }
    }

    public componentDidMount() {
    }

    public userOptionCom(query: string) {
        let content = {
            key: query
        }

        userOptionFetch('user/option', { json: JSON.stringify(content) })
        .then(response => {
            this.setState({ data: response.rowList })
        })
    }

    public onFinish = (values: any) => {
        loginFetch('authority/login', { json: JSON.stringify(values) })
        .then(response => {
            if(response.code === 0) {
                this.props.authorityInFun({
                    authorityReducer: {
                        hasAuthority: this.props.hasAuthority,
                        id: response.rowList[0].id,
                        name: response.rowList[0].name
                    },
                    siderReducer: {
                        hasCollapsed: this.props.hasCollapsed
                    }
                })
            } else {
                message.error('用户名或密码不正确');
            }
        })
    };

    public onFinishFailed = () => {};

    public handleSearch = (value: string) => {
        this.userOptionCom(value);
    };

    public handleChange = (value: string) => {
        this.setState({ value: value })
    };

    public render() {
        let options = null;
        if(typeof this.state.data != undefined) {
            options = this.state.data.map(
                d => <Option key = { d.key } value = { d.value }>{ d.text }</Option>
            );
        }

        return(
            <Form { ...formLayout } onFinish = { this.onFinish } onFinishFailed = { this.onFinishFailed }>
                <FormItem
                    label = '用户名'
                    name = 'id'
                    rules = {
                        [{ required: true, message: '请选择用户名!' }]
                    }>
                    <Select
                        showSearch = { true }
                        value = { this.state.value }
                        defaultActiveFirstOption = { false }
                        showArrow = { false }
                        filterOption = { false }
                        onSearch = { this.handleSearch }
                        onChange = { this.handleChange }>
                        { options }
                    </Select>
                </FormItem>
                <FormItem
                    label = '密码'
                    name = 'password'
                    rules = {
                        [{ required: true, message: '必须输入密码!' }]
                    }>
                   <Input.Password />
                </FormItem>
                <FormItem { ...tailLayout }>
                    <Button type = 'primary' htmlType = 'submit'>
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        hasCollapsed: state.siderReducer.hasCollapsed,
        hasAuthority: state.authorityReducer.hasAuthority,
        id: state.authorityReducer.id,
        name:  state.authorityReducer.name
    };
};
  
const actionCreator = {
    authorityInFun
};
  
const LoginForm = connect(mapStateToProps, actionCreator)(LoginBaseForm);

export default LoginForm;