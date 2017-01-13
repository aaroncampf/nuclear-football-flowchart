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
//const Data: Array<FlowchartItem> = require("./Data.json").Data;
var Data_1 = require("./Data");
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
var TestPlatformComponent = (function () {
    function TestPlatformComponent() {
        var _this = this;
        this.CurrentItem = null;
        this.title = function () { return _this.CurrentItem.title; };
        this.CurrentItem = Data_1.Data[0];
    }
    TestPlatformComponent.prototype.onclick = function () {
        this.CurrentItem = this.CurrentItem.choices[0];
    };
    TestPlatformComponent = __decorate([
        core_1.Component({
            selector: 'TestPlatformComponent',
            template: "\n<label>{{title()}}</label>\n<br />\n<div *ngFor=\"let choice of CurrentItem.choices; let i=index\">\n    <button>{{choice.title}}</button>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], TestPlatformComponent);
    return TestPlatformComponent;
}());
exports.TestPlatformComponent = TestPlatformComponent;
//# sourceMappingURL=testplatform.component.js.map