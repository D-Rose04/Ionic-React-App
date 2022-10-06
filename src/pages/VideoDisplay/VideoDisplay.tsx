import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonLabel } from '@ionic/react';
import React from 'react';
import './videoDisplay.css';

const VideoDisplay = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Video</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className='videoContainer'>
          <IonLabel>Mi experiencia con Ionic</IonLabel>
          <iframe width="95%" height="30%" src="https://www.youtube.com/embed/-aHBhvkrFlY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </IonContent>
    </>
  )
}

export default VideoDisplay;