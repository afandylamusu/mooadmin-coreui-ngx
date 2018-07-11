(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/ngx-bootstrap/carousel/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/index.js + 4 modules ***!
  \******************************************************************/
/*! exports provided: CarouselComponent, CarouselModule, SlideComponent, CarouselConfig */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/common/fesm5/common.js (<- Module is referenced from these modules with unsupported syntax: ./src/app/app.module.ts (referenced with cjs require), ./src/app/views/base/base.module.ts (referenced with cjs require), ./src/app/views/buttons/buttons.module.ts (referenced with cjs require), ./src/app/views/notifications/notifications.module.ts (referenced with cjs require), ./src/app/views/theme/theme.module.ts (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/index.js because of ./node_modules/ngx-bootstrap/progressbar/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/index.js + 1 modules
var utils = __webpack_require__("./node_modules/ngx-bootstrap/utils/index.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/carousel/carousel.config.js

var carousel_config_CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /** Show carousel-indicators */
        this.showIndicators = true;
    }
    CarouselConfig.decorators = [
        { type: core["Injectable"] },
    ];
    return CarouselConfig;
}());

//# sourceMappingURL=carousel.config.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/carousel/carousel.component.js
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var carousel_component_CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new core["EventEmitter"](false);
        this._slides = new utils["LinkedList"]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        set: /** Index of currently displayed slide(started for 0) */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
           * Delay of item cycling in milliseconds. If false, carousel won't cycle
           * automatically.
           */
        function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !Object(utils["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
       * Adds new slide. If this slide is first in collection - set it as active
       * and starts auto changing
       * @param slide
       */
    CarouselComponent.prototype.addSlide = /**
       * Adds new slide. If this slide is first in collection - set it as active
       * and starts auto changing
       * @param slide
       */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
       * Removes specified slide. If this slide is active - will roll to another
       * slide
       * @param slide
       */
    CarouselComponent.prototype.removeSlide = /**
       * Removes specified slide. If this slide is active - will roll to another
       * slide
       * @param slide
       */
    function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
       * Rolling to next slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    CarouselComponent.prototype.nextSlide = /**
       * Rolling to next slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
       * Rolling to previous slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    CarouselComponent.prototype.previousSlide = /**
       * Rolling to previous slide
       * @param force: {boolean} if true - will ignore noWrap flag
       */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
       * Rolling to specified slide
       * @param index: {number} index of slide, which must be shown
       */
    CarouselComponent.prototype.selectSlide = /**
       * Rolling to specified slide
       * @param index: {number} index of slide, which must be shown
       */
    function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    /**
       * Starts a auto changing of slides
       */
    CarouselComponent.prototype.play = /**
       * Starts a auto changing of slides
       */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
       * Stops a auto changing of slides
       */
    CarouselComponent.prototype.pause = /**
       * Stops a auto changing of slides
       */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    /**
       * Finds and returns index of currently displayed slide
       * @returns {number}
       */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
       * Finds and returns index of currently displayed slide
       * @returns {number}
       */
    function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    /**
       * Defines, whether the specified index is last in collection
       * @param index
       * @returns {boolean}
       */
    CarouselComponent.prototype.isLast = /**
       * Defines, whether the specified index is last in collection
       * @param index
       * @returns {boolean}
       */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    /**
       * Defines next slide index, depending of direction
       * @param direction: Direction(UNKNOWN|PREV|NEXT)
       * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
       *   return undefined if next slide require wrapping
       * @returns {any}
       */
    CarouselComponent.prototype.findNextSlideIndex = /**
       * Defines next slide index, depending of direction
       * @param direction: Direction(UNKNOWN|PREV|NEXT)
       * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
       *   return undefined if next slide require wrapping
       * @returns {any}
       */
    function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    /**
       * Sets a slide, which specified through index, as active
       * @param index
       * @private
       */
    CarouselComponent.prototype._select = /**
       * Sets a slide, which specified through index, as active
       * @param index
       * @private
       */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    /**
       * Starts loop of auto changing of slides
       */
    CarouselComponent.prototype.restartTimer = /**
       * Starts loop of auto changing of slides
       */
    function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    /**
       * Stops loop of auto changing of slides
       */
    CarouselComponent.prototype.resetTimer = /**
       * Stops loop of auto changing of slides
       */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\"> <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: carousel_config_CarouselConfig, },
        { type: core["NgZone"], },
    ]; };
    CarouselComponent.propDecorators = {
        "noWrap": [{ type: core["Input"] },],
        "noPause": [{ type: core["Input"] },],
        "showIndicators": [{ type: core["Input"] },],
        "activeSlideChange": [{ type: core["Output"] },],
        "activeSlide": [{ type: core["Input"] },],
        "interval": [{ type: core["Input"] },],
    };
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/carousel/slide.component.js


var slide_component_SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = /** Fires changes in container collection after adding a new slide instance */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = /** Fires changes in container collection after removing of this slide instance */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: carousel_component_CarouselComponent, },
    ]; };
    SlideComponent.propDecorators = {
        "active": [{ type: core["HostBinding"], args: ['class.active',] }, { type: core["Input"] },],
        "addClass": [{ type: core["HostBinding"], args: ['class.item',] }, { type: core["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());

//# sourceMappingURL=slide.component.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/carousel/carousel.module.js





var carousel_module_CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: core["NgModule"], args: [{
                    imports: [common["CommonModule"]],
                    declarations: [slide_component_SlideComponent, carousel_component_CarouselComponent],
                    exports: [slide_component_SlideComponent, carousel_component_CarouselComponent],
                    providers: [carousel_config_CarouselConfig]
                },] },
    ];
    return CarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/carousel/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return carousel_component_CarouselComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return carousel_module_CarouselModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return slide_component_SlideComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return carousel_config_CarouselConfig; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/index.js + 2 modules ***!
  \******************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/collapse/collapse.directive.js

var collapse_directive_CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new core["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new core["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        set: /** A flag indicating visibility of content (shown or hidden) */
        function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = /** allows to manually toggle content visibility */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = /** allows to manually hide content */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = /** allows to manually show collapsed content */
    function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: core["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: core["ElementRef"], },
        { type: core["Renderer2"], },
    ]; };
    CollapseDirective.propDecorators = {
        "collapsed": [{ type: core["Output"] },],
        "expanded": [{ type: core["Output"] },],
        "display": [{ type: core["HostBinding"], args: ['style.display',] },],
        "isExpanded": [{ type: core["HostBinding"], args: ['class.in',] }, { type: core["HostBinding"], args: ['class.show',] }, { type: core["HostBinding"], args: ['attr.aria-expanded',] },],
        "isCollapsed": [{ type: core["HostBinding"], args: ['attr.aria-hidden',] },],
        "isCollapse": [{ type: core["HostBinding"], args: ['class.collapse',] },],
        "isCollapsing": [{ type: core["HostBinding"], args: ['class.collapsing',] },],
        "collapse": [{ type: core["Input"] },],
    };
    return CollapseDirective;
}());

