import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Console, debug } from 'console';
import { add, checkmark, close, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { saveAlumno, searchAlumnoById } from './AlumnoApi';
import Alumnos from './Alumnos';

const AlumnoEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string;}>();
  const [alumnos, setAlumnos] = useState<Alumnos>({});
  const history = useHistory();

  useEffect(()=>{
    search();
  },[]);

  const search =()=>{
    if(id !== 'new'){
      let result = searchAlumnoById(id);
      setAlumnos(result);
    }
    // const result = searchAlumnos();
    // setAlumnos(result);
  }
  const save = () =>{
    // debugger;
    saveAlumno(alumnos);
    history.push('/page/alumnos');

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Alumnos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonContent>
          <IonCard>
            <IonTitle>{id === 'new'? "Agregar Alumno":"Editar Alumno"}</IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Matricula</IonLabel>
                    <IonInput onIonChange={e => alumnos.id = String(e.detail.value)} value={alumnos.id} placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e => alumnos.name = String(e.detail.value)} value={alumnos.name} placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={e => alumnos.email = String(e.detail.value)} value={alumnos.email} placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Direcci??n</IonLabel>
                    <IonInput onIonChange={e => alumnos.address = String(e.detail.value)} value={alumnos.address} placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
  
            </IonGrid>

            <IonItem>
              <IonButton onClick={save} color="success" fill='solid' slot='end' size='default'>
                <IonIcon icon={checkmark}/>
                Guardar
                </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default AlumnoEdit;
