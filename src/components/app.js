import React, { Component } from 'react';
import { Page, Panel, Input, Table, TableHead, TableBody, TableRow, Textarea,Breadcrumbs, Button, Tab, Tabs  } from 'react-blur-admin';
import PieChart from 'react-minimal-pie-chart';
import * as FontAwesome from 'react-icons/lib/fa'


export default class App extends Component {

  render() {
    return (
      <div >

      <Panel>React simple starter</Panel>
      <FontAwesome.FaBeer />


      <PieChart
      radius = {20}
      paddingAngle
      lineWidth = {30}
        data={[
          { value: 10, key: 1, color: '#E38627' },
          { value: 15, key: 2, color: '#C13C37' },
          { value: 20, key: 3, color: '#6A2135' },
        ]}
      />


      <Input
               onChange={e => this.onTextChange('success', e)}
               onValidate={e => true}
               label='Success'
               />
<Textarea />
<Tabs
         align='top'
         startTab={2} >
         <Tab title='Travel'>
           <h2>HEY</h2>

         </Tab>
         <Tab title='Tabs 2'>
           <h2>The Tabs Component</h2>
           
         </Tab>
       </Tabs>
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
