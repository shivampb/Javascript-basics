async function getWeatherData() {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=us&key=TQAXYNFBZ6ENUSTQ92TQETZPE&contentType=json");
        const data = await response.json();
        console.log(data);

        // Check if the response data contains any data points
        if (data && data.days && data.days.length > 0) {
            const datetime = data.days[0].datetime; // Access the datetime of the first data point
            const temp = data.days[0].tempmax;
            const address = data.address; // Access the datetime of the first data point
            console.log("state: " + address);
            console.log("Datetime: " + datetime);
            console.log("temperature: " + temp);
        } else {
            console.log("No weather data available.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getWeatherData();
