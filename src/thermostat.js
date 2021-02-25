'use strict';

class Thermostat 
{
    constructor() 
    {
    this.MAX_TEMPERATURE = 32;
    this.MIN_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_OFF = this.MAX_TEMPERATURE;
    this.MAX_LIMIT_PSM_ON = 25;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.power_saving_mode = true;
    }

    is_power_saving_mode() 
    {
      return this.power_saving_mode === true;
    }
  
    power_saving_mode_on() 
    {
      return this.power_saving_mode = true;
    }

    power_saving_mode_off() 
    {
      return this.power_saving_mode = false;
    }

    resetTemperature()
    {
      return this.temperature = this.DEFAULT_TEMPERATURE;
    }

    is_min_temperature() 
    {
      return this.temperature === this.MIN_TEMPERATURE;
    }

    is_max_temperature()
    {
      if(this.is_power_saving_mode() === false) 
      {
       return this.temperature === this.MAX_LIMIT_PSM_OFF;
      }
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    }

    energyUsage()
    {
      if(this.temperature < 18)
      {
       return ('Low-usage');
      }
      if(this.temperature >= 18 && this.temperature <= 25)
      {
        return ('Medium-usage');
      }
      if(this.temperature > 25)
      {
        return ('High-usage');
      }
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