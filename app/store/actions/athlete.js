import {
    RETRIEVE_ATHLETE_DETAILS,
    GET_ATHLETE_CLUBS,
    RETRIEVE_ATHLETE_CLUBS,
    GET_ATHLETE_GEAR,
    RETRIEVE_ATHLETE_GEAR,
} from '../constants/actionTypes';

export function retrieveAthleteDetails(details) {
  return {
    type: RETRIEVE_ATHLETE_DETAILS,
    details,
  };
}

export function getAthleteClubs() {
  return {
    type: GET_ATHLETE_CLUBS,
  };
}

export function retrieveAthleteClubs(clubs) {
  return {
    type: RETRIEVE_ATHLETE_CLUBS,
    clubs,
  };
}

export function getAthleteGear() {
  return {
    type: GET_ATHLETE_GEAR,
  };
}

export function retrieveAthleteGear(gear) {
  return {
    type: RETRIEVE_ATHLETE_GEAR,
    gear,
  };
}
