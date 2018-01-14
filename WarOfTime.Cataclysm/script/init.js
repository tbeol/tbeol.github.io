/*  VARIABLES  */
var game_speed = 1;
var uid_char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*';
var picked = {};
var tile = {};
var units_types = {};
/*  VARIABLES  */

/*  CLASSES  */
class Point {
	constructor(x,y){
		this.name = 'point';
		this.x = x;
		this.y = y;
	}
}
class PointAt {
	constructor(at){
		this.name = 'point_at';
		this.at = at;
	}
}
/*  CLASSES  */


/*  FUNCTIONS  */
function random(type,a,b,c){
	var return_r = [];
	for(var i=0;i<=a;i++){
		switch(type){
			case 'array':
				return_r.push(b[Math.floor(Math.random()*(b.length))]);
			break;
			case 'number':
				return_r.push(Math.floor(Math.random()*(b-c))+c);
			break;
		}
	}
	return return_r;
}
function generateUID(uid_list){
	var generate = false;
	var uid = 0;
	while(!generate){
		uid = random('array',10,uid_char).toString().replace(/,/g,'');
		if(!uid_list[uid]){
			generate = true;
			return uid;
		}
	}
}
function PZM(n){
	if(n<0){
		return -1;
	}else if(n>0){
		return 1;
	}else if(n==0){
		return 0;
	}
	return undefined;
}
function addUnitType(name, speed, damage_min, damage_max, inteligence, agility){
	units_types[name] = {
		speed : speed,
		damage_min : damage_min,
		damage_max : damage_max,
		inteligence : inteligence,
		agility : agility
	};
}
function pick(UID){
	picked[UID]=!picked[UID];
}
/*  FUNCTIONS  */




addUnitType('past/human/worker1', 0.85, 6, 9, 5, 3.8);