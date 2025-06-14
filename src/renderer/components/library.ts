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
    inputs: ['HDMI', 'HDMI'],
    outputs: ['HDMI']
  },
  {
    id: 'BM Converter',
    name: 'Blackmagic Converter',
    category: 'Converter',
    inputs: ['SDI'],
    outputs: ['HDMI']
  },
  {
    id: 'fx6',
    name: 'Sony FX6',
    category: 'Camera',
    inputs: ['XLR'],
    outputs: ['SDI']
  },
  {
    id: 'mic',
    name: 'Neumann U87',
    category: 'Mic',
    inputs: [],
    outputs: ['XLR']
  }
];
