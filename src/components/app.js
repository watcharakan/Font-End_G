import React, { Component } from 'react';
import { Page, Panel, Button, ProgressBar, Input,EditableSelect, Select, Tabs, Tab } from 'react-blur-admin';
import ImagesUploader from 'react-images-uploader';


export default class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     switches: _.fill(Array(5), true),
     editableSelect3: 1,
   };
 }
  onSelectChange(key, value) {
    this.setState({ [key]: value});
 }

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
    <Tab title='Register'>
    <ImagesUploader
              url="http://localhost:8080/notmultiple"
              optimisticPreviews={true}
              multiple={false}
              onLoadEnd={(err) => {
                  if (err) {
                      console.error(err);
                  }
              }}
              label="Upload a picture"
              />
        <Input
               onChange={e => this.onTextChange('success', e)}
                onValidate={e => true}
                label='Success'
                value={this.state.success} />

        <EditableSelect
                    placeholder='With Search'
                    label='Editable Select Label'
                    isSearchable={true}
                    options={[
                      { value: 1, label: 'One' },
                      { value: 2, label: 'Two' },
                      { value: 3, label: 'Three' },
                      { value: 4, label: 'Four' },
                      { value: 5, label: 'Five' },
                      { value: 6, label: 'Six' },
                    ]}
                    onChange={value => this.onSelectChange('editableSelect2', value)}
                    value={this.state.editableSelect2} />

                    <Panel title='เพศ'>
                               <Input
                                 type='radio'
                                 name='firstSet'
                                 label='ชาย'
                                 onChange={e => {}} />

                               <Input
                                 type='radio'
                                 name='firstSet'
                                 label='หญิง'
                                 onChange={e => {}} />

                               <Input
                                 type='radio'
                                 name='firstSet'
                                 label='เพศทางเลือก'
                                 onChange={e => {}} />
                             </Panel>
    </Tab>
</Tabs>
</div>
    );
  }
}
