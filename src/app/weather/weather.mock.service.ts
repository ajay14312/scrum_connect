import { WeatherService } from "./weather.service";
import { Observable } from "rxjs";

const Temp_Object = { "coord": { "lon": -84.08, "lat": 37.13 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 10.01, "pressure": 1015, "humidity": 61, "temp_min": 8, "temp_max": 12 }, "visibility": 16093, "wind": { "speed": 5.7, "deg": 330, "gust": 9.3 }, "clouds": { "all": 90 }, "dt": 1524123300, "sys": { "type": 1, "id": 1153, "message": 0.0026, "country": "US", "sunrise": 1524135365, "sunset": 1524183310 }, "id": 4298960, "name": "London", "cod": 200 }

export class MockWeatherService extends WeatherService {
    getWeatherDetails(): Observable<any>{
        return Observable.of(Temp_Object)
    }
}