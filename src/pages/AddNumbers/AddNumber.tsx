import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import { TwoNumberOperation } from '../../interfaces/TwoNumberOperation';
import './AddNumber.css';

const AddNumber: React.FC = () => {
  const [Value, SetValue] = useState<TwoNumberOperation>({ a: '', b: '', result: 0 });

  const addNumbers = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Add Numbers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Enter a number:</IonLabel>
          <IonInput id="a" required clearInput type='number' onIonChange={(e) => SetValue({ ...Value, a: e.target.value?.toString() })}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Enter a number:</IonLabel>
          <IonInput id="b" required clearInput type='number' onIonChange={(e) => SetValue({ ...Value, b: e.target.value?.toString() })}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={() => SetValue({ ...Value, result: addNumbers(Number(Value.a), Number(Value.b)) })}>Submit</IonButton>
        <IonLabel>{Value.result}</IonLabel>
      </IonContent>
    </>
  )
}

export default AddNumber;

function useIonToast(): [any] {
  throw new Error('Function not implemented.');
}

