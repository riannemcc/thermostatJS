function Thermostat(){
  this._temperature = 20;
};
Thermostat.prototype.getCurrentTemp = function(){
  return this._temperature;
};

Thermostat.prototype.increase = function(){
  this._temperature += 1;
};

Thermostat.prototype.decrease = function(){
  if(this.getCurrentTemp() === 10 ){
    throw new Error('cannot decrease the temperature below 10');
  }
    this._temperature -= 1;
};
