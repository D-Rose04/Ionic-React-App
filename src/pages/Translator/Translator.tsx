import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonLabel, IonItem, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Translator.css';

const Translator: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const handleSubmit = (event: React.MouseEvent<HTMLIonButtonElement>) => {
    setNumber(4);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Translate</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position='floating'>Enter a number:</IonLabel>
          <IonInput type='number' clearInput></IonInput>
        </IonItem>
        <IonButton expand='block' onClick={(e) => handleSubmit(e)}>Translate</IonButton>
        <IonLabel>{number}</IonLabel>
      </IonContent>
    </>
  )
}

export default Translator;