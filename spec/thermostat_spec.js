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

  describe('Check Power saving mode and turn it off', function() 
  {
    it('Has Power Saving Mode enabled by default', function() 
    {
      thermostat.is_power_saving_mode();
      expect(thermostat.is_power_saving_mode()).toEqual(true);
    });

   it('Can turn off Power saving mode', function() 
    {
      thermostat.power_saving_mode_off();
      expect(thermostat.is_power_saving_mode()).toEqual(false);
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

  
    it('has a maximum of 25 degrees', function() 
    {
      for (var i = 0; i < 21; i++) 
      {
      thermostat.up();
      }
      expect(thermostat.getTemp()).toEqual(25);
    });
  });
});