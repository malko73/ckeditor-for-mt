﻿CKEDITOR.plugins.add('table',{requires:['dialog'],init:function(a){var b=CKEDITOR.plugins.table,c=a.lang.table;a.addCommand('table',new CKEDITOR.dialogCommand('table'));a.addCommand('tableProperties',new CKEDITOR.dialogCommand('tableProperties'));a.ui.addButton('Table',{label:c.toolbar,command:'table'});CKEDITOR.dialog.add('table',this.path+'dialogs/table.js');CKEDITOR.dialog.add('tableProperties',this.path+'dialogs/table.js');if(a.addMenuItems)a.addMenuItems({table:{label:c.menu,command:'tableProperties',group:'table',order:5},tabledelete:{label:c.deleteTable,command:'tableDelete',group:'table',order:1}});a.on('doubleclick',function(d){var e=d.data.element;if(e.is('table'))d.data.dialog='tableProperties';});if(a.contextMenu)a.contextMenu.addListener(function(d,e){if(!d||d.isReadOnly())return null;var f=d.hasAscendant('table',1);if(f)return{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF};return null;});}});
