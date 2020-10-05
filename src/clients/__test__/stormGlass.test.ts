import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3Hours from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassWeatherNormalized3Hours from '@test/fixtures/stormglass_weather_normalized_response_3hours.json';

jest.mock('axios');

describe('stormGlass client', () => {
  it('should return the normalized forecast from the stormglass service', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const latitude = -33.89225;
    const longitude = 151.23123;

    mockedAxios.get.mockResolvedValue({
      data: stormGlassWeatherNormalized3Hours,
    });

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(latitude, longitude);
    expect(response).toEqual(stormGlassWeatherNormalized3Hours);
  });
});
