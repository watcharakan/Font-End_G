import React, { Component } from 'react';
import { Page, Panel, Button, ProgressBar, Input,EditableSelect, Select, Tabs, Tab } from 'react-blur-admin';
import Information from './Information'

export default class RegisterIndex extends Component {

    render() {
        return (

            <div>
                <Panel>
                    React simple starter
                </Panel>

                <Panel>
                    <ProgressBar type='primary' percentage={[15]} label={"15 Complete"}/>
                </Panel>

                <Tabs>
                        <Tab title='ข้อมูลส่วนตัว'>
                           <Information/>
                        </Tab>

                        <Tab title='ยืนยันตัวตน'>

                        </Tab>

                        <Tab title='ความสามารถ'>

                        </Tab>
                </Tabs>


            </div>

        );
    }
}