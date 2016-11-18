import object from 'lodash/fp/object';

// api接口 地址前缀，移除了末尾的 '/'
export const API_BASE_URI = process.env.API_BASE_URI.replace(/[/]$/, '');

function encodedKeyValue(query) {
  if (Array.isArray(query)) {
    if (query[1] == null) {
      return '';
    }
    return `${query[0]}=${encodeURIComponent(query[1])}`;
  }
  if (typeof query === 'object') {
    return object.toPairs(query)
        .filter(x => x[1] != null)
        .map(x => `${x[0]}=${encodeURIComponent(x[1])}`)
        .join('&');
  }
  return query;
}

/**
 * 构造API绝对路径
 * @param path API路径
 * @param query Query参数，支持的格式有：[k, v]、{k1: v1, k2: v2} 或 'k=v'
 */
export function apiUrl(path, ...query) {
  let url;
  if (path.match(/^https?:/)) {
    url = path;
  } else if (path.substr(0, 1) !== '/') {
    url = `${API_BASE_URI}/${path}`;
  } else {
    url = API_BASE_URI + path;
  }
  if (query.length !== 0) {
    const queryString = query
        .map(encodedKeyValue)
        .filter(x => x !== '')
        .join('&');
    if (queryString === '') {
      return url;
    }
    const sep = path.indexOf('?') !== -1 ? '&' : '?';
    return `${url}${sep}${queryString}`;
  }
  return url;
}
