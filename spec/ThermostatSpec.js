describe('Thermostat', function(){
  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20);
  });

  it('allows the temperature to be increased', function(){
    thermostat.increase();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('allows the temperature to be decreased', function(){
    thermostat.decrease();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('prevents temperature from being decreased to less than 10', function(){
    var step;
    for(let step = 0; step < 10; step++) {
      thermostat.decrease();
    }
    expect(function(){ thermostat.decrease();}).toThrowError('cannot decrease the temperature below 10');
  })

});
