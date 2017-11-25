import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/shared/Header';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import HelloWorld from '@pages/HelloWorld';

const Routes: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <Route exact path='/' component={Main} />
            <Route path='/test' component={Test} />
            <Route path='/readme' component={Readme } />
            <Route path='/helloworld' component={HelloWorld} />
            {/* <Route path='signup' component='Signup' /> */}
            {/* <Route path='login' component='Login' /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;