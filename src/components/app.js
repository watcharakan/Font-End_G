import React, { Component } from 'react';
import { Page, Panel, Button, ProgressBar } from 'react-blur-admin';

export default class App extends Component {
  render() {
    return (

      <div>
      <Panel>
      React simple starter
      </Panel>
      <Button type='default' size='lg' />
        <Panel>
        
      <ProgressBar type='primary' percentage={[15]} label={"15 Complete"}/>
       </Panel>
      </div>
    );
  }
}
