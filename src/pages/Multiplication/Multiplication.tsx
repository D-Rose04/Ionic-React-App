import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, InputChangeEventDetail } from '@ionic/react';
import React, { useState } from 'react';
import { TableOperation } from '../../interfaces/TableOpeartion';
import { TwoNumberOperation } from '../../interfaces/TwoNumberOperation';

import './Multiplication.css';

const Multiplication = () => {
  const [Value, SetValue] = useState<TableOperation>({ result: [] });
  const [number, SetNumber] = useState<number>(0);
  const [calc, setCalc] = useState<boolean>(false);

  const Multiply = (value: number, times: number): Array<Number> => {
    SetValue({ ...Value, result: [] });
    let results = [];
    for (let i = 1; i < times + 1; i++) {
      results.push(i * value)
    }
    return results;
  }

  const handleChange = (event: CustomEvent<InputChangeEventDetail>) => {
    if (calc) setCalc(false);
    SetNumber(Number(event.detail.value?.toString()));
  }

  const handleSubmit = (event: React.MouseEvent<HTMLIonButtonElement>) => {
    SetValue({ ...Value, result: Multiply(number, 14) });
    setCalc(true);
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
          <IonInput id="a" required clearInput type='number' onIonChange={(e) => handleChange(e)}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={(e) => handleSubmit(e)}>Submit</IonButton>
        <IonList>
          {number > 0 && calc ?
            Value.result.map((result, index) => {
              return (
                <IonItem>
                  <IonLabel>{number} X {index + 1} = {result.toString()}</IonLabel>
                </IonItem>
              )
            }) : <></>
          }
        </IonList>
      </IonContent>

    </>
  )
}
export default Multiplication;