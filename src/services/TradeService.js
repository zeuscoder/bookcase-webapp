import $ from 'jquery';
import { apiUrl } from 'src/utils/api';

export function fetchHome() {
  return $.ajax({
    type: 'GET',
    url: apiUrl(''),
  });
}

export function fetchTradeBaseInfo() {
  return $.ajax({
    type: 'GET',
    url: apiUrl('trades/baseInfo'),
  });
}
