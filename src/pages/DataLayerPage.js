import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

function HomePage() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color="primary">Lớp Dữ Liệu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding"></IonContent>
        </IonPage>
    );
}

export default HomePage;
