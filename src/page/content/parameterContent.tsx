import React from 'react';
import { Form, Select, Input, Button, Divider, Table } from 'antd';

import { gridQueryFetch, IOption } from '@/communication/grid/queryComm';
import { gridDataFetch, IData } from '@/communication/grid/gridDataComm';


import '@/page/content/content.css';
/**
 * 系统参数
 * 
 * @author David
 * @version 1.0
 */
const FormItem = Form.Item;
const { Option } = Select;

interface IProps {
}

interface IState {
    condition: string;
    query: string;
    current: number;    // 当前页数
    pageSize: number;   // 每页条数
    total: number;  // 数据总数
    gridOption: IOption[];
    gridTitle: IOption[];
    gridData: IData[];
}

class ParameterContent extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            condition: 'id',
            query: '',
            current: 1,
            pageSize: 20,
            total: 0,
            gridOption: [],
            gridTitle: [],
            gridData: []
        }
    }

    public componentDidMount() {
        this.getConditionOption();
        this.getGridTitle();
        this.gridData();
    }

    public getConditionOption() {
        let content = {
            grid: 'Parameter'
        };

        gridQueryFetch('parameter/option', { json: JSON.stringify(content) })
        .then(response => {
            this.setState({ gridOption: response.rowList })
        })
    }

    public getGridTitle() {
        let content = {
            grid: 'Parameter'
        };

        gridQueryFetch('parameter/title', { json: JSON.stringify(content) })
        .then(response => {
            this.setState({ gridTitle: response.rowList })
        })
    }

    public gridData() {
        let content;
        if(this.state.query === '') {
            content = {
                page: this.state.current - 1,
                limit: this.state.pageSize,
                json: JSON.stringify({})
            }
        } else {
            let query = '{' + this.state.condition + ': \'' + this.state.query + '\'}';
            content = {
                page: this.state.current - 1,
                limit: this.state.pageSize,
                json: query
            }
        }

        gridDataFetch('parameter', content)
        .then(response => {
            this.setState({ gridData: response.rowList })
        })
    }

    public render() {
        let options = null;
        if(typeof this.state.gridOption != undefined) {
            options = this.state.gridOption.map(
                d => <Option key = { d.field } value = { d.field }>{ d.title }</Option>
            );
        }

        return(
            <div className = 'separate'>
                <Form layout = 'inline'>
                    <FormItem label = '查询内容' name = 'condition' rules = {
                        [{ required: true, message: '请选择查询条件' }]
                    }>
                        <Select defaultValue = 'id' style={{ width: 120 }}>
                            { options }
                        </Select>
                    </FormItem>
                    <FormItem name = 'query'>
                        <Input placeholder = '查询内容'>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type = 'primary'>查询</Button>
                    </FormItem>
                </Form>
                <Divider />
                <Table dataSource = { this.state.gridData } columns = { this.state.gridTitle } />;
            </div>
        );
    }
}

export default ParameterContent;