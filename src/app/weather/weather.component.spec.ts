import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { MockWeatherService } from './weather.mock.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: MockWeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      providers: [{provide: WeatherService, useClass: MockWeatherService},
        HttpClient],
      imports: [FormsModule,
        HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();
  });

  it('cityName should be empty', () => {
    component.cityName = '';
    expect(component.cityName).toEqual('');
  });

  it('tempDetails array should be empty', () => {
    component.tempDetails = [];
    expect(component.tempDetails.length).toEqual(0);
  });

  it('tempDetails array length should not be 2', () => {
    component.tempDetails = [1];
    expect(component.tempDetails.length).not.toEqual(2);
  });

  it('should call searchWeatherDetails', () => {
    component.searchWeatherDetails();
    expect(component.tempDetails.length).toEqual(1);
    expect(component.tempdetailsLength).toEqual(1);
  });
});
