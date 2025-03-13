const ACCESS_KEY = 'uNR6ijCGWzdLJgD6hLjt2AfNvMcHFYYu6JRV1O2acUQ';

import axios from 'axios';
import { ResponsePage } from '../components/App/App.types';

export const fetchPictures = async (query: string, page: number) => {
  if (!query.trim()) {
    return [];
  }
  const response: ResponsePage = await axios.get(
    'https://api.unsplash.com/search/photos',
    {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        page: page,
        per_page: 14,
      },
    }
  );

  return response.data.results;
};
