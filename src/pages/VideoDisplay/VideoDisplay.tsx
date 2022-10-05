import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import './videoDisplay.css';

const VideoDisplay = () => {
    return (
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Video</IonTitle>
        </IonToolbar>
      </IonHeader>
    )
}

export default VideoDisplay;