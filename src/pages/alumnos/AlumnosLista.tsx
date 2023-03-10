import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
// import ExploreContainer from '../../components/ExploreContainer';
import { removeAlumno, saveAlumno, searchAlumnos } from './AlumnoApi';
import Alumnos from './Alumnos';


const AlumnosLista: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [alumnos, setAlumnos] = useState<Alumnos[]>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  },[history.location.pathname]);

  const search =()=>{
    const result = searchAlumnos();
    setAlumnos(result);
  }

  const remove = (id: string) =>{
    removeAlumno(id);
    search();
  }

  // const prubaLocalSotorage = () =>{
  //   const ejemplo = {
  //     id: '95240006',
  //     name: 'Francico Garcia',
  //     email: 'paco@email.com',
  //     address: 'la que sea 907'
  //   };

  //   saveAlumno(ejemplo);
  //   search();
  // }

  const addAlumnos = () =>{
    history.push('/page/alumno/new');
  }

  const editAlumnos = (id: string) =>{
    history.push('/page/alumno/'+ id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Alumnos </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonItem>
              <IonButton onClick={addAlumnos} color="primary" fill='solid' slot='end' size='default'>
                <IonIcon icon={add}/>
                Agregar Alumno
                </IonButton>
            </IonItem>
            <IonGrid className='table'>
              <IonRow>
                <IonCol>Matricula</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Direcci??n</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>
              {alumnos.map((alumno:Alumnos)=>
                <IonRow key={alumno.id}>
                  <IonCol>{alumno.id}</IonCol>
                  <IonCol>{alumno.name}</IonCol>
                  <IonCol>{alumno.email}</IonCol>
                  <IonCol>{alumno.address}</IonCol>
                  <IonCol>
                    <IonButton onClick={()=> editAlumnos(String(alumno.id))} color='primary' fill='clear'>
                      <IonIcon icon={pencil} slot='icon-only'/>
                    </IonButton>
                    <IonButton  color='danger' fill='clear' onClick={()=>{remove(String(alumno.id))}}>
                      <IonIcon icon={close} slot='icon-only'/>
                    </IonButton>
                  </IonCol>
                </IonRow>
                )}
          </IonGrid>
          </IonCard>
          {/* <IonButton onClick={prubaLocalSotorage} color='danger' fill='clear'>
                      Bot??n de Prueba
          </IonButton> */}

        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default AlumnosLista;