//# sourceMappingURL=collapse.directive.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/collapse/collapse.module.js


var collapse_module_CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: core["NgModule"], args: [{
                    declarations: [collapse_directive_CollapseDirective],
                    exports: [collapse_directive_CollapseDirective]
                },] },
    ];
    return CollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/collapse/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return collapse_directive_CollapseDirective; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return collapse_module_CollapseModule; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/index.js + 4 modules ***!
  \********************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationModule, PaginationConfig */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/common/fesm5/common.js (<- Module is referenced from these modules with unsupported syntax: ./src/app/app.module.ts (referenced with cjs require), ./src/app/views/base/base.module.ts (referenced with cjs require), ./src/app/views/buttons/buttons.module.ts (referenced with cjs require), ./src/app/views/notifications/notifications.module.ts (referenced with cjs require), ./src/app/views/theme/theme.module.ts (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/forms/fesm5/forms.js (<- Module is referenced from these modules with unsupported syntax: ./src/app/views/base/base.module.ts (referenced with cjs require), ./src/app/views/buttons/buttons.module.ts (referenced with cjs require), ./src/app/views/dashboard/dashboard.module.ts (referenced with cjs require)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm5/forms.js
var fesm5_forms = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/pagination/pagination.config.js

/** Provides default values for Pagination and pager components */
var pagination_config_PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: core["Injectable"] },
    ];
    return PaginationConfig;
}());

//# sourceMappingURL=pagination.config.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/pagination/pager.component.js



