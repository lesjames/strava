// @flow
import {
  SET_CURRENT_USER_ID,
  SET_CURRENT_CLUB_ID,
  SET_CURRENT_RACE_ID
} from "../constants/actionTypes";
import type {
  setCurrentClubIDAction,
  setCurrentRaceIDDAction,
  setCurrentUserIDAction
} from "../../dataDefinitions/flow-typed/common";

export function setCurrentUserID(
  currentUserID: string
): setCurrentUserIDAction {
  return {
    type: SET_CURRENT_USER_ID,
    currentUserID
  };
}

export function setCurrentClubID(
  currentClubID: string
): setCurrentClubIDAction {
  return {
    type: SET_CURRENT_CLUB_ID,
    currentClubID
  };
}

export function setCurrentRaceID(
  currentRaceID: string
): setCurrentRaceIDDAction {
  return {
    type: SET_CURRENT_RACE_ID,
    currentRaceID
  };
}
