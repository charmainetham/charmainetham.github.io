import React from 'react';
import Header from './Header';
import Main from './Main';
import {withRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    const home = (window.location.hash === '#/');
    let showHeader = null;
    if (home) {
      showHeader =''
    } else {
      showHeader = <Header />
    }
    return(

      <div>
        {showHeader}
        <Main />
      </div>
    );
  }

}

export default App;