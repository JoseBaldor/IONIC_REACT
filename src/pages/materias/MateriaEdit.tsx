import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Console, debug } from 'console';
import { add, checkmark, close, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { saveMateria, searchMateriaById } from './MateriasApi';
import Materias from './Materias';

const MateriaEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string;}>();
  const [materias, setMaterias] = useState<Materias>({});
  const history = useHistory();

  useEffect(()=>{
    search();
  },[]);

  const search =()=>{
    if(id !== 'new'){
      let result = searchMateriaById(id);
      setMaterias(result);
    }
    // const result = searchMaterias();
    // setMaterias(result);
  }
  const save = () =>{
    // debugger;
    saveMateria(materias);
    history.push('/page/materias');

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Materias</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonContent>
          <IonCard>
            <IonTitle>{id === 'new'? "Agregar Materia":"Editar Materia"}</IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Id</IonLabel>
                    <IonInput onIonChange={e => materias.id = String(e.detail.value)} value={materias.id} placeholder="Enter text"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e => materias.name = String(e.detail.value)} value={materias.name} placeholder="Enter text"></IonInput>
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

export default MateriaEdit;
