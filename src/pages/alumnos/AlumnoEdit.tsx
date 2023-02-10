import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const AlumnoEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string;}>();
  const [alumnos, setAlumnos] = useState<any>([]);

  useEffect(()=>{
    search();
  },[]);

  const search =()=>{
    // const result = searchAlumnos();
    // setAlumnos(result);
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
                    <IonInput placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Dirección</IonLabel>
                    <IonInput placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
  
            </IonGrid>

            <IonItem>
              <IonButton color="success" fill='solid' slot='end' size='default'>
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
