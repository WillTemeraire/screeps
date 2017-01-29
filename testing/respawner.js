/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('repawner');
 * mod.thing == 'a thing'; // true
 */

var Respawner = {
    run: function(moneyAvai) {
        moneyAvai = Game.rooms['W2N5'].energyAvailable;

        var harvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if(harvester.length < 4) {
            if(moneyAvai>=500){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester'});
            }else if(moneyAvai>=400){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            }else if(moneyAvai>=300){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            }else if(moneyAvai>=250){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
            }else{
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            }
        } else

        if(upgrader.length < 1){
            if(moneyAvai>=400){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
            }else if(moneyAvai>=300){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
            }else{
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            }
        } else

        if(builder.length < 2){
            if(moneyAvai>=400){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
            }else if(moneyAvai>=300){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
            }else if(moneyAvai>=250){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
            }else{
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            }
        } else

        if(repairer.length < 1){
            if(moneyAvai>=400){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer'});
            }else if(moneyAvai>=250){
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'repairer'});
            }else{
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'repairer'});
            }
        }
    }
}; 

module.exports = Respawner;
