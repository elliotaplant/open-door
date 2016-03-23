/**
 *Here we list all Redux actions so we can easily identify them
 */

export const SET_ACTIVE_EVENT = 'SET_ACTIVE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const SET_ALL_USERS = 'SET_ALL_USERS';
export const SET_USER = 'SET_USER';
export const SET_GROUPNAME_INPUT_DISP = 'SET_GROUPNAME_INPUT_DISP';
export const UPDATE_PENDING_EVENT = 'UPDATE_PENDING_EVENT';
export const SET_SWIPER_INDEX = 'SET_SWIPER_INDEX';
export const CREATE_CHECKLIST = 'CREATE_CHECKLIST';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT';
export const TOGGLE_ITEM_SELECTION_IN_LIST = 'TOGGLE_ITEM_SELECTION_IN_LIST';
export const CLEAR_ITEMS_IN_SELECTION_LIST = 'CLEAR_ITEMS_IN_SELECTION_LIST';
export const SET_USER_GROUP_MEMBERS = 'SET_USER_GROUP_MEMBERS';

/**
 * The SELECTION_LISTS is an enumeration of the state properties under state.app.pendingSelections
 */
export const SELECTION_LISTS = {
  FRIENDS_TO_INVITE: 'friendsToInvite',
  GROUPS_TO_INVITE: 'groupsToInvite',
};
