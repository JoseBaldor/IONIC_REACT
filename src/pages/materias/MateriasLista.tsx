import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
// import ExploreContainer from '../../components/ExploreContainer';
import { removeMateria, saveMateria, searchMaterias } from './MateriasApi';
import Materias from './Materias';


const MateriasLista: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [materias, setMaterias] = useState<Materias[]>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  },[history.location.pathname]);

  const search =()=>{
    const result = searchMaterias();
    setMaterias(result);
  }

  const remove = (id: string) =>{
    removeMateria(id);
    search();
  }

  // const prubaLocalSotorage = () =>{
  //   const ejemplo = {
  //     id: '95240006',
  //     name: 'Francico Garcia',
  //     email: 'paco@email.com',
  //     address: 'la que sea 907'
  //   };

  //   saveMateria(ejemplo);
  //   search();
  // }

  const addMaterias = () =>{
    history.push('/page/materia/new');
  }

  const editMaterias = (id: string) =>{
    history.push('/page/materia/'+ id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Materias </IonTitle>
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
              <IonButton onClick={addMaterias} color="primary" fill='solid' slot='end' size='default'>
                <IonIcon icon={add}/>
                Agregar Materia
                </IonButton>
            </IonItem>
            <IonGrid className='table'>
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>
              {materias.map((materia:Materias)=>
                <IonRow key={materia.id}>
                  <IonCol>{materia.id}</IonCol>
                  <IonCol>{materia.name}</IonCol>
                  <IonCol>
                    <IonButton onClick={()=> editMaterias(String(materia.id))} color='primary' fill='clear'>
                      <IonIcon icon={pencil} slot='icon-only'/>
                    </IonButton>
                    <IonButton  color='danger' fill='clear' onClick={()=>{remove(String(materia.id))}}>
                      <IonIcon icon={close} slot='icon-only'/>
                    </IonButton>
                  </IonCol>
                </IonRow>
                )}
          </IonGrid>
          </IonCard>
          {/* <IonButton onClick={prubaLocalSotorage} color='danger' fill='clear'>
                      Botón de Prueba
          </IonButton> */}

        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default MateriasLista;
