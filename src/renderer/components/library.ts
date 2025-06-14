export type LibraryItem = {
  id: string;
  name: string;
  category: string;
};

export const libraryItems: LibraryItem[] = [
  { id: 'atem', name: 'Blackmagic ATEM Mini', category: 'Switcher' },
  { id: 'fx6', name: 'Sony FX6', category: 'Camera' },
  { id: 'z200', name: 'Panasonic Z200', category: 'Camera' },
  { id: 'neumann', name: 'Neumann U87', category: 'Microphone' },
];
