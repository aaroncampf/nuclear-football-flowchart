import { Component } from "@angular/core";
import { Data } from "./Data";

@Component({
    selector: "TestPlatformComponent",
    template: `
<label>{{title()}}</label>
<br />
<div *ngFor="let choice of CurrentItem.choices; let i=index">
    <button (click) = "onclick(choice);">{{choice.title}}</button>
</div>
`
})
export class TestPlatformComponent {
    public CurrentItem: FlowchartItem = null;
    public title = () => this.CurrentItem.title;

    constructor() {
        this.CurrentItem = Data[0];
    }


    public onclick(choice: FlowchartItem): void {
        this.CurrentItem = choice;
    }
}


