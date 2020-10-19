import { getCorrectConstant } from "./../../../core/util/actionConstants";

export const ACTION_CONSTANTS = {
  LOGIN: "LOGIN",
  LOGOUT_BUTTON_PRESSED:"LOGOUT_BUTTON_PRESSED"
};

export const LOGIN = type => {
  return getCorrectConstant(ACTION_CONSTANTS.LOGIN, type);
};

