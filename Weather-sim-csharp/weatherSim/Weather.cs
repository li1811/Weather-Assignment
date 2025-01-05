namespace WeatherSim
{
    public class Weather
    {
        Random rand = new Random();
        public int temperature = -10;
        public string condition = "Snow";
        public string cloudcover = "20%";

        public void ChangeWeather() 
        {
            this.temperature = rand.Next(-10, 40); // generate random temperature between -10 and 40 degrees

            List<string> conditions = new List<string> {"Snow", "Clear", "Rain"};
            if (this.temperature < -1) // Since it very rarely rains when it's a few degrees below freezing, i remove rain from the list if it's -2 or colder
            {
                conditions.RemoveAt(2);
            }
            else if (this.temperature > 2) // similarly i remove snow if it's warmer than 2 degrees
            {
                conditions.RemoveAt(0);
            }
            this.condition = conditions[rand.Next(conditions.Count)]; // generates a random index for the conditions list

            this.cloudcover = rand.Next(0, 11) * 10 + "%"; /* generates a random cloud percentage, i wanted nice round numbers so this generates a random number between 0 and 10, multiplies it by 10 so we end up with 10, 20, 30 etc, and then adds a percentage symbol to the end */
        }
       
    }
}