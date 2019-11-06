import { load } from 'cheerio';

import axios from 'axios';

const GOOGLE_MAP_ORIGINAL_URL = 'https://www.google.com/maps/search/';
const GOOGLE_MAP_ROOT_URL = 'https://www.google.com/maps/'

async function searchLocation(locationParams){
  const url = [GOOGLE_MAP_ROOT_URL, "@", [locationParams.lat, locationParams.lng, locationParams.zoom + "z"].join(","), "/search"].join("")
  return axios.get(url, {
    params: searchParams,
    headers: {
      'user-agent': USER_AGENT,
    },
  });
}