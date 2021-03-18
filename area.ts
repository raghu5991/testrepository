class Area
{
    length:number;
    width:number;
    constructor(len:number,wid:number)
    {
        this.length=len;
        this.width=wid;
    }
    getArea()
    {
        console.log(`area of rectangle===${(this.length*this.width)}`);
    }
}
var area=new Area(10,12);
area.getArea();