import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Wootric from './Wootric';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wootric example App with React</h2>
        </div>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis tortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere ligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem. Nullam efficitur vulputate mauris, nec maximus leo dignissim id.
        </p>

        <p className="App-intro">
In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus. Morbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae placerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel purus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra sodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non scelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus posuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec interdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie ac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu tempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in consequat elit tellus auctor nulla. Donec placerat elementum diam, vitae imperdiet lectus luctus at.
        </p>
        <Wootric />
      </div>
    );
  }
}

export default App;
