import Konva from "konva";

let selectedPort: Konva.Circle | null = null;
let currentLayer: Konva.Layer;

export function setLayer(layer: Konva.Layer) {
  currentLayer = layer;
}

export function handlePortClick(port: Konva.Circle) {
  if (!selectedPort) {
    selectedPort = port;
    port.stroke('yellow');
    port.strokeWidth(2);
    port.getLayer()?.draw();
  } else {
    const from = selectedPort;
    const to = port;

    const fromType = from.name();
    const toType = to.name();

    if (fromType === 'output' && toType === 'input') {
      const fromAbs = from.getAbsolutePosition();
      const toAbs = to.getAbsolutePosition();

      const path = createRightAnglePath(fromAbs, toAbs);

      const line = new Konva.Line({
        points: path,
        stroke: 'black',
        strokeWidth: 2,
        lineJoin: 'round',
      });

      currentLayer.add(line);
      currentLayer.draw();
    }

    from.stroke(null);
    from.strokeWidth(0);
    selectedPort = null;
    from.getLayer()?.draw();
  }
}

function createRightAnglePath(from: Konva.Vector2d, to: Konva.Vector2d): number[] {
  const midX = (from.x + to.x) / 2;
  return [
    from.x, from.y,
    midX, from.y,
    midX, to.y,
    to.x, to.y,
  ];
}
