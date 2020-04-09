import React from 'react';
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
interface IProps {
    hasAuthority: boolean;
}

class BaseApp extends React.Component<IProps> {
    public render() {
        const indexPage = this.props.hasAuthority ? <MainPage /> : <LoginPage />
        return(
            indexPage
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
  
const App = connect(mapStateToProps, actionCreator)(BaseApp);

export default App;
