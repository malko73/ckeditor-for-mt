﻿(function(){CKEDITOR.plugins.liststyle={requires:['dialog'],init:function(a){a.addCommand('numberedListStyle',new CKEDITOR.dialogCommand('numberedListStyle'));CKEDITOR.dialog.add('numberedListStyle',this.path+'dialogs/liststyle.js');a.addCommand('bulletedListStyle',new CKEDITOR.dialogCommand('bulletedListStyle'));CKEDITOR.dialog.add('bulletedListStyle',this.path+'dialogs/liststyle.js');if(a.addMenuItems){a.addMenuGroup('list',108);a.addMenuItems({numberedlist:{label:a.lang.list.numberedTitle,group:'list',command:'numberedListStyle'},bulletedlist:{label:a.lang.list.bulletedTitle,group:'list',command:'bulletedListStyle'}});}if(a.contextMenu)a.contextMenu.addListener(function(b,c){if(!b||b.isReadOnly())return null;while(b){var d=b.getName();if(d=='ol')return{numberedlist:CKEDITOR.TRISTATE_OFF};else if(d=='ul')return{bulletedlist:CKEDITOR.TRISTATE_OFF};b=b.getParent();}return null;});}};CKEDITOR.plugins.add('liststyle',CKEDITOR.plugins.liststyle);})();