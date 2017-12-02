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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var round_progress_1 = require("round-progress");
var DemoComponent = (function () {
    function DemoComponent(_ease) {
        this._ease = _ease;
        this.current = 27;
        this.max = 50;
        this.stroke = 15;
        this.radius = 125;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = false;
        this.clockwise = true;
        this.color = '#45ccce';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 0;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        // Kinda hacky way to get all of the easing functions at run-time, because it can
        // technically fetch something from up the prototype chain.
        for (var prop in _ease) {
            if (prop.toLowerCase().indexOf('ease') > -1) {
                this.animations.push(prop);
            }
            ;
        }
    }
    DemoComponent.prototype.increment = function (amount) {
        if (amount === void 0) { amount = 1; }
        this.current += amount;
    };
    DemoComponent.prototype.getOverlayStyle = function () {
        var isSemi = this.semicircle;
        var transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.5 + 'px'
        };
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'demo',
            templateUrl: './demo.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [round_progress_1.RoundProgressEase])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
;
//# sourceMappingURL=demo.component.js.map