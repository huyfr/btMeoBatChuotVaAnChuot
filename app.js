let Rat=function (name, weight, speed,alive)
{
    this.name=name;
    this.weightRat=weight;
    this.speed=speed;
    this.alive=alive;

    this.getWeightRat=function ()
    {
        return this.weightRat;
    };

    this.getAliveRat=function ()
    {
        return this.alive;
    };

    this.getSpeedRat=function ()
    {
        return this.speed;
    };

    this.sayRat=function (content)
    {
        if (this.alive)
        {
            console.log(this.name+" say: "+content);
        }
    };
};

let Cat=function (name, weight, speed, Rat)
{
    this.nameCat=name;
    this.weightCat=weight;
    this.speedCat=speed;

    this.getNameCat=function ()
    {
        return this.nameCat;
    };

    this.getWeightCat=function ()
    {
        return this.weightCat;
    };

    this.getSpeedCat=function ()
    {
        return this.speedCat;
    };

    this.catch=function (rat)
    {
        if (this.speedCat>rat.getSpeedRat())
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.eat=function (rat)
    {
        if (this.catch(rat) && rat.getAliveRat())
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.upWeightCat=function (rat)
    {
        if(this.eat(rat))
        {
            this.weightCat=this.weightCat+rat.getWeightRat();
        }
    };

    this.sayCat=function (content)
    {
        console.log(this.nameCat+" say: "+content);
    }
};

let rat1=new Rat("jerry",20,30,true);
let rat2=new Rat("jerry2",10,10,true);
let cat1=new Cat("tom",40,40);

rat1.sayRat("chit chit");
rat2.sayRat("chjt chjt");
cat1.sayCat("meo meo");

console.log(cat1.getNameCat()+" Bat duoc: "+cat1.catch(rat1));
console.log(cat1.getNameCat()+" Bat duoc: "+cat1.catch(rat2));

console.log(cat1.getNameCat()+" An: "+cat1.eat(rat1));
console.log(cat1.getNameCat()+" An: "+cat1.eat(rat2));

cat1.upWeightCat(rat1);
console.log("Can nang cua "+cat1.getNameCat()+" "+cat1.getWeightCat());
cat1.upWeightCat(rat2);
console.log("Can nang cua "+cat1.getNameCat()+" "+cat1.getWeightCat());
