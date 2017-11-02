import React, { Component } from 'react';
import { Page, Panel, Input, Table, TableHead, TableBody, TableRow, Textarea,Breadcrumbs, Button  } from 'react-blur-admin';
export default class App extends Component {

  render() {
    return (
      <div >

      <Panel>React simple starter</Panel>



      <Input
               onChange={e => this.onTextChange('success', e)}
               onValidate={e => true}
               label='Success'
               />
<Textarea />

<Button type='warning' size='xm' />

                    <Page>
                    <Panel title='The Team'>
                    Lorem Ipsum
                    </Panel>
                    </Page>
    </div>
    );
  }
}
