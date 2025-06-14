import Konva from "konva";
import { cableStyles } from "./cabletypes";

let selectedPort: Konva.Circle | null = null;
let currentLayer: Konva.Layer;

export function setLayer(layer: Konva.Layer) {
  currentLayer = layer;
}

export function handlePortClick(port: Konva.Circle) {
  if (!selectedPort) {
    selectedPort = port;
    port.stroke("yellow");
    port.strokeWidth(2);
    port.getLayer()?.draw();
  } else {
    const from = selectedPort;
    const to = port;

    const fromType = from.name();
    const toType = to.name();

    const fromCableType = from.getAttr("_cableType");
    const toCableType = to.getAttr("_cableType");

    if (fromCableType !== toCableType) {
      alert(`Incompatible ports: ${fromCableType} → ${toCableType}`);
      return;
    }

    if (
      fromType === "output" &&
      toType === "input" &&
      fromCableType === toCableType
    ) {
      const fromAbs = from.getAbsolutePosition();
      const toAbs = to.getAbsolutePosition();

      const path = createRightAnglePath(fromAbs, toAbs);

      const line = new Konva.Line({
        points: path,
        stroke: "black",
        strokeWidth: 2,
        lineJoin: "round",
      });

      (from as any)._connectedLines = [
        ...((from as any)._connectedLines || []),
        line,
      ];
      (to as any)._connectedLines = [
        ...((to as any)._connectedLines || []),
        line,
      ];

      (line as any)._from = from;
      (line as any)._to = to;
      currentLayer.add(line);
      currentLayer.draw();
    }

    from.stroke(null);
    from.strokeWidth(0);
    selectedPort = null;
    from.getLayer()?.draw();
  }
}

export function createRightAnglePath(
  from: Konva.Vector2d,
  to: Konva.Vector2d
): number[] {
  const offset = 20; // taille du segment initial

  const horizontal = Math.abs(from.x - to.x) > Math.abs(from.y - to.y);

  const start = { ...from };
  const end = { ...to };

  if (horizontal) {
    start.x += from.x < to.x ? offset : -offset;
    end.x += to.x > from.x ? -offset : offset;
  } else {
    start.y += from.y < to.y ? offset : -offset;
    end.y += to.y > from.y ? -offset : offset;
  }

  return [from.x, from.y, start.x, start.y, end.x, end.y, to.x, to.y];
}
