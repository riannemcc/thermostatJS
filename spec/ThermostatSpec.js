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
    // var step;
    // for(let step = 0; step < 10; step++) {
    //   thermostat.decrease();
    // }
    while (thermostat.getCurrentTemp() > 10 ) {
      thermostat.decrease();
    }
    expect(function(){ thermostat.decrease();}).toThrowError('cannot decrease the temperature below 10');
  })

  describe('Power Saving Mode', function() {
    it('Sets max temperature to 25 when ON', function(){
      thermostat.powerSavingModeOn();
      expect(thermostat._maxTemperature).toEqual(25);
    });

    it('Sets max temperature to 32 when OFF', function(){
      thermostat.powerSavingModeOff();
      expect(thermostat._maxTemperature).toEqual(32);
    });

    it('Prevents temperature from being increased above 25 when ON', function() {
      thermostat.powerSavingModeOn();
      while (thermostat.getCurrentTemp() < 25 ) {
        thermostat.increase();
      }
      expect(function(){ thermostat.increase();}).toThrowError('cannot increase the temperature above 25');
    });

    it('Prevents temperature from being increased above 32 when OFF', function() {
      thermostat.powerSavingModeOff();
      while (thermostat.getCurrentTemp() < 32 ) {
        thermostat.increase();
      }
      expect(function(){ thermostat.increase();}).toThrowError('cannot increase the temperature above 32');
    });
  })
});
