import
{
    IonIcon,
    IonLabel, IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import {home as homeIcon, settings as settingsIcon} from 'ionicons/icons';
import {Route} from 'react-router-dom';
import {IonReactRouter} from '@ionic/react-router';
import React from 'react';
import SearchPage from "./pages/SearchPage";

function Tabs() {
    return (
        <IonTabs>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/search">
                        <SearchPage/>
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton href="/search">
                        <IonIcon icon={homeIcon}/>
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    {/*<IonTabButton>*/}
                    {/*    <IonIcon icon={settingsIcon}/>*/}
                    {/*    <IonLabel>Settings</IonLabel>*/}
                    {/*</IonTabButton>*/}
                </IonTabBar>
            </IonReactRouter>
        </IonTabs>
    )
}

export default Tabs;