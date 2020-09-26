import { AxiosStatic } from 'axios';

export class StormGlass {
	readonly stormGlassAPIParams = 'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection';
	readonly stormGlassAPISource = 'noaa';
	constructor(protected request: AxiosStatic) {

	}

	public async fetchPoints(latitude: number, longitude: number): Promise<{}> {
		return this.request.get(
      `https://api.stormglass.io/v2/weather/point?lat=23.04323&lng=-10.32032&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}&end=1592113802&lat=${latitude}&lng=${longitude}`
    );
	}
}
