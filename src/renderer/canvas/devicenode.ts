import Konva from "konva";
import { handlePortClick } from "./porthandler";

export function createDeviceNode(
  name: string,
  inputs: string[],
  outputs: string[],
  x: number,
  y: number
): Konva.Group {
  const width = 120;
  const height = 80;
  const portRadius = 5;

  const node = new Konva.Group({
    x,
    y,
    draggable: true,
  });

  const body = new Konva.Rect({
    width,
    height,
    fill: "#4A90E2",
    cornerRadius: 8,
    shadowColor: "black",
    shadowBlur: 5,
    shadowOffset: { x: 2, y: 2 },
  });

  const label = new Konva.Text({
    text: name,
    fontSize: 14,
    fill: "white",
    width,
    align: "center",
    y: height / 2 - 10,
  });

  node.add(body);
  node.add(label);

  const spacingIn = width / (inputs.length + 1);
  inputs.forEach((_, i) => {
    const cx = spacingIn * (i + 1);
    const port = new Konva.Circle({
      x: cx,
      y: 0,
      radius: portRadius,
      fill: "#00c853",
      name: "input",
    });

    port.on("click", () => handlePortClick(port));
    node.add(port);
  });

  const spacingOut = width / (outputs.length + 1);
  outputs.forEach((_, i) => {
    const cx = spacingOut * (i + 1);
    const port = new Konva.Circle({
      x: cx,
      y: height,
      radius: portRadius,
      fill: "#d50000",
      name: "output",
    });

    port.on("click", () => handlePortClick(port));
    node.add(port);
  });

  return node;
}
