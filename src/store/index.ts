import AuthStore, { initialAuth } from './authStore';

const initialRoot = {
  authStore: initialAuth,
};

export default class RootStore {
  public authStore;

  constructor(initialData = initialRoot) {
    this.authStore = new AuthStore(initialData.authStore);
  }
}