var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: fesm5_forms["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(core["forwardRef"])(function () { return pager_component_PagerComponent; }),
    multi: true
};
var pager_component_PagerComponent = /** @class */ (function () {
    function PagerComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new core["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
           * object with current page index and number of items per page
           */
        this.pageChanged = new core["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        get: /** maximum number of items per page. If value less than 1 will display all items on one page */
        function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        get: /** total number of items in all pages */
        function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    PagerComponent.prototype.makePage = 
    // Create page object used in template
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    PagerComponent.prototype.calculateTotalPages = 
    // base class
    function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\"> <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a> </li> <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a> </li> </ul> ",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: core["Renderer2"], },
        { type: core["ElementRef"], },
        { type: pagination_config_PaginationConfig, },
        { type: core["ChangeDetectorRef"], },
    ]; };
    PagerComponent.propDecorators = {
        "align": [{ type: core["Input"] },],
        "maxSize": [{ type: core["Input"] },],
        "boundaryLinks": [{ type: core["Input"] },],
        "directionLinks": [{ type: core["Input"] },],
        "firstText": [{ type: core["Input"] },],
        "previousText": [{ type: core["Input"] },],
        "nextText": [{ type: core["Input"] },],
        "lastText": [{ type: core["Input"] },],
        "rotate": [{ type: core["Input"] },],
        "pageBtnClass": [{ type: core["Input"] },],
        "disabled": [{ type: core["Input"] },],
        "numPages": [{ type: core["Output"] },],
        "pageChanged": [{ type: core["Output"] },],
        "itemsPerPage": [{ type: core["Input"] },],
        "totalItems": [{ type: core["Input"] },],
    };
    return PagerComponent;
}());

//# sourceMappingURL=pager.component.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/pagination/pagination.component.js



var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: fesm5_forms["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(core["forwardRef"])(function () { return pagination_component_PaginationComponent; }),
    multi: true
};
var pagination_component_PaginationComponent = /** @class */ (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new core["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
           * with current page index and number of items per page
           */
        this.pageChanged = new core["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        get: /** maximum number of items per page. If value less than 1 will display all items on one page */
        function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: /** total number of items in all pages */
        function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    PaginationComponent.prototype.makePage = 
    // Create page object used in template
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    PaginationComponent.prototype.calculateTotalPages = 
    // base class
    function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\"> <li class=\"pagination-first page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a> </li> <li class=\"pagination-prev page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a> </li> <li *ngFor=\"let pg of pages\" [class.active]=\"pg.active\" [class.disabled]=\"disabled&&!pg.active\" class=\"pagination-page page-item\"> <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a> </li> <li class=\"pagination-next page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li> <li class=\"pagination-last page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li> </ul> ",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: core["Renderer2"], },
        { type: core["ElementRef"], },
        { type: pagination_config_PaginationConfig, },
        { type: core["ChangeDetectorRef"], },
    ]; };
    PaginationComponent.propDecorators = {
        "align": [{ type: core["Input"] },],
        "maxSize": [{ type: core["Input"] },],
        "boundaryLinks": [{ type: core["Input"] },],
        "directionLinks": [{ type: core["Input"] },],
        "firstText": [{ type: core["Input"] },],
        "previousText": [{ type: core["Input"] },],
        "nextText": [{ type: core["Input"] },],
        "lastText": [{ type: core["Input"] },],
        "rotate": [{ type: core["Input"] },],
        "pageBtnClass": [{ type: core["Input"] },],
        "disabled": [{ type: core["Input"] },],
        "numPages": [{ type: core["Output"] },],
        "pageChanged": [{ type: core["Output"] },],
        "itemsPerPage": [{ type: core["Input"] },],
        "totalItems": [{ type: core["Input"] },],
    };
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/pagination/pagination.module.js





var pagination_module_PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [pagination_config_PaginationConfig] };
    };
    PaginationModule.decorators = [
        { type: core["NgModule"], args: [{
                    imports: [common["CommonModule"]],
                    declarations: [pager_component_PagerComponent, pagination_component_PaginationComponent],
                    exports: [pager_component_PagerComponent, pagination_component_PaginationComponent]
                },] },
    ];
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/pagination/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return pager_component_PagerComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return pagination_component_PaginationComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return pagination_module_PaginationModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return pagination_config_PaginationConfig; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/index.js + 4 modules ***!
  \*****************************************************************/
/*! exports provided: PopoverDirective, PopoverModule, PopoverConfig, PopoverContainerComponent */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/common/fesm5/common.js (<- Module is referenced from these modules with unsupported syntax: ./src/app/app.module.ts (referenced with cjs require), ./src/app/views/base/base.module.ts (referenced with cjs require), ./src/app/views/buttons/buttons.module.ts (referenced with cjs require), ./src/app/views/notifications/notifications.module.ts (referenced with cjs require), ./src/app/views/theme/theme.module.ts (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/component-loader/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/positioning/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/theme-provider.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/popover/popover.config.js

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var popover_config_PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
           * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
           */
        this.placement = 'top';
        /**
           * Specifies events that should trigger. Supports a space separated list of
           * event names.
           */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: core["Injectable"] },
    ];
    return PopoverConfig;
}());

