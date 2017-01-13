import { Component } from '@angular/core';
//import { FlowchartItem } from './FlowchartItem';
//const Data: Array<FlowchartItem> = require("./Data.json!text").Data;
const Data: Array<FlowchartItem> = require("./Data.json").Data;


@Component({
    selector: 'TestPlatformComponent',
    template: `
<button (click) = "onclick();">Count {{Count}}</button>
`
})
export class TestPlatformComponent {
    public Count = 0;

    public onclick(): void {
        this.Count++
    }
}



//@Component({
//    selector: 'TestPlatformComponent',
//    template: `
//<label>{{title}}</label>
//<button (click) = "onclick();">Count {{Count}}</button>
//`
//})
//export class TestPlatformComponent {
//    public CurrentItem: FlowchartItem;
//    public title = () => this.CurrentItem.title;

//    public onclick(): void {
//        this.CurrentItem = this.CurrentItem.choices[0];
//    }
//}


