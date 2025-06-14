export type LibraryItem = {
  id: string;
  name: string;
  category: string;
  inputs: string[];
  outputs: string[];
};

export const libraryItems: LibraryItem[] = [
  {
    id: 'atem',
    name: 'ATEM Mini',
    category: 'Switcher',
    inputs: ['HDMI 1', 'HDMI 2'],
    outputs: ['HDMI OUT']
  },
  {
    id: 'fx6',
    name: 'Sony FX6',
    category: 'Camera',
    inputs: [],
    outputs: ['SDI OUT']
  },
  {
    id: 'mic',
    name: 'Neumann U87',
    category: 'Mic',
    inputs: [],
    outputs: ['XLR OUT']
  }
];
