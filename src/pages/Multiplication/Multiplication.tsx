import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { TwoNumberOperation } from '../../interfaces/TwoNumberOperation';
import './Multiplication.css';

const Multiplication = () => {
  const [Value, SetValue] = useState<TwoNumberOperation>({ a: '', b: '', result: 0 });

  const Multiply = (a: number, b: number): number => {
    return a * b;
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Multiplication</IonTitle>
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
        <IonButton expand="block" onClick={() => SetValue({ ...Value, result: Multiply(Number(Value.a), Number(Value.b)) })}>Submit</IonButton>
        <IonLabel>{Value.result}</IonLabel>
      </IonContent>

    </>
  )
}
export default Multiplication;