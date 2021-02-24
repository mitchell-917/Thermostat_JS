'use strict';

class Thermostat 
{
    constructor() 
    {
    this.max_temperature = 32;
    this.min_temperature = 10;
    this.temperature = 20;
    this.power_saving_mode = true;
    }

    is_power_saving_mode() 
    {
      return this.power_saving_mode === true;
    }

    power_saving_mode_off() 
    {
      return this.power_saving_mode = false;
    }

    is_min_temperature() 
    {
      return this.temperature === this.min_temperature;
    }

    is_max_temperature()
    {
      return this.temperature === this.max_temperature;
    }

    getTemp()
    {
    return this.temperature; 
    }

    up() 
    {
      if(this.is_max_temperature()) 
      {
        return;
      }
      this.temperature +=1;
    }

    down() 
    {
      if(this.is_min_temperature()) 
      {
        return;
      }
      this.temperature -=1;
    }
}