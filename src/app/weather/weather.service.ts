import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient){

    }

    getWeatherDetails(cityName) : Observable<any>{
        const url = 'https://openweathermap.org/data/2.5/weather/'
        const city = cityName;
        const appId = 'appid=b6907d289e10d714a6e88b30761fae22'
        return this.http.get(`${url}?q=${city}&${appId}`);
    }
}

