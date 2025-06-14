import { Device } from './device';
import { Cable } from './cable';
import { Connector } from './connector';
import { Category } from './category';

const camera = new Device("Camera 1", Category.CAMERA, [], [Connector.HDMI]);
const monitor = new Device("Monitor 1", Category.DISPLAY, [Connector.HDMI], []);

const cable = new Cable("HDMI Cable 1", Connector.HDMI, camera, monitor);

console.log(`${cable.getName()} connects ${cable.getSource().getName()} to ${cable.getTarget().getName()}`);
console.log(`${camera.getName()} outputs: ${camera.getOutputs()}`);
console.log(`${monitor.getName()} inputs: ${monitor.getInputs()}`);
