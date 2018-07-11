(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/views/chartjs/chartjs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/chartjs/chartjs-routing.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var chartjs_component_1 = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
var routes = [
    {
        path: '',
        component: chartjs_component_1.ChartJSComponent,
        data: {
            title: 'Charts'
        }
    }
];
var ChartJSRoutingModule = /** @class */ (function () {
    function ChartJSRoutingModule() {
    }
    ChartJSRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChartJSRoutingModule);
    return ChartJSRoutingModule;
}());
exports.ChartJSRoutingModule = ChartJSRoutingModule;


/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.html ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"card-columns cols-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Line Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColours\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Bar Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Doughnut Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [data]=\"doughnutChartData\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [chartType]=\"doughnutChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Radar Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"radarChartData\"\r\n          [labels]=\"radarChartLabels\"\r\n          [chartType]=\"radarChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Pie Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [data]=\"pieChartData\"\r\n          [labels]=\"pieChartLabels\"\r\n          [chartType]=\"pieChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Polar Area Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [data]=\"polarAreaChartData\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"polarAreaLegend\"\r\n          [chartType]=\"polarAreaChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.ts ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ChartJSComponent = /** @class */ (function () {
    function ChartJSComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    ChartJSComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartJSComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartJSComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./chartjs.component.html */ "./src/app/views/chartjs/chartjs.component.html")
        })
    ], ChartJSComponent);
    return ChartJSComponent;
}());
exports.ChartJSComponent = ChartJSComponent;


/***/ }),

/***/ "./src/app/views/chartjs/chartjs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.module.ts ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ng2_charts_1 = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
var chartjs_component_1 = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
var chartjs_routing_module_1 = __webpack_require__(/*! ./chartjs-routing.module */ "./src/app/views/chartjs/chartjs-routing.module.ts");
var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = __decorate([
        core_1.NgModule({
            imports: [
                chartjs_routing_module_1.ChartJSRoutingModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [chartjs_component_1.ChartJSComponent]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());
exports.ChartJSModule = ChartJSModule;


/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map