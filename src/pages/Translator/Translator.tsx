import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import './Translator.css';

const Translator = () => {
  return (
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Translate</IonTitle>
        </IonToolbar>
      </IonHeader>
  )
}

export default Translator;