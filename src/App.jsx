import React from 'react';

const App = () => (
  <div>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <div className="uk-navbar-item uk-logo">
          Logo
        </div>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li><a href="uikit">Inicio</a></li>
        </ul>
      </div>
    </nav>

    <div className="uk-section">
      <div className="uk-container">
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
      </div>
    </div>
  </div>
);

export default App;
