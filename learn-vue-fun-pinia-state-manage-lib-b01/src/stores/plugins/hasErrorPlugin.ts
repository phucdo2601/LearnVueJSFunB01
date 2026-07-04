import { toRef } from "vue";

export function hasErrorPlugin({ store }: any) {
  store.$state.hasError = true;
  store.hasError = toRef(store.$state, "hasError");
}
