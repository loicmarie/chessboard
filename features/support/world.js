var WorldConstructor = function WorldConstructor(callback) {

    var world = {
        parseTable: function (table) {
            table = table.raw();
            return table.reduce(function (form, item) {
                form[item[0]] = item[1];
                return form;
            }, {});
        }
    };

    return callback(world); // tell Cucumber we're finished and to use our world object instead of 'this'
};

exports.World = WorldConstructor;
