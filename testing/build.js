/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('build');
 * mod.thing == 'a thing'; // true
 */

var Build = {
    
    run: function(fromPos, toPos, building) {
        
        var pfad = Game.spawns['Spawn1'].room.findPath(fromPos, toPos, {ignoreCreeps: true})
        for(var i in pfad) {
            Game.rooms['W2N5'].createConstructionSite(pfad[i].x, pfad[i].y, building);
        }
        
        
    }
};

module.exports = Build;
