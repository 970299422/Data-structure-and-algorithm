"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractList_1 = require("../AbstractList");
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        return _super.call(this) || this;
    }
    LinkedList.prototype.clear = function () {
        this.size = 0;
        this.first = null;
    };
    LinkedList.prototype.add = function (element, index) {
        this.rangeCheckForAdd(index || this.size);
        if (!index && index !== 0) {
            this.add(element, this.size);
            return null;
        }
        if (index === 0) {
            this.first = new NodeElement(element, this.first);
        }
        else {
            var prev = this.getNode(index - 1);
            prev.next = new NodeElement(element, prev.next);
        }
        this.size++;
    };
    LinkedList.prototype.get = function (index) {
        this.rangeCheck(index);
        return this.getNode(index).element;
    };
    LinkedList.prototype.set = function (index, element) {
        this.rangeCheck(index);
        var node = this.getNode(index);
        var old = this.getNode(index).element;
        node.element = element;
        return old;
    };
    LinkedList.prototype.remove = function (index) {
        this.rangeCheck(index);
        var oldNode = this.first;
        if (index === 0) {
            this.first = this.first.next;
        }
        else {
            var prev = this.getNode(index - 1);
            oldNode = this.getNode(index);
            prev.next = oldNode.next;
        }
        this.size--;
        return oldNode.element;
    };
    LinkedList.prototype.indexOf = function (element) {
        var node = this.first;
        if (!element) {
            for (var i = 0; i < this.size; i++) {
                if (node.element === element)
                    return i;
                node = node.next;
            }
        }
        else {
            for (var i = 0; i < this.size; i++) {
                if (JSON.stringify(node.element) === JSON.stringify(element))
                    return i;
                node = node.next;
            }
        }
        return this.ELEMNET_NOT_FOND;
    };
    LinkedList.prototype.getNode = function (index) {
        var node = this.first;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    };
    return LinkedList;
}(AbstractList_1["default"]));
var NodeElement = /** @class */ (function () {
    function NodeElement(element, next) {
        this.element = element;
        this.next = next;
    }
    return NodeElement;
}());
var linkedList = new LinkedList();
console.log(linkedList);
console.log(linkedList.getSize());
linkedList.add(3);
linkedList.add(2, 0);
linkedList.add(1, 0);
linkedList.add(5, 3);
linkedList.add(4, 3);
console.log(JSON.stringify(linkedList));
console.log(linkedList.get(2));
console.log(linkedList.set(3, 10));
console.log(JSON.stringify(linkedList));
console.log(linkedList.indexOf(10));
console.log(linkedList.remove(2));
console.log(linkedList.indexOf(10));
console.log(JSON.stringify(linkedList));
