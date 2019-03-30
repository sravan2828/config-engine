import React, { Component } from 'react';
import { Icon } from 'antd';
export default class EditConfigItems extends Component{

    state = {
        editKey: false,
        editValue: false,
        key: this.props.key,
        value: this.props.value
    };
    
    render(){
        const {key, value} = this.props.config;
        const {editKey, editValue} = this.state;
        return(
            <div className="config-spacing">
                <div>
                    {editKey ?
                        <input
                            value={key}
                            name="key"
                        /> :
                        <span onClick={() => this.setState({editKey: true})}>{key}</span>} :
                    {editValue ?
                        <input
                            value={value}
                            name="value"
                        /> :
                        <span onClick={() => this.setState({editValue: true})}>{value}</span>}
                </div>
                    <Icon type="delete" />
            </div>
        );
    }
}