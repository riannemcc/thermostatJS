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
});
