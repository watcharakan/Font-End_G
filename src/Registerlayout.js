import React , {Component} from 'react';
import ReactGridLayout  from 'react-grid-layout';
import Inputarea from './components/inputarea';
import { Page, Panel, Button, ProgressBar, Input,EditableSelect, Select, Tabs, Tab } from 'react-blur-admin';
import ImagesUploader from 'react-images-uploader';

class Gridlayout extends Component {
    render() {
        const layout = [
            {i: 'a', x: 0, y: 0, w: 2, h: 5, static: true},
            {i: 'b', x: 8, y: 0, w: 2, h: 3, minW: 2, maxW: 4},
            {i: 'c', x: 5, y: 5, w: 2, h: 3}

        ];
        return (
            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">
                </div>
            </ReactGridLayout>
        );
    }
}
export default Regiserlayout;
