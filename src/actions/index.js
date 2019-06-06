import { API_CALL_REQUEST } from '../constants/action-types';
import { API_CALL_SUCCESS } from '../constants/action-types';
import { API_CALL_FAILURE } from '../constants/action-types';
import { PAGE_CHANGED } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';


export function makeApiCall() {
  return { type: API_CALL_REQUEST }
}

export function fetchedMovies(payload) {
  return { type: API_CALL_SUCCESS, payload }
}

export function failApiCall() {
  return { type: API_CALL_FAILURE }
}

export function changePage(payload) {
  return { type: PAGE_CHANGED, payload }
}

export function toggleMenu() {
  return { type: TOGGLE_MENU }
}
