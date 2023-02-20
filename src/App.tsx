import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

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
import AlumnosLista from './pages/alumnos/AlumnosLista';
import AlumnoEdit from './pages/alumnos/AlumnoEdit';
import MateriasLista from './pages/materias/MateriasLista';
import MateriaEdit from './pages/materias/MateriaEdit';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/alumnos" />
            </Route>
            <Route path="/page/alumnos/" exact={true}>
              <AlumnosLista/>
            </Route>
            <Route path="/page/alumno/:id" exact={true}>
              <AlumnoEdit/>
            </Route>
            <Route path="/page/materias/" exact={true}>
              <MateriasLista/>
            </Route>
            <Route path="/page/materia/:id" exact={true}>
              <MateriaEdit/>
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
