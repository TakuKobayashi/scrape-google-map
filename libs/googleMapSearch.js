import { load } from 'cheerio';

import axios from 'axios';

const GOOGLE_MAP_ORIGINAL_URL = 'https://www.google.com/maps/search/';
const GOOGLE_MAP_ROOT_URL = 'https://www.google.com/maps/'

export async function searchGoogleMapToObjects(locationParams){
  const response = await searchPlaceInfo(locationParams);
  const $ = load(response.data);

  // TODO 解析結果
  /*
  for (const element of Object.values($('.rg_meta'))) {
    const meta = tryParseJSON($(element).text());
  }
  */
}

/*
locationParamsの中身の例
{
  "searchString": "pubs near prague",
  "lat": "50.0860729",
  "lng": "14.4135326",
  "zoom": 10
}
*/
async function searchPlaceInfo(locationParams){
  const url = [GOOGLE_MAP_ROOT_URL, "@", [locationParams.lat, locationParams.lng, locationParams.zoom + "z"].join(","), "/search"].join("")
  return axios.get(url, {
    params: searchParams,
  });
}