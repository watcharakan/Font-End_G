import React , {Component} from 'react';
import ReactGridLayout  from 'react-grid-layout';
import Inputarea from './components/inputarea';
import { Page, Panel, Button, ProgressBar, Input,EditableSelect, Select, Tabs, Tab } from 'react-blur-admin';
import ImagesUploader from 'react-images-uploader';
class Gridlayout extends Component {
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
        const layout = [
            {i: 'a', x: 0, y: 0, w: 25, h: 130, static: true},
            {i: 'x', x: 0, y: 0, w: 25, h: 5, static: false},
            {i: 'y', x: 0, y: 0, w: 2, h: 3, static: true},
            {i: 'z', x: 0, y: 0, w: 2, h: 3, static: true},
            {i: 'a', x: 0, y: 0, w: 10, h: 40, static: true},
            {i: 'b', x: 15, y: 0, w: 2, h: 3, minW: 2, maxW: 4},
            {i: 'c', x: 20, y: 5, w: 2, h: 3}

        ];
        return (


            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key = "x">
                    <Panel>
                        React simple starter
                    </Panel>

                    <Panel>
                        <ProgressBar type='primary' percentage={[15]} label={"15 Complete"}/>
                    </Panel>
                </div>
                <Panel>
                    React simple starter
                </Panel>

                <Panel>
                    <ProgressBar type='primary' percentage={[15]} label={"15 Complete"}/>
                </Panel>
                <div key="a">
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
                        <Input
                            onChange={e => this.onTextChange('success', e)}
                            onValidate={e => true}
                            label='Success'
                            value={this.state.success} />


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
                                        <Tab title='Register2'>
                                            <p>PropTypes for Dayz</p>
                                        </Tab>

                    </Tabs>
                </div>

            </ReactGridLayout>
        );
    }
}
export default Gridlayout;
