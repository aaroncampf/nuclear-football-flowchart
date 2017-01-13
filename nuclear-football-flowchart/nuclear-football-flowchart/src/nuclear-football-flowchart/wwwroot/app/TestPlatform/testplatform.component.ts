import { Component } from '@angular/core';
//import { FlowchartItem } from './FlowchartItem';
//const Data: Array<FlowchartItem> = require("./Data.json!text").Data;
//const Data: Array<FlowchartItem> = require("./Data.json").Data;
import { Data } from "./Data";

//@Component({
//    selector: 'TestPlatformComponent',
//    template: `
//<button (click) = "onclick();">Count {{Count}}</button>
//`
//})
//export class TestPlatformComponent {
//    public Count = 0;

//    public onclick(): void {
//        this.Count++
//    }
//}



@Component({
    selector: 'TestPlatformComponent',
    template: `
<label>{{title()}}</label>
<br />
<div *ngFor="let choice of CurrentItem.choices; let i=index">
    <button>{{choice.title}}</button>
</div>
`
})
export class TestPlatformComponent {
    public CurrentItem: FlowchartItem = null;
    public title = () => this.CurrentItem.title;

    constructor() {
        this.CurrentItem = Data[0]
    }


    public onclick(): void {
        this.CurrentItem = this.CurrentItem.choices[0];
    }
}


