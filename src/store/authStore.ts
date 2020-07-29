import { observable, action } from 'mobx';
import { AuthTypes } from '@type/store';

export const initialAuth: AuthTypes = {
  payload: {
    number: 0,
  },
};

export default class AuthStore {
  @observable
  payload = initialAuth.payload;

  constructor(initialData = initialAuth) {
    this.payload = initialData.payload;
  }

  @action increase = (): void => {
    this.payload.number++;
  };

  @action decrease = (): void => {
    this.payload.number--;
  };
}
