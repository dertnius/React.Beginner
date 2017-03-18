import * as React from 'react';
import {alertSearchBar} from './searchBar/searchbar-info'

var As = alertSearchBar;

export class App extends React.Component<any, any> {
  render() {
    return (
          
      <div>
      <As/>
      <div>React simple starter
      </div>
      </div>
    );
  }
}