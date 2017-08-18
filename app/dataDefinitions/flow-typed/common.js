// @flow
import {
  SET_CURRENT_USER_ID,
  SET_CURRENT_CLUB_ID,
  SET_CURRENT_RACE_ID
} from "../../store/constants/actionTypes";

export type Id = string;

type Entity = any;

type EntityName = "athletes" | "clubs" | string;

type EntitiesList<T: Entity> = {
  [Id]: ?T
};

export type StoreState = {
  +entities: {
    [EntityName]: EntitiesList<Entity>
  },
  +appState: any,
  +screenState: any
};

export type setCurrentUserIDAction = {
  type: SET_CURRENT_USER_ID,
  currentUserID: string
};

export type setCurrentClubIDAction = {
  type: SET_CURRENT_CLUB_ID,
  currentClubID: string
};

export type setCurrentRaceIDDAction = {
  type: SET_CURRENT_RACE_ID,
  currentRaceID: string
};
