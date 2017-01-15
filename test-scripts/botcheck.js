/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('botcheck.js');
 * mod.thing == 'a thing'; // true
 */

var roleCheckBot = {


    run: function(check) {

    var sent = 0;


    var maxBuilder = 2;
    var maxHarvester = 2;
    var maxUpgrader = 1;
    // Check Harvesters

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if(harvesters.length < maxHarvester)
    {
        console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < maxHarvester)
        {

            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            if(newName != -6)
            {
                console.log('Spawning new harvester: ' + newName);
            }

            if(newName = -4)
            {
                console.log('Spawner in use...');
            }
        }
    }



    // Check Builders

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(builders.length < maxBuilder)
    {
        console.log('Builders: ' + builders.length);

        if(builders.length < maxBuilder)
        {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'builder'});
            if(newName != -6)
            {
                console.log('Spawning new builder: ' + newName);
            }

            if(newName = -4)
            {
                console.log('Spawner in use...');
            }
        }
    }




    // Check Upgrader

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < maxUpgrader)
    {
        console.log('Upgrader: ' + upgraders.length);

        if(upgraders.length < maxUpgrader)
        {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            if(newName != -6)
            {
                console.log('Spawning new Upgrader: ' + newName);

            }

            if(newName = -4)
            {
                console.log('Spawner in use...');
            }
        }
    }

  }
};

module.exports = roleCheckBot;
