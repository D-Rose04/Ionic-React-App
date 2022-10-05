import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import './Multiplication.css';

const Multiplication = () => {
  return (
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Multiplication</IonTitle>
        </IonToolbar>
      </IonHeader>
  )
}
export default Multiplication;