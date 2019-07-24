function Thermostat(){
  this._temperature = 20;
  this._maxTemperature = 25;
  this._powerSavingMode = 'ON';
};
Thermostat.prototype.getCurrentTemp = function(){
  return this._temperature;
};

Thermostat.prototype.increase = function(){
  if(this.getCurrentTemp() === this._maxTemperature){
    throw new Error(`cannot increase the temperature above ${this._maxTemperature}`)
  }
  this._temperature += 1;
};

Thermostat.prototype.decrease = function(){
  if(this.getCurrentTemp() === 10 ){
    throw new Error('cannot decrease the temperature below 10');
  }
    this._temperature -= 1;
};

Thermostat.prototype.reset = function(){
  this._temperature = 20
};

Thermostat.prototype.currentUsage = function(){
  if(this.getCurrentTemp() < 18 ){
    return 'low-usage';
  }
  else if((this.getCurrentTemp() > 18) && (this.getCurrentTemp() < 25)){
    return 'medium-usage'};
};

Thermostat.prototype.powerSavingModeOn = function(){
  this._powerSavingMode = 'ON';
  this._maxTemperature = 25;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this._powerSavingMode = 'OFF';
  this._maxTemperature = 32;
};
