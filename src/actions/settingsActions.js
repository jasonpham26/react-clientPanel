import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from './types';

export const setDisableBalanceOnAdd = () => {
  // Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  // Toggle
  settings.setDisableBalanceOnAdd = !settings.setDisableBalanceOnAdd;

  // Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.setDisableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  // Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  // Toggle
  settings.setDisableBalanceOnEdit = !settings.setDisableBalanceOnEdit;

  // Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.setDisableBalanceOnEdit
  };
};

export const setAllowRegistration = () => {
  // Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  // Toggle
  settings.setAllowRegistration = !settings.setAllowRegistration;

  // Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.setAllowRegistration
  };
};
