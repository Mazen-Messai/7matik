import Konva from "konva";
import { handlePortClick, createRightAnglePath } from "./porthandler";

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
  inputs.forEach((cableType, i) => {
    const cx = spacingIn * (i + 1);
    const port = new Konva.Circle({
      x: cx,
      y: 0,
      radius: portRadius,
      fill: "#00c853",
      name: "input",
    });

    port.setAttr("_cableType", cableType);
    port.on("click", () => handlePortClick(port));
    node.add(port);

    const label = new Konva.Text({
      x: cx - 20,
      y: -20,
      text: cableType,
      fontSize: 10,
      fill: "#00c853",
      width: 40,
      align: "center",
    });

    node.add(label);
  });

  const spacingOut = width / (outputs.length + 1);
  outputs.forEach((cableType, i) => {
    const cx = spacingOut * (i + 1);
    const port = new Konva.Circle({
      x: cx,
      y: height,
      radius: portRadius,
      fill: "#d50000",
      name: "output",
    });

    port.setAttr("_cableType", cableType);
    port.on("click", () => handlePortClick(port));
    node.add(port);

    const label = new Konva.Text({
      x: cx - 20,
      y: height + 5,
      text: cableType,
      fontSize: 10,
      fill: "#d50000",
      width: 40,
      align: "center",
    });

    node.add(label);
  });

  node.on("dragmove", () => {
    node
      .getChildren((child) => child instanceof Konva.Circle)
      .forEach((port) => {
        const lines = (port as any)._connectedLines || [];
        lines.forEach((line: Konva.Line) => {
          const from = (line as any)._from as Konva.Circle;
          const to = (line as any)._to as Konva.Circle;

          const path = createRightAnglePath(
            from.getAbsolutePosition(),
            to.getAbsolutePosition()
          );

          line.points(path);
        });
      });

    node.getLayer()?.batchDraw();
  });

  return node;
}
