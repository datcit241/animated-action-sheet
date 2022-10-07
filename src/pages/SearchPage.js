import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import ActionSheet from "../ActionSheet";

function SearchPage() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color="primary">Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div style={{ position: "absolute" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestias animi nam delectus tenetur, architecto molestiae
                    dolorum voluptates ipsa eligendi quasi vitae similique
                    tempore vel consequuntur cum? Fugiat minus consectetur
                    voluptatum?
                </div>
                <ActionSheet>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quibusdam illum enim labore omnis, fugiat quia
                        vitae repellat minus magni. Assumenda alias vero hic.
                        Ad, inventore dolorem sit iusto excepturi dolore.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ex voluptatibus, sunt nemo, doloribus est amet
                        fuga laudantium dolor ab sapiente repellat animi
                        praesentium tempore expedita veritatis dolorum vero
                        rerum placeat?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia quidem reprehenderit voluptate, quibusdam,
                        consectetur debitis nemo dolore inventore architecto
                        iste fugit voluptatum, temporibus facere ab delectus
                        quod quos obcaecati qui?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis neque error eaque magni obcaecati sint,
                        explicabo commodi totam illum aliquam esse ipsa
                        accusantium molestiae similique blanditiis in nostrum
                        saepe praesentium!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto nobis expedita omnis facere animi commodi,
                        quaerat natus consequuntur excepturi, provident tenetur,
                        dolorem voluptatibus suscipit sequi doloremque cum minus
                        dolores assumenda.
                    </p>
                    <p>This is the search page</p>
                </ActionSheet>
            </IonContent>
        </IonPage>
    );
}

export default SearchPage;
