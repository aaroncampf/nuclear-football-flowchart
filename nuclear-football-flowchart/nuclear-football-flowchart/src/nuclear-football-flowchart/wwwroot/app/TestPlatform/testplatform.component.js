"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { FlowchartItem } from './FlowchartItem';
//const Data: Array<FlowchartItem> = require("./Data.json!text").Data;
var Data = require("./Data.json").Data;
var TestPlatformComponent = (function () {
    function TestPlatformComponent() {
        this.Count = 0;
    }
    TestPlatformComponent.prototype.onclick = function () {
        this.Count++;
    };
    TestPlatformComponent = __decorate([
        core_1.Component({
            selector: 'TestPlatformComponent',
            template: "\n<button (click) = \"onclick();\">Count {{Count}}</button>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], TestPlatformComponent);
    return TestPlatformComponent;
}());
exports.TestPlatformComponent = TestPlatformComponent;
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
//# sourceMappingURL=testplatform.component.js.map