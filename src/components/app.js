import React, { Component } from 'react';
<<<<<<< HEAD
import { Page, Panel, Input, Table, TableHead, TableBody, TableRow, Textarea,Breadcrumbs, Button, Tab, Tabs  } from 'react-blur-admin';
import PieChart from 'react-minimal-pie-chart';
import * as FontAwesome from 'react-icons/lib/fa'


=======
import { Page, Panel, Input, Table, TableHead, TableBody, TableRow, Textarea,Breadcrumbs, Button  } from 'react-blur-admin';
>>>>>>> parent of 28cfac6... cal
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
