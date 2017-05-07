import $ from 'jquery';
import { apiUrl } from 'src/utils/api';

export function fetchHome() {
  return $.ajax({
    type: 'GET',
    url: apiUrl(''),
  });
}

export function fetchBooks(params) {
  return $.ajax({
    type: 'GET',
    url: apiUrl('books', params),
  });
}

export function fetchBookCategories() {
  return $.ajax({
    type: 'GET',
    url: apiUrl('books/categories'),
  });
}

export function fetchBookInfo(bookId) {
  return $.ajax({
    type: 'GET',
    url: apiUrl(`books/${bookId}`),
  });
}
