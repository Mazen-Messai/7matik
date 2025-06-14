import Konva from 'konva';
import { libraryItems } from './components/library';


const stage = new Konva.Stage({
  container: 'canvas',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

const scrollContainer = document.getElementById('library-scroll')!;

libraryItems.forEach(item => {
  const tile = document.createElement('div');
  tile.className = 'library-item';
  tile.textContent = item.name;
  tile.setAttribute('draggable', 'true');
  tile.setAttribute('data-id', item.id);

  // Listener pour drag
  tile.addEventListener('dragstart', e => {
    e.dataTransfer?.setData('text/plain', item.id);
  });

  scrollContainer.appendChild(tile);
});


const canvas = document.getElementById('canvas')!;

canvas.addEventListener('dragover', e => {
  e.preventDefault(); // important
});

canvas.addEventListener('drop', e => {
  e.preventDefault();
  const itemId = e.dataTransfer?.getData('text/plain');
  const x = e.clientX;
  const y = e.clientY;

  if (itemId) {
    console.log(`Dropped ${itemId} at (${x}, ${y})`);
    // Tu pourras ici créer ton node Konva plus tard
  }
});
