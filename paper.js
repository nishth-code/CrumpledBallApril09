class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		//put image of the paper


		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//use imageMode & image

			
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}