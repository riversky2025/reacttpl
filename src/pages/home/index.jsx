import React from 'react'
import {   inject,  observer} from 'mobx-react'
import {Button} from 'antd';
import './style.css'
import MyBreacCurb from '../../components/mybreadcrub'
@inject('store') @observer
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="div">
                <MyBreacCurb/>
                <h1>主页 </h1>
               
            </div>
        )
    }
}
