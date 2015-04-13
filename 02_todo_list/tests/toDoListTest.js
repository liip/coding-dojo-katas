ToDoListTest = TestCase('ToDoListTest');

ToDoListTest.prototype.setUp = function() {
    this.list = new ToDo.List();
    this.list.items = [];
};

ToDoListTest.prototype.testAdd = function() {
    var item1 = new ToDo.Item('My Item', new Date()),
        item2 = new ToDo.Item('My second Item', new Date());

    this.list.add(item1);
    this.list.add(item2);

    assertEquals([item1, item2], this.list.items);
};

ToDoListTest.prototype.testRemove = function() {
    var item1 = new ToDo.Item('My Item', new Date()),
        item2 = new ToDo.Item('My second Item', new Date());

    this.list.add(item1);
    this.list.add(item2);
    this.list.remove(item1);

    assertEquals([item2], this.list.items);
};

ToDoListTest.prototype.testCheckUnCheck = function() {
    var item1 = new ToDo.Item('My Item', new Date()),
        item2 = new ToDo.Item('My second Item', new Date());

    this.list.add(item1);
    this.list.add(item2);

    this.list.check(item1);
    item1.checked = true;

    assertEquals([item1, item2], this.list.items);

    this.list.uncheck(item1);
    item1.checked = false;

    assertEquals([item1, item2], this.list.items);
};
