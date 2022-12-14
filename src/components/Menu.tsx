import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addCircle, addCircleOutline, calculator, calculatorOutline, home, homeOutline, language, languageOutline, videocam} from 'ionicons/icons';
import './Menu.css';
import React from 'react';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: home
  },
  {
    title: 'Add numbers',
    url: '/page/AddNumbers',
    iosIcon: addCircleOutline,
    mdIcon: addCircle
  },
  {
    title: 'Translate',
    url: '/page/Translate',
    iosIcon: languageOutline,
    mdIcon: language
  },
  {
    title: 'Multiplication',
    url: '/page/Multiplication',
    iosIcon: calculatorOutline,
    mdIcon: calculator
  },
  {
    title: 'Video',
    url: '/page/VideoDisplay',
    iosIcon: videocam,
    mdIcon: videocam
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="home-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>davidbhr04@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
