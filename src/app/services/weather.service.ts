import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'
@Injectable()
export class WeatherService {
	private readonly weatherAPIURL: string = "http://api.weatherapi.com/v1/current.json?key=40b0c56b852142989c8115758230407&aqi=yes"

  constructor(private http: HttpClient) { }

	getWeather = async (position: GeolocationPosition) => {
		const req = this.http.get(this.weatherAPIURL + `&q=${position.coords.latitude},${position.coords.longitude}`)
		return await firstValueFrom(req)
	}
}
