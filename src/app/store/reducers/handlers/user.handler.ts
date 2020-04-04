export function set_user_state(state, action) {
  return action.user || action;
}

export function clear_user_state(state, action) {
  return null;
}
