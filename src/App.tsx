import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home/Home';
import AddNumber from './pages/AddNumbers/AddNumber';
import Translator from './pages/Translator/Translator';
import Multiplication from './pages/Multiplication/Multiplication';
import VideoDisplay from './pages/VideoDisplay/VideoDisplay';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from 'react';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Home" />
            </Route>
            <Route path="/page/Home" >
              <Home/>
            </Route>
            <Route path="/page/AddNumbers" >
              <AddNumber/>
            </Route>
            <Route path="/page/Translate" >
              <Translator/>
            </Route>
            <Route path="/page/Multiplication" >
              <Multiplication/>
            </Route>
            <Route path="/page/VideoDisplay" >
              <VideoDisplay/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
