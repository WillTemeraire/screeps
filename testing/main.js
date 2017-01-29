//Module laden
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var Respawner = require('respawner');
var Build = require('build');

module.exports.loop = function () {
    
    /*
    * Creeps
    * Respawn und KI
    */
    //Tote Creeps aus Memory löschen
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    //Automatischer Respawn
    Respawner.run();
    //Steuerung für Rollen
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
    }
    
    /*
    * Gebäude aufbauen
    * Je nach Fortschritt
    */
    if ((Game.rooms['W2N5'].controller.level == 2) && (Game.spawns['Spawn1'].memory.extensionbuild != 1)) {
        var position1 = new RoomPosition(Game.spawns['Spawn1'].pos.x-1, Game.spawns['Spawn1'].pos.y-3, 'W2N5');
        var position2 = new RoomPosition(Game.spawns['Spawn1'].pos.x-6, Game.spawns['Spawn1'].pos.y-2, 'W2N5');
        Build.run(position1, position2, STRUCTURE_EXTENSION);
        var position1 = new RoomPosition(Game.spawns['Spawn1'].pos.x-1, Game.spawns['Spawn1'].pos.y-2, 'W2N5');
        var position2 = new RoomPosition(Game.spawns['Spawn1'].pos.x-6, Game.spawns['Spawn1'].pos.y-1, 'W2N5');
        Build.run(position1, position2, STRUCTURE_CONTAINER);
        Game.spawns['Spawn1'].memory.extensionbuild = 1;
    }
    if ((Game.rooms['W2N5'].controller.level == 2) && (Game.spawns['Spawn1'].memory.roadbuild2 != 1) && (Game.spawns['Spawn1'].memory.extensionbuild == 1)) {
        Build.run(Game.spawns['Spawn1'].pos, Game.spawns['Spawn1'].room.find(FIND_SOURCES)[1].pos, STRUCTURE_ROAD);
        Build.run(Game.spawns['Spawn1'].pos, Game.spawns['Spawn1'].room.find(FIND_SOURCES)[2].pos, STRUCTURE_ROAD);
        Build.run(Game.spawns['Spawn1'].pos, Game.spawns['Spawn1'].room.find(FIND_SOURCES)[3].pos, STRUCTURE_ROAD);
        Game.spawns['Spawn1'].memory.roadbuild2 = 1;
    }
    
    if (Game.spawns['Spawn1'].memory.roadbuild1 != 1) {
        Build.run(Game.spawns['Spawn1'].pos, Game.spawns['Spawn1'].room.find(FIND_SOURCES)[0].pos, STRUCTURE_ROAD);
        Build.run(Game.spawns['Spawn1'].pos, Game.rooms['W2N5'].controller.pos, STRUCTURE_ROAD);
        Game.spawns['Spawn1'].memory.roadbuild1 = 1;
    }
    
}
