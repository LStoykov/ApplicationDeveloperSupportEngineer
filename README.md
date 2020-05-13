ContextMenu Component

Introduction:

The project includes four files:
One HTML Index Page
One CSS Styles Page
Two .ts files
One .js file.

The project aim is showing how to create a ContentMenu Component


Technologies:
The desgin of the ContentMenu is executed via HTML and CSS codes. The functionality is JavaScript and Transport Stream. 

The Index File includes a loader, button, target and two lists. It is connected with all other files included in the project.

The CSS file makes the design of the projects, as well as the fixed dynamic length. 

Example:
@media (max-width: @screen-xs) {
    body{font-size: 10px;}
	  font-size: 1.4em;
}

@media (max-width: @screen-sm) {
    body{font-size: 14px;}
	  font-size: 1.4em;
}


The Transport Stream files include some imported libraties,  Iterate data from 'datasource.ts' to construct menu item model:

for (let i: number = 0; i < data.length; i++) {
    record = data[i] as Record;
    if (record.parentId) {
        if (!menuItems[record.parentId - 1].items) {
            menuItems[record.parentId - 1].items = []
        }
        menuItems[record.parentId - 1].items.push({ text: record.text });
    } else {
        menuItems.push({ text: record.text });
    }
}

 Initializing ContextMenu options:

let menuOptions: ContextMenuModel = {
    target: '#target',
    items: menuItems
};

Initialize ContextMenu component:

let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');


To insert an item after the particular item:

menuObj.insertAfter([{separator: true}], 'Sort by');
menuObj.insertAfter([{separator: true}], 'Home');

And the exported data.

The JS file includes var itemsDisabled = {};  to enable everything initially.
And itemsDisabled["cut"] = true; to disable the "Cut" menu item

Launch:

Via all browsers.


