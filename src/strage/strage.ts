import { JumpInfo } from "../types";

export type CurrentInfoStrage = {
  key: "CURRENT_INFO";
  value: JumpInfo;
};

type StorageEntry = CurrentInfoStrage;

export class ExtStorage {
  #key: StorageEntry["key"];

  constructor(key: StorageEntry["key"]) {
    this.#key = key;
  }

  get(callback: (item: StorageEntry["value"]) => void) {
    chrome.storage.local.get(this.#key, (item) => callback(item[this.#key]));
  }

  set(value: StorageEntry["key"], callback?: () => void) {
    chrome.storage.local.set({ [this.#key]: value }, callback);
  }

  remove(callback?: () => void) {
    chrome.storage.local.remove(this.#key, callback);
  }
}
