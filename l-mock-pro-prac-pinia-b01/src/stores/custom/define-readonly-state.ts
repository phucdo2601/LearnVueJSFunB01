import { defineStore } from "pinia";
import { reactive } from "vue";

/**
 *
 * @param {*} id represents the name of the pinia store
 * @param {*} props  represents the properties
 * @param {*} setup is a function that takes parameter
 */
export function defineReadonlyState(id: any, props: any, setup: any) {
  return defineStore(id, () => {
    return setup(reactive(props));
  });
}
