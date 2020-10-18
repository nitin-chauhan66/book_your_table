import { getCorrectConstant } from "./../../../core/util/actionConstants";

export const ACTION_CONSTANTS = {
  LOGIN: "LOGIN",
  SAVE_USER:"SAVE_USER"
};

export const LOGIN = type => {
  return getCorrectConstant(ACTION_CONSTANTS.LOGIN, type);
};

