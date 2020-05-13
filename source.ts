export let data: Record[] = [
    { id: 1, parentId: null, text: 'Preview' },
    { id: 2, parentId: null, text: 'Sort by' },
    { id: 3, parentId: null, text: 'Home' },
    { id: 4, parentId: null, text: 'Settings' },
    { id: 5, parentId: null, text: 'Cut' },
	
    { id: 6, parentId: 1, text: 'Lagerverfügbarkeit' },
    { id: 7, parentId: 1, text: 'Medium Lagerverfügbarkeit' },
    { id: 8, parentId: 1, text: 'Small Lagerverfügbarkeit' },
    { id: 9, parentId: 2, text: 'Random Name' },
    { id: 10, parentId: 2, text: 'Random Size' },
    { id: 11, parentId: 4, text: 'Random Folder' },
    { id: 12, parentId: 4, text: 'Random Shortcut' },
    { id: 13, parentId: 4, text: 'Random Contact' }
];

export interface Record {
    id: number,
    parentId: number,
    text: string
}