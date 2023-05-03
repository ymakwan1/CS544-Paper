export const TOGGLE_READ = 'TOGGLE_READ';

interface ToggleReadAction {
  type: typeof TOGGLE_READ;
  payload: number;
}

export type BookActionTypes = ToggleReadAction;

export function toggleRead(id: number): BookActionTypes {
  return {
    type: TOGGLE_READ,
    payload: id,
  };
}