//# sourceMappingURL=popover.config.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/component-loader/index.js
var component_loader = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/theme-provider.js
var theme_provider = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/popover/popover-container.component.js



var popover_container_component_PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(theme_provider["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: core["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    styles: [
                        "\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -8px;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -8px;\n    }\n  "
                    ],
                    template: "<div class=\"popover-arrow arrow\"></div> <h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3> <div class=\"popover-content popover-body\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: popover_config_PopoverConfig, },
    ]; };
    PopoverContainerComponent.propDecorators = {
        "placement": [{ type: core["Input"] },],
        "title": [{ type: core["Input"] },],
    };
    return PopoverContainerComponent;
}());

//# sourceMappingURL=popover-container.component.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/popover/popover.directive.js




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var popover_directive_PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
           * Close popover on outside click
           */
        this.outsideClick = false;
        /**
           * Css class for popover container
           */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: popover_config_PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        get: /**
           * Returns whether or not the popover is currently being shown
           */
        function () {
            return this._popover.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    PopoverDirective.prototype.show = /**
       * Opens an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(popover_container_component_PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    PopoverDirective.prototype.hide = /**
       * Closes an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    PopoverDirective.prototype.toggle = /**
       * Toggles an element’s popover. This is considered a “manual” triggering of
       * the popover.
       */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: core["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: core["ElementRef"], },
        { type: core["Renderer2"], },
        { type: core["ViewContainerRef"], },
        { type: popover_config_PopoverConfig, },
        { type: component_loader["ComponentLoaderFactory"], },
    ]; };
    PopoverDirective.propDecorators = {
        "popover": [{ type: core["Input"] },],
        "popoverContext": [{ type: core["Input"] },],
        "popoverTitle": [{ type: core["Input"] },],
        "placement": [{ type: core["Input"] },],
        "outsideClick": [{ type: core["Input"] },],
        "triggers": [{ type: core["Input"] },],
        "container": [{ type: core["Input"] },],
        "containerClass": [{ type: core["Input"] },],
        "isOpen": [{ type: core["Input"] },],
        "onShown": [{ type: core["Output"] },],
        "onHidden": [{ type: core["Output"] },],
    };
    return PopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/positioning/index.js + 2 modules
var positioning = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/popover/popover.module.js







var popover_module_PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [popover_config_PopoverConfig, component_loader["ComponentLoaderFactory"], positioning["PositioningService"]]
        };
    };
    PopoverModule.decorators = [
        { type: core["NgModule"], args: [{
                    imports: [common["CommonModule"]],
                    declarations: [popover_directive_PopoverDirective, popover_container_component_PopoverContainerComponent],
                    exports: [popover_directive_PopoverDirective],
                    entryComponents: [popover_container_component_PopoverContainerComponent]
                },] },
    ];
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/popover/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return popover_directive_PopoverDirective; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return popover_module_PopoverModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return popover_config_PopoverConfig; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return popover_container_component_PopoverContainerComponent; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/index.js + 4 modules ***!
  \*********************************************************************/
