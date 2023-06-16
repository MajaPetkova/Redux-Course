import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

export const bugAdded=(description)=> ({
 type: BUG_ADDED, payload: { description: "Bug 1" }
})
export function bugRemoved(id) {
  return { type: BUG_REMOVED, payload: { id: 1 } };
}
