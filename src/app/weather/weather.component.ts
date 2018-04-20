import { Component, OnInit } from '@angular/core';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public cityName = '';
  public tempDetails = [];
  public tempdetailsLength = 0;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
  }

  searchWeatherDetails = () => {
    this.weatherService.getWeatherDetails(this.cityName).subscribe((res)=>{
      let duplicateId = -1;
      this.tempDetails.forEach((el, index) => {
        if(el.name === res.name){
          duplicateId = index;
        }
      })
      if(duplicateId > 0 || duplicateId === 0) {
        this.tempDetails[duplicateId] = res
      } else {
        this.tempDetails.push(res);
      }
      this.tempdetailsLength = this.tempDetails.length;
      this.cityName = '';
    })
  }

}
