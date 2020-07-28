## Description
This is basically a script which helps you operate with tabs on your website.

## Usage
There are 5 constant variables at the beginning of the document that you will have to edit to make script start working:
<pre>
const MENU = '';         // HTML class name of tab menu tag, which is a container with tab buttons (Dot is required - '.example ') <br>
const MENU_ITEM = '';    // HTML class name of tab menu item, it must be the same for all items (Dot is required - '.example ') <br>
const TAB_CONTENT = '';  // HTML class name of tab content containers, also must be the same for all of them (Dot is required - '.example ') <br>
const HIDE_CLASS = '';   // HTML class written in CSS only that will make element disappear (Ex: .hide{display: none) No dots here! <br>
const SHOW_CLASS = '';   // HTML class written in CSS only that will make element appear nicely (Optional) No dots here! <br>
</pre>
## Extra Info
It is not necessary to use class names only. You can change the method of 'document' below and select elements <br>
by Id, tag name etc. But you will have to change script a bit deeper than it was supposed to :)
