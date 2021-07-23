function Star()
{
    this.x3d = Math.random() * 1800 - 900;
    this.y3d = Math.random() * 1800 - 900;

    this.x = this.x3d + 300;
    this.y = this.y3d + 300;

    this.z = 1000;
    this.FOV = 250;
    this.scale = this.FOV/(this.z + this.FOV);
    this.w = 1;
    this.h = 1;
    this.speed = 1;
    this.id = "r"+this.x+this.y;
    this.insertDOM();
}

Star.prototype.insertDOM = function(){
    let div = document.createElement("div");
    let display = document.getElementById("field");
    let color = '#ffffff';

    div.style.position = "absolute";
    div.style.left= this.x + "px";
    div.style.top = this.y + "px";
    div.style.width = this.w + "px";
    div.style.height = this.h + "px";
    div.style.backgroundColor = color;
    div.id = this.id;
    
    display.appendChild(div);
}

Star.prototype.update = function()
{
    this.z -= this.speed;
    
    this.scale = this.FOV /(this.z + this.FOV);

    let x3d = this.x3d * this.scale;
    let y3d = this.y3d * this.scale;

    this.x = x3d + 300;
    this.y = y3d + 300;

    let m = document.getElementById(this.id);
    m.style.left = this.x + "px";
    m.style.top = this.y +"px";
    m.style.width = (4 * this.scale) + "px";
    m.style.height = (4 * this.scale) + "px";

    if(this.x < -this.w || this.x > (600 + this.w) || this.y < -this.h || this.y > (600+this.h))
    {
        this.x3d = Math.random() * 1800 - 900;
        this.y3d = Math.random() * 1800 - 900;
        this.z = 1000;
    }
}




