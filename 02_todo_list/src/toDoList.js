ToDo = {};

/**
 * ToDoList
 *
 * @constructor
 */
ToDo.List = function() {};

ToDo.List.prototype.items = [];

/**
 * Add item
 * @param item
 */
ToDo.List.prototype.add = function(item) {
    this.items.push(item);
};

/**
 * Check item
 * @param item
 */
ToDo.List.prototype.check = function(item) {
    // Loop through items
    for (var i = 0; i < this.items.length; ++i) {
        if (this.items[i].title == item.title) {
            this.items[i].checked = true;
        }
    }
};

/**
 * Uncheck item
 * @param item
 */
ToDo.List.prototype.uncheck = function(item) {
    for (var i = 0; i < this.items.length; ++i) {
        if (this.items[i].title == item.title) {
            this.items[i].checked = false;
        }
    }
};

/**
 * Remove item
 * @param item
 */
ToDo.List.prototype.remove = function(item) {
    for (var i = 0; i < this.items.length; ++i) {
        if (this.items[i].title == item.title) {
            this.items.splice(i, 1);
        }
    }
};

/**
 * ToDoListItem
 *
 * @param title
 * @param date
 * @param checked
 * @constructor
 */
ToDo.Item = function(title, date, checked) {
    this.title = title;
    this.date = date;
    this.checked = false;
};
