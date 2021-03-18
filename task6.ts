export class Circle
{

    radius:number;
    constructor(radius:number)
    {
        this.radius=radius; 
    }
    getArea()
    {
        console.log(`area of circle===${(22/7)*(this.radius)**2}`);
    }
}
