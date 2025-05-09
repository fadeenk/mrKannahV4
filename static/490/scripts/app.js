function titleCase(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

function fullDay(str) {
  switch (str) {
    case "Tue":
      return "Tuesday";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Sat":
      return "Saturday";
    default:
      return str + "day";
  }
}

window.initWeather = function () {
  (window.$wrapper = $(".wrapper")),
    (window.$panel = $wrapper.find(".panel")),
    (window.$city = $panel.find("#city")),
    (window.$weather = $panel.find(".weather")),
    (window.$group = $panel.find(".group")),
    (window.$dt = $group.find("#dt")),
    (window.$description = $group.find("#description")),
    (window.$wind = $group.find("#wind")),
    (window.$humidity = $group.find("#humidity")),
    (window.$temperature = $weather.find("#temperature")),
    (window.$temp = $temperature.find("#temp")),
    (window.$icon = $temp.find("#condition")),
    (window.$tempNumber = $temp.find("#num")),
    (window.$celsius = $temp.find("#celsius")),
    (window.$fahrenheit = $temp.find("#fahrenheit")),
    (window.$forecast = $weather.find("#forecast")),
    (window.$search = $wrapper.find("search")),
    (window.$form = $search.find("form")),
    (window.$button = $form.find("#button"));
};

window.getWeather = function ({ lat, lon }) {
  var appid = "58b6f7c78582bffab3936dac99c31b25";
  var requestWeather = $.ajax({
    dataType: "json",
    url: "//api.openweathermap.org/data/2.5/weather",
    data: {
      lat,
      lon,
      units: "imperial",
      appid: appid,
    },
  });
  var requestForecast = $.ajax({
    dataType: "json",
    url: "//api.openweathermap.org/data/2.5/forecast/daily",
    data: {
      lat,
      lon,
      units: "imperial",
      cnt: "6",
      appid: appid,
    },
  });

  $fahrenheit.addClass("active").removeAttr("href");
  $celsius.removeClass("active").attr("href", "#");
  $icon.removeClass();
  $button.removeClass().addClass("button transparent");

  requestWeather.done(function (data) {
    var weather = document.getElementById("weather");
    if (data.cod === "404") {
      $city.html("city not found");
      setBackground("color404", "button404");
      weather.style.display = "none";
    } else weather.style.display = "";

    var dt = new Date(data.dt * 1000).toString().split(" ");

    var title = data.sys.country
      ? data.name + ", " + data.sys.country
      : data.name;

    $city.html(title);
    $tempNumber.html(Math.round(data.main.temp));
    $description.html(titleCase(data.weather[0].description));
    $wind.html("Wind: " + data.wind.speed + " mph");
    $humidity.html("Humidity " + data.main.humidity + "%");
    $dt.html(fullDay(dt[0]) + " " + dt[4].substring(0, 5));

    $celsius.on("click", toCelsius);
    $fahrenheit.on("click", toFahrenheit);

    function toCelsius() {
      $(this).addClass("active").removeAttr("href");
      $fahrenheit.removeClass("active").attr("href", "#");
      $tempNumber.html(Math.round((data.main.temp - 32) * (5 / 9)));
    }

    function toFahrenheit() {
      $(this).addClass("active").removeAttr("href");
      $celsius.removeClass("active").attr("href", "#");
      $tempNumber.html(Math.round(data.main.temp));
    }

    function setBackground(background, button) {
      $("body").removeClass().addClass(background);
      $button.off().hover(
        function () {
          $(this).removeClass("transparent").addClass(button);
        },
        function () {
          $(this).removeClass().addClass("button transparent");
        }
      );
    }

    if (data.main.temp >= 80) setBackground("hot", "button-hot");
    else if (data.main.temp >= 70) setBackground("warm", "button-warm");
    else if (data.main.temp >= 60) setBackground("cool", "button-cool");
    else setBackground("cold", "button-cold");

    switch (data.weather[0].icon) {
      case "01d":
        $icon.addClass("wi wi-day-sunny");
        break;
      case "02d":
        $icon.addClass("wi wi-day-sunny-overcast");
        break;
      case "01n":
        $icon.addClass("wi wi-night-clear");
        break;
      case "02n":
        $icon.addClass("wi wi-night-partly-cloudy");
        break;
    }

    switch (data.weather[0].icon.substr(0, 2)) {
      case "03":
        $icon.addClass("wi wi-cloud");
        break;
      case "04":
        $icon.addClass("wi wi-cloudy");
        break;
      case "09":
        $icon.addClass("wi wi-showers");
        break;
      case "10":
        $icon.addClass("wi wi-rain");
        break;
      case "11":
        $icon.addClass("wi wi-thunderstorm");
        break;
      case "13":
        $icon.addClass("wi wi-snow");
        break;
      case "50":
        $icon.addClass("wi wi-fog");
        break;
    }
  });

  requestForecast.done(function (data) {
    $celsius.on("click", toCelsius);
    $fahrenheit.on("click", toFahrenheit);

    var forecast = [];
    var length = data.list.length;
    for (var i = 1; i < length; i++) {
      forecast.push({
        date: new Date(data.list[i].dt * 1000).toString().split(" ")[0],
        fahrenheit: {
          high: Math.round(data.list[i].temp.max),
          low: Math.round(data.list[i].temp.min),
        },
        celsius: {
          high: Math.round((data.list[i].temp.max - 32) * (5 / 9)),
          low: Math.round((data.list[i].temp.min - 32) * (5 / 9)),
        },
      });
    }

    function toCelsius() {
      doForecast("celsius");
    }

    function toFahrenheit() {
      doForecast("fahrenheit");
    }

    function doForecast(unit) {
      var arr = [];
      var length = forecast.length;
      for (var i = 0; i < length; i++) {
        arr[i] =
          "<div class='block'><h3 class='secondary'>" +
          forecast[i].date +
          "</h3><h2 class='high'>" +
          forecast[i][unit].high +
          "</h2><h4 class='secondary'>" +
          forecast[i][unit].low +
          "</h4></div>";
      }
      $forecast.html(arr.join(""));
    }

    doForecast("fahrenheit");
  });
};
