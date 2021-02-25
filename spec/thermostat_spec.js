'use strict';

  describe('Thermostat', function() 
  {
    var thermostat;

    beforeEach(function() 
    {
      thermostat = new Thermostat();
    });

    it('Starts at 20 degrees', function() 
    {
      expect(thermostat.temperature).toEqual(20);
    });

  describe('Change the temperature', function()
  {
   it('Increases the temperature by 1 degree', function() 
   {   
     thermostat.up();
     expect(thermostat.temperature).toEqual(21);
   });

    it('Decreases the temperature by 1 degree', function() 
   {   
     thermostat.down()
     expect(thermostat.temperature).toEqual(19);
   });
  });

  describe('Check Power saving mode and turn it off & on', function() 
  {
    it('Has Power Saving Mode enabled by default', function() 
    {
      thermostat.is_power_saving_mode();
      expect(thermostat.is_power_saving_mode()).toEqual(true);
    });

   it('Turn off Power Saving Mode and turn it back on ', function() 
    {
      thermostat.power_saving_mode_off();
      expect(thermostat.is_power_saving_mode()).toEqual(false);
      thermostat.power_saving_mode_on();
      expect(thermostat.is_power_saving_mode()).toEqual(true);
    });
  });


  describe('A minimum and maximum temperature', function()  
  {
    it('has a minimum of 10 degrees', function() 
    {
      for (var i = 0; i < 11; i++) 
      {
      thermostat.down();
      }
      expect(thermostat.getTemp()).toEqual(10);
    });

  
    it('When Power Saving is on, Max of 25 Degrees', function() 
    {
      thermostat.power_saving_mode_on();
      for (var i = 0; i < 21; i++) 
      {
      thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(25);
    });

    it('When Power Saving mode is off, Max of 32 Degrees', function()
    {
      thermostat.power_saving_mode_off();
      for (var i = 0; i < 21; i++) 
      {
      thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(32);
    });
  });

  describe('The Temperature can be reset to the default 20 Degrees', function()
  {
    it('Will reset the Temperature', function()
    {
      for (var i = 0; i < 21; i++) 
      {
      thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('Display Energy Usage Levels', function()
  {
    describe('When the usage is below 18 Degrees', function()
    {
      it('should display, Low-Usage', function()
      {
      for (var i = 0; i < 21; i++) 
      {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('Low-usage');
      });
    });

    describe('When energy usage is from 18 - 25 Degrees', function()
    {
      it('should display, Medium-Usage', function()
      {
        thermostat.resetTemperature()
        expect(thermostat.energyUsage()).toEqual('Medium-usage');
      });
    });
  });
});