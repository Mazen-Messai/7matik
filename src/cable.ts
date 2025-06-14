import {Device} from './device';
import {Connector} from './connector';

export class Cable {
  private name: string;
  private type: Connector;
  private source: Device;
  private target: Device;

  constructor(name: string, type: Connector, source: Device, target: Device) {
    this.name = name;
    this.type = type;
    this.source = source;
    this.target = target;
  }

  setName(newname: string): void {
    this.name = newname;
  }

  getName(): string {
    return this.name;
  }

  getType(): Connector {
    return this.type;
  }

  getSource(): Device {
    return this.source;
  }

  getTarget(): Device {
    return this.target;
  }
}