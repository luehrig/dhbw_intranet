function test(){
var options = new primitives.orgdiagram.Config();    

var rootItem = new primitives.orgdiagram.ItemConfig();
rootItem.title = "Scott Aasrud";
rootItem.description = "VP, Public Sector";
rootItem.image = "http://www.basicprimitives.com/demo/images/photos/a.png";

options.rootItem = rootItem;
options.cursorItem = rootItem;
options.hasSelectorCheckbox = primitives.common.Enabled.False;

var itemB = new primitives.orgdiagram.ItemConfig();
itemB.title = "Ted Lucas";
itemB.description = "VP, Human Resources";
itemB.image = "http://www.basicprimitives.com/demo/images/photos/b.png";
rootItem.items.push(itemB);

var itemC = new primitives.orgdiagram.ItemConfig();
itemC.title = "Joao Stuger";
itemC.description = "Business Solutions, US";
itemC.image = "http://www.basicprimitives.com/demo/images/photos/c.png";
rootItem.items.push(itemC);


  
jQuery("#basicdiagram").orgDiagram(options);
}