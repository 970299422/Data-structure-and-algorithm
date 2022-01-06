"use strict";
exports.__esModule = true;
var AbstractList = /** @class */ (function () {
    function AbstractList() {
        this.size = 0;
        this.ELEMNET_NOT_FOND = -1;
    }
    AbstractList.prototype.getSize = function () {
        return this.size;
    };
    AbstractList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    AbstractList.prototype.contains = function (element) {
        return this.indexOf(element) !== this.ELEMNET_NOT_FOND;
    };
    AbstractList.prototype.outOfBounds = function (index) {
        throw new Error("out of bounds exception, index = ".concat(index, ", size = ").concat(this.size));
    };
    AbstractList.prototype.rangeCheck = function (index) {
        if (index < 0 || index >= this.size) {
            this.outOfBounds(index);
        }
    };
    AbstractList.prototype.rangeCheckForAdd = function (index) {
        if (index < 0 || index > this.size) {
            this.outOfBounds(index);
        }
    };
    return AbstractList;
}());
exports["default"] = AbstractList;
