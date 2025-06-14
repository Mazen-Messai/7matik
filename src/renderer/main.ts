alert("from main.ts");
import Konva from "konva";
import { libraryItems } from "./components/library";
import { createDeviceNode } from "./canvas/devicenode";
import { setLayer, handlePortClick } from './canvas/porthandler';

const stage = new Konva.Stage({
  container: "canvas",
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);
setLayer(layer); 

const scrollContainer = document.getElementById("library-scroll")!;

libraryItems.forEach((item) => {
  const tile = document.createElement("div");
  tile.className = "library-item";
  tile.textContent = item.name;
  tile.setAttribute("draggable", "true");
  tile.setAttribute("data-id", item.id);

  tile.addEventListener("dragstart", (e) => {
    e.dataTransfer?.setData("text/plain", item.id);
  });

  scrollContainer.appendChild(tile);
});

const canvas = document.getElementById("canvas")!;

let selectedPort: Konva.Circle | null = null;

canvas.addEventListener("dragover", (e) => {
  e.preventDefault();
});

canvas.addEventListener("drop", (e) => {
  e.preventDefault();
  const itemId = e.dataTransfer?.getData("text/plain");
  const x = e.clientX;
  const y = e.clientY;

  if (!itemId) return;

  const rect = canvas.getBoundingClientRect();
  const localX = x - rect.left;
  const localY = y - rect.top;

  const item = libraryItems.find((i) => i.id === itemId);
  if (!item) return;

  const node = createDeviceNode(
    item.name,
    item.inputs,
    item.outputs,
    localX,
    localY
  );

  layer.add(node);
  layer.draw();
});