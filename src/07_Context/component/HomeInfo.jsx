import React, { Component } from 'react';
import HomeTitle from './HomeTitle';
import HomeBanner from './HomeBanner';

class HomeInfo extends Component {
    render() {
        return (
            <div>
                我是第一个子级 
                <HomeTitle />
                <HomeBanner/>
            </div>
        );
    }
}

export default HomeInfo;


