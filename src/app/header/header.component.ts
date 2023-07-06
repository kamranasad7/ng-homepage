import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [WeatherService],
})
export class HeaderComponent {
	username: string = 'User';
  usernameEdit: boolean = false;
	currentTime: Date = new Date();
	currentWeather: any = null;

	@ViewChild("usernameField") usernameFieldRef!: ElementRef;
  
	constructor(private weather: WeatherService) { }

	ngOnInit() {
		this.username = localStorage.getItem('username') || "User";
		setInterval(() => this.currentTime = new Date(), 1000 * 60);

		navigator.geolocation.getCurrentPosition(this.getWeather)
	}

	getWeather = async (position: GeolocationPosition) => {
		this.currentWeather = await this.weather.getWeather(position)
	}

  editUsername() {
    this.usernameEdit = true;
		setTimeout(() => this.usernameFieldRef.nativeElement.focus(), 100);
  }

  saveUsername() {
    this.usernameEdit = false;
		localStorage.setItem('username', this.username)
  }
}