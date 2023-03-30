import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ActionSheet from "../ActionSheet";

function HomePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Dữ Liệu Cá Nhân</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <ActionSheet>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ea, dolore architecto. Sit aliquam, a quidem error
              facere voluptatem quo eligendi beatae quaerat minima
              nemo quod porro sequi pariatur temporibus aut!
            </p>
            <p>This is the user page</p>
          </ActionSheet>

      </IonContent>
    </IonPage>
  );
}

export default HomePage;
