import React from 'react';
import { RouteComponentProps, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import MainPage from '@/page/mainPage';
import LoginPage from '@/page/loginPage';
import { IStore } from '@/redux/type/storeType';

/**
 * 启动页面
 * 
 * @author David
 * @version 1.0
 */
interface IProps extends RouteComponentProps {
    hasAuthority: boolean;
}

class BaseApp extends React.Component<IProps> {
    public render() {
        return(
            <Route path='/' component = { this.props.hasAuthority ? MainPage : LoginPage } />
        );
    }
}

const mapStateToProps = ( state: IStore ) => {
    return({
        hasAuthority: state.authorityReducer.hasAuthority
    });
};

const actionCreator = {
};
  
const App = connect(mapStateToProps, actionCreator)(withRouter(BaseApp));

export default App;
