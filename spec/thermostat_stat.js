class Thermostat 
{
    constructor() 
    {
    this.temprature = 20;
    }

    getTemp()
    {
    return this.temprature; 
    }

    up() 
    {
      this.temprature +=1;
    }

    down() 
    {
      this.temprature -=1;
    }


}