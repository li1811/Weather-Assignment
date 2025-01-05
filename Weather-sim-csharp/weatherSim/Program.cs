using System;

namespace WeatherSim
{
  class Program
  {
    static void Main(string[] args)
    {
    GenerateWeather();        

    }


    static void GenerateWeather() 
    {
        Weather weather = new Weather();
        weather.ChangeWeather();

        Console.WriteLine(@$"
Today's Weather:
--------------------
Temperature:    {weather.temperature}°c
Condition:      {weather.condition}
Cloudiness:     {weather.cloudcover}
            ");
        if (weather.temperature < -9 && weather.condition == "Snow")
        {
            Console.WriteLine("!!!Warning: It's extremely cold and snowy. Do not go outside!!!");
        }
    }
  }
}