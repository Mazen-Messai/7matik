import { Connector } from './connector';
import { Category } from './category';

export class Device {
  private name: string;
  private type: Category;
  private inputs: Connector[];
  private outputs: Connector[];

  constructor(name: string, type: Category, inputs: Connector[], outputs: Connector[]) {
    this.name = name;
    this.type = type;
    this.inputs = inputs;
    this.outputs = outputs;
  }

  setName(newname: string): void {
    this.name = newname;
  }

  addInput(c: Connector): void {
    this.inputs.push(c);
  }

  addOuput(c: Connector): void {
    this.outputs.push(c);
  }

  getName(): string {
    return this.name;
  }

  getType(): Category {
    return this.type;
  }

  getInputs(): Connector[] {
    return this.inputs;
  }

  getOutputs(): Connector[] {
    return this.outputs;
  }
}
