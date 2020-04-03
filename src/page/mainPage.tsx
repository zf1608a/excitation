import React from 'react';

class MainPage extends React.Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (<div>hello</div>)
    }
}

export default MainPage;