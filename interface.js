$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-increase').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#temp-decrease').click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#power_saving_on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#power_saving_off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
  };
});
