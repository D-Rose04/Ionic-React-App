import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import './AddNumber.css';

const AddNumber: React.FC = () => {
    return (
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Add Numbers</IonTitle>
        </IonToolbar>
      </IonHeader>
    )
}

export default AddNumber;

