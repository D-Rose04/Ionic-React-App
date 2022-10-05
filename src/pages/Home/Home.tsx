import { IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';


const Home: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='profileContainer'>
          <IonImg id='profile' src="assets/images/photo1663710110.jpeg"></IonImg>
          <IonLabel className='label'>David Hernández<br /></IonLabel>
          <IonLabel className='label'>davidbhr04@gmail.com</IonLabel>
        </div>
      </IonContent>
    </>
  )
}

export default Home;
