import React, { Component } from 'react';
import { Button, Icon, Card } from 'antd';
import EditConfigItems from "./EditConfigItems";

export default class ConfigContainer extends Component{
    render(){
        return(
            <div className="config-container">
                <div className="config-head">
                    <h4><Icon type="edit" /> Unsaved</h4>
                    <h2>config.properties</h2>
                    <div>
                        <Button className="conf-button" type="primary">Save</Button>
                        <Button className="conf-button" type="primary">Deploy</Button>
                    </div>
                </div>
                <div className="conf-edit">
                    <div className="conf-row">
                        <Card
                            title="App"
                            className="edit-item-card"
                            extra={<Icon type="delete" />}
                            style={{ width: 300 }}
                            >
                            <EditConfigItems/>
                        </Card>
                    </div>
                    <div className="conf-row">
                        <Card
                            title="App"
                            className="edit-item-card"
                            extra={<Icon type="delete" />}
                            style={{ width: 300 }}
                            >
                            <EditConfigItems/>
                        </Card>
                    </div>
                    <div className="conf-row">
                        <Card
                            title="App"
                            className="edit-item-card"
                            extra={<Icon type="delete" />}
                            style={{ width: 300 }}
                            >
                            <EditConfigItems/>
                        </Card>
                    </div>
                    
                </div>
            </div>
        );
    }
}