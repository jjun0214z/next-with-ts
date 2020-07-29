import { Component, ReactNode } from 'react';
import { inject, observer } from 'mobx-react';
import { AuthTypes } from '@type/store';

interface PropsTypes {
  authStore?: AuthTypes;
}

@inject(({ authStore }) => ({
  authStore: authStore,
}))
@observer
class TestPage extends Component<PropsTypes> {
  render(): ReactNode {
    const {
      authStore: {
        payload: { number },
        increase,
        decrease,
      },
    } = this.props;
    return (
      <div>
        {number}
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>다운</button>
      </div>
    );
  }
}

export default TestPage;
