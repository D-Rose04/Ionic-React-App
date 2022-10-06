import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { TableOperation } from '../../interfaces/TableOpeartion';
import { TwoNumberOperation } from '../../interfaces/TwoNumberOperation';

import './Multiplication.css';

const Multiplication = () => {
  const [Value, SetValue] = useState<TableOperation>({ result: [] });
  const [number,SetNumber] = useState<number>(0);

  const Multiply = (value: number, times: number): Array<Number> => {
    SetValue({ ...Value, result: [] });
    let results = [];
    for (let i = 1; i < times + 1; i++) {
      results.push(i  * value)
    }
    return results;
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
          <IonInput id="a" required clearInput type='number' onIonChange={(e) => SetNumber(Number(e.target.value?.toString()))}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={() => SetValue({ ...Value, result: Multiply(number, 14) })}>Submit</IonButton>
        <IonList>
          {Value.result.map((result,index) => {
            return (
              <IonItem>
                <IonLabel>{number} X {index + 1} = {result.toString()}</IonLabel>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>

    </>
  )
}
export default Multiplication;