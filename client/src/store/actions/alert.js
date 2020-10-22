import { DISMISS_ALERT, SPAWN_ALERT } from "../types";

export const spawnAlert = data => ({ type: SPAWN_ALERT, payload: data });

export const dismissAlert = () => ({ type: DISMISS_ALERT });