/*! exports provided: BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/common/fesm5/common.js (<- Module is referenced from these modules with unsupported syntax: ./src/app/app.module.ts (referenced with cjs require), ./src/app/views/base/base.module.ts (referenced with cjs require), ./src/app/views/buttons/buttons.module.ts (referenced with cjs require), ./src/app/views/notifications/notifications.module.ts (referenced with cjs require), ./src/app/views/theme/theme.module.ts (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/index.js because of ./node_modules/ngx-bootstrap/carousel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/theme-provider.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/progressbar/progressbar.config.js

var progressbar_config_ProgressbarConfig = /** @class */ (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: core["Injectable"] },
    ];
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/index.js + 1 modules
var utils = __webpack_require__("./node_modules/ngx-bootstrap/utils/index.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/progressbar/progressbar.component.js



var progressbar_component_ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        set: /** current value of progress bar. Could be a number or array of objects
           * like {"value":15,"type":"info","label":"15 %"}
           */
        function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return Object(utils["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        get: /** maximum total value of progress element */
        function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.prototype.addBar = function (bar) {
        bar.animate = this.animate;
        bar.striped = this.striped;
        this.bars.push(bar);
    };
    ProgressbarComponent.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar> </ng-template> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: progressbar_config_ProgressbarConfig, },
    ]; };
    ProgressbarComponent.propDecorators = {
        "animate": [{ type: core["Input"] },],
        "striped": [{ type: core["Input"] },],
        "type": [{ type: core["Input"] },],
        "value": [{ type: core["Input"] },],
        "max": [{ type: core["HostBinding"], args: ['attr.max',] }, { type: core["Input"] },],
        "addClass": [{ type: core["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/theme-provider.js
var theme_provider = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/progressbar/bar.component.js



// todo: number pipe
// todo: use query from progress?
var bar_component_BarComponent = /** @class */ (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        get: /** current value of progress bar */
        function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return Object(theme_provider["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content> ",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: progressbar_component_ProgressbarComponent, decorators: [{ type: core["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        "type": [{ type: core["Input"] },],
        "value": [{ type: core["Input"] },],
        "setBarWidth": [{ type: core["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/progressbar/progressbar.module.js





var progressbar_module_ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [progressbar_config_ProgressbarConfig] };
    };
    ProgressbarModule.decorators = [
        { type: core["NgModule"], args: [{
                    imports: [common["CommonModule"]],
                    declarations: [bar_component_BarComponent, progressbar_component_ProgressbarComponent],
                    exports: [bar_component_BarComponent, progressbar_component_ProgressbarComponent]
                },] },
    ];
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/progressbar/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BarComponent", function() { return bar_component_BarComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return progressbar_component_ProgressbarComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return progressbar_module_ProgressbarModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return progressbar_config_ProgressbarConfig; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/index.js + 5 modules ***!
  \*****************************************************************/
/*! exports provided: TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/common/fesm5/common.js (<- Module is referenced from these modules with unsupported syntax: ./src/app/app.module.ts (referenced with cjs require), ./src/app/views/base/base.module.ts (referenced with cjs require), ./src/app/views/buttons/buttons.module.ts (referenced with cjs require), ./src/app/views/notifications/notifications.module.ts (referenced with cjs require), ./src/app/views/theme/theme.module.ts (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/component-loader/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/positioning/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/decorators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/theme-provider.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/triggers.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rxjs/_esm5/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/tooltip/tooltip.config.js

/** Default values provider for tooltip */
var tooltip_config_TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: core["Injectable"] },
    ];
    return TooltipConfig;
}());

//# sourceMappingURL=tooltip.config.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/theme-provider.js
var theme_provider = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js



var tooltip_container_component_TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(theme_provider["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: core["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: core["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    styles: [
                        "\n    :host.tooltip {\n      display: block;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n      margin-left: -6px;\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n      margin-top: -6px;\n    }\n  "
                    ],
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: tooltip_config_TooltipConfig, },
    ]; };
    return TooltipContainerComponent;
}());

//# sourceMappingURL=tooltip-container.component.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/component-loader/index.js
var component_loader = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/decorators.js
var decorators = __webpack_require__("./node_modules/ngx-bootstrap/utils/decorators.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/utils/warn-once.js

var _messagesHash = {};
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!Object(core["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=warn-once.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/triggers.js
var utils_triggers = __webpack_require__("./node_modules/ngx-bootstrap/utils/triggers.js");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/index.js + 18 modules
var _esm5 = __webpack_require__("./node_modules/rxjs/_esm5/index.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var tooltip_directive_TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Fired when tooltip content changes */
        this.tooltipChange = new core["EventEmitter"]();
        /**
           * Css class for tooltip container
           */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new core["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: tooltip_config_TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        get: /**
           * Returns whether or not the tooltip is currently being shown
           */
        function () {
            return this._tooltip.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        set: /** @deprecated - please use `tooltip` instead */
        function (value) {
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        set: /** @deprecated - please use `placement` instead */
        function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        set: /** @deprecated - please use `isOpen` instead*/
        function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        set: /** @deprecated - please use `isDisabled` instead */
        function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        set: /** @deprecated - please use `container="body"` instead */
        function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        set: /** @deprecated - will replaced with customClass */
        function (value) {
            warnOnce('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        set: /** @deprecated - removed */
        function (value) {
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        set: /** @deprecated */
        function (value) {
            warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        get: /** @deprecated -  please use `triggers` instead */
        function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    TooltipDirective.prototype.toggle = /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    TooltipDirective.prototype.show = /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(tooltip_container_component_TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass
            });
        };
        var cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var _timer_1 = Object(_esm5["timer"])(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var triggers = Object(utils_triggers["parseTriggers"])(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    _timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    TooltipDirective.prototype.hide = /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of
       * the tooltip.
       */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: core["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: core["ViewContainerRef"], },
        { type: core["Renderer2"], },
        { type: core["ElementRef"], },
        { type: component_loader["ComponentLoaderFactory"], },
        { type: tooltip_config_TooltipConfig, },
    ]; };
    TooltipDirective.propDecorators = {
        "tooltip": [{ type: core["Input"] },],
        "tooltipChange": [{ type: core["Output"] },],
        "placement": [{ type: core["Input"] },],
        "triggers": [{ type: core["Input"] },],
        "container": [{ type: core["Input"] },],
        "isOpen": [{ type: core["Input"] },],
        "isDisabled": [{ type: core["Input"] },],
        "containerClass": [{ type: core["Input"] },],
        "delay": [{ type: core["Input"] },],
        "onShown": [{ type: core["Output"] },],
        "onHidden": [{ type: core["Output"] },],
        "htmlContent": [{ type: core["Input"], args: ['tooltipHtml',] },],
        "_placement": [{ type: core["Input"], args: ['tooltipPlacement',] },],
        "_isOpen": [{ type: core["Input"], args: ['tooltipIsOpen',] },],
        "_enable": [{ type: core["Input"], args: ['tooltipEnable',] },],
        "_appendToBody": [{ type: core["Input"], args: ['tooltipAppendToBody',] },],
        "_animation": [{ type: core["Input"], args: ['tooltipAnimation',] },],
        "_popupClass": [{ type: core["Input"], args: ['tooltipClass',] },],
        "_tooltipContext": [{ type: core["Input"], args: ['tooltipContext',] },],
        "_tooltipPopupDelay": [{ type: core["Input"], args: ['tooltipPopupDelay',] },],
        "_fadeDuration": [{ type: core["Input"], args: ['tooltipFadeDuration',] },],
        "_tooltipTrigger": [{ type: core["Input"], args: ['tooltipTrigger',] },],
        "tooltipStateChanged": [{ type: core["Output"] },],
    };
    __decorate([
        Object(decorators["OnChange"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

//# sourceMappingURL=tooltip.directive.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/positioning/index.js + 2 modules
var positioning = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/tooltip/tooltip.module.js







var tooltip_module_TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [tooltip_config_TooltipConfig, component_loader["ComponentLoaderFactory"], positioning["PositioningService"]]
        };
    };
    TooltipModule.decorators = [
        { type: core["NgModule"], args: [{
                    imports: [common["CommonModule"]],
                    declarations: [tooltip_directive_TooltipDirective, tooltip_container_component_TooltipContainerComponent],
                    exports: [tooltip_directive_TooltipDirective],
                    entryComponents: [tooltip_container_component_TooltipContainerComponent]
                },] },
    ];
    return TooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map
// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/tooltip/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return tooltip_container_component_TooltipContainerComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return tooltip_directive_TooltipDirective; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return tooltip_module_TooltipModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return tooltip_config_TooltipConfig; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/decorators.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/decorators.js ***!
  \********************************************************/
/*! exports provided: OnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/index.js + 1 modules ***!
  \***************************************************************/
/*! exports provided: OnChange, LinkedList, isBs3, Trigger, Utils, setTheme */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/decorators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/theme-provider.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/trigger.class.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ngx-bootstrap/utils/utils.class.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/decorators.js
var decorators = __webpack_require__("./node_modules/ngx-bootstrap/utils/decorators.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/utils/linked-list.class.js
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    // Array methods overriding start
    LinkedList.prototype.push = 
    // Array methods overriding start
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

//# sourceMappingURL=linked-list.class.js.map
// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/theme-provider.js
var theme_provider = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/trigger.class.js
var trigger_class = __webpack_require__("./node_modules/ngx-bootstrap/utils/trigger.class.js");

// EXTERNAL MODULE: ./node_modules/ngx-bootstrap/utils/utils.class.js
var utils_class = __webpack_require__("./node_modules/ngx-bootstrap/utils/utils.class.js");

// CONCATENATED MODULE: ./node_modules/ngx-bootstrap/utils/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OnChange", function() { return decorators["OnChange"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isBs3", function() { return theme_provider["isBs3"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Trigger", function() { return trigger_class["Trigger"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Utils", function() { return utils_class["Utils"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "setTheme", function() { return theme_provider["setTheme"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/utils.class.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/utils.class.js ***!
  \*********************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ })

}]);
//# sourceMappingURL=10.chunk.js.map