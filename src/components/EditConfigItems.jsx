import React, { Component } from 'react';
import ConfigItem from "./ConfigItem";
export default class EditConfigItems extends Component{
    state={
        configs: [
            {   id:1,
                key: "server",
                value: "www.facebook.com"
            },
            {
                id:2,
                key: "username",
                value: "a@asd.asd"
            },
            {   
                id:3,
                key: "pass",
                value: "qwerty"
            }
        ]
    };
    render(){
        return(
            <div className="config-items">
                {this.state.configs.map((config) => 
                    <div key={config.id} className="full-width">
                        <ConfigItem config={config} />
                    </div>
                )}
            </div>
        );
    }
}