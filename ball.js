class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			frictionAir:0.5,
			density:0.8
			}

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			var angle = this.body.angle;


			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(3);
			fill("grey")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}