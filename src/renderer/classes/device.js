"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
var Device = /** @class */ (function () {
    function Device(name, type, inputs, outputs) {
        this.name = name;
        this.type = type;
        this.inputs = inputs;
        this.outputs = outputs;
    }
    Device.prototype.setName = function (newname) {
        this.name = newname;
    };
    Device.prototype.addInput = function (c) {
        this.inputs.push(c);
    };
    Device.prototype.addOuput = function (c) {
        this.outputs.push(c);
    };
    Device.prototype.getName = function () {
        return this.name;
    };
    Device.prototype.getType = function () {
        return this.type;
    };
    Device.prototype.getInputs = function () {
        return this.inputs;
    };
    Device.prototype.getOutputs = function () {
        return this.outputs;
    };
    return Device;
}());
exports.Device = Device;
