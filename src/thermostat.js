'use strict';

class Thermostat 
{
    constructor() 
    {
    this.temperature = 20;
    }

    getTemp()
    {
    return this.temperature; 
    }

    up() 
    {
      this.temperature +=1;
    }

    down() 
    {
      this.temperature -=1;
    }


}