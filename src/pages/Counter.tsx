import { Component, ReactNode } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
  @observable number = 0;

  @action
  increase = (): void => {
    this.number++;
  };

  @action
  decrease = (): void => {
    this.number--;
  };

  render(): ReactNode {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
