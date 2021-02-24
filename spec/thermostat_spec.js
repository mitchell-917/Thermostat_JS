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

  it('Increases the temperature by 1', function() 
  {   
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('Decreases the temperature by 1', function() 
  {   
    thermostat.down()
    expect(thermostat.temperature).toEqual(19);
  });


  it('Has Power Saving Mode enabled by default', function() {
    thermostat.is_power_saving_mode();
    expect(thermostat.is_power_saving_mode()).toEqual(true);
  });

  it('Has Power Saving Mode enabled by default', function() {
    expect(thermostat.power_saving_mode_off()).toEqual(false);
  });



});