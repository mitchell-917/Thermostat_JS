'use strict';

describe('Thermostat', function() 
{
  var thermostat;

  beforeEach(function() 
  {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() 
  {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Increases the temperature by 1', function() 
  {   
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });
  
  it('Decreases the temperature by 1', function() 
  {   
    thermostat.down()
    expect(thermostat.temperature).toEqual(19);
  });
});