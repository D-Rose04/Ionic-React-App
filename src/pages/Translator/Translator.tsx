import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonLabel, IonItem, IonInput, IonButton, InputChangeEventDetail } from '@ionic/react';
import React, { useState } from 'react';
import './Translator.css';

const Translator: React.FC = () => {
  const unitWords: Array<string> = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'threeten',
    'fourteen',
    'fiveteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const teensWords: Array<string> = [
    '',
    'ten',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ]

  const twoOrMoreZeros: Array<string> = [
    '',
    'hundred',
    'thousend'
  ];

  const [number, setNumber] = useState<number>(0);
  const [translation, setTransalation] = useState<string>('');

  const handleChange = (event: CustomEvent<InputChangeEventDetail>) => {
    setNumber(Number(event.detail.value?.toString()));
  }

  const handleSubmit = (event: React.MouseEvent<HTMLIonButtonElement>) => {
    translate();
  }

  const getDigit = (position: number): number => {
    return Number(number.toString()[position]);
  }

  const handleTeens = (position: number): string => {
    const val = number.toString();
    if (Number(val[1]) === 1) {
      const fixedPosition = val[1] + val[2];
      return `${unitWords[Number(fixedPosition)]}`;
    }

    return `${teensWords[getDigit(position)]} ${unitWords[getDigit(position + 1)]}`.toLocaleUpperCase();
  }

  const handleHundreds = (position: number): string => {
    const firstDigit = unitWords[getDigit(0)]
    const numLenght = twoOrMoreZeros[position + 1];
    return `${firstDigit} ${numLenght} ${handleTeens(position + 1)}`.toLocaleUpperCase();
  }


  const translate = () => {
    if (number === 1000) setTransalation(`a ${twoOrMoreZeros[2]}`.toLocaleUpperCase());
    if (number < 1000) setTransalation(`${handleHundreds(0)}`);
    if (number < 100) setTransalation(`${handleTeens(0)} `);
    if (number < 20) setTransalation(`${unitWords[number]}`.toUpperCase());
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
          <IonInput type='number' clearInput onIonChange={(e) => handleChange(e)} max={1000} min={0}></IonInput>
        </IonItem>
        <IonButton expand='block' onClick={(e) => handleSubmit(e)}>Translate</IonButton>
        <IonLabel>{translation}</IonLabel>
      </IonContent>
    </>
  )
}

export default Translator;