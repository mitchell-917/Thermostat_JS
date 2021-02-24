'use strict';

class Thermostat 
{
    constructor() 
    {
    this.max_temperature = 32;
    this.min_temperature = 10;
    this.temperature = 20;
    }

    is_min_temperature() 
    {
      return this.temperature === min_temperature;
    }

    is_max_temperature()
    {
      return this.temperature === max_temperature;
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