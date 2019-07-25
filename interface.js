$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temp-increase").click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $("#temp-decrease").click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $("#temp-reset").click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $("#power_saving_on").click(function() {
    thermostat.powerSavingModeOn();
    $("#power-saving-status").text("on")
    updateTemperature();
  })

  $("#power_saving_off").click(function() {
    thermostat.powerSavingModeOff();
    $("#power-saving-status").text("off")
    updateTemperature();
  })

  function updateTemperature() {
    $("#temperature").text(thermostat._temperature);
    $("#temperature").attr("class", thermostat.currentUsage());
    };
  });

  $(document).ready(function() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    });
  });
  $(document).ready(function() {
    $('#current-city').change(function() {
    var city = $('#current-city').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
          $('#current-temperature').text(data.main.temp)
        });
    });
  });
