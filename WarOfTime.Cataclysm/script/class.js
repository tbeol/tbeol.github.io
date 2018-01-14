class Unit {
	constructor(x, y, type, command, uid){
		this.x = x;
		this.y = y;
		this.uid = uid;
		this.type = type;
		this.command = command;
		this.effect = {
			invisible : 0,
			damage_buff : 0,
			inteligence_buff : 0,
			agility_buff : 0,
			speed_buff : 0
		};
		this.inventory = [0,0,0,0,0,0];
		this.target = false;
		this.name = 'unit';
		this.dx=0;
		this.dy=0;
	}
	move(){
		switch(this.target.name){
			case 'point':
				this.dx = game_speed*units_types[this.type].speed*PZM(this.target.x-this.x);
				this.dy = game_speed*units_types[this.type].speed*PZM(this.target.y-this.y);
			break;
		}
	}
	moveTo(x,y){
		this.target = new Point(x,y);
	}
	moveAt(unit){
		this.target = new Point_At(unit.UID);
	}
}


function spawnUnit(x,y,type,command){
	var UID = generateUID(unit);
	tile[UID] = new Unit(x,y,type,command,UID);
}