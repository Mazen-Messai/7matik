"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cable = void 0;
var Cable = /** @class */ (function () {
    function Cable(name, type, source, target) {
        this.name = name;
        this.type = type;
        this.source = source;
        this.target = target;
    }
    Cable.prototype.setName = function (newname) {
        this.name = newname;
    };
    Cable.prototype.getName = function () {
        return this.name;
    };
    Cable.prototype.getType = function () {
        return this.type;
    };
    Cable.prototype.getSource = function () {
        return this.source;
    };
    Cable.prototype.getTarget = function () {
        return this.target;
    };
    return Cable;
}());
exports.Cable = Cable;
