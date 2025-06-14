import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'app',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

const rect = new Konva.Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 50,
  fill: 'red',
  draggable: true,
});

layer.add(rect);
layer.draw();
