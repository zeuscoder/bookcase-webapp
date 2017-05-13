import $ from 'jquery';
import { apiUrl } from 'src/utils/api';

export function fetchTrades(params) {
  return $.ajax({
    type: 'GET',
    url: apiUrl('trades', { ...params }),
  });
}

export function fetchTradeBaseInfo() {
  return $.ajax({
    type: 'GET',
    url: apiUrl('trades/baseInfo'),
  });
}
