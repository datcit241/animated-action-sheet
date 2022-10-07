import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from "@ionic/react";
import React, { useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import {
    search as searchIcon,
    person as personIcon,
    layers as layersIcon,
    menu as menuIcon,
} from "ionicons/icons";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import DataLayerPage from "./pages/DataLayerPage";
import MenuPage from "./pages/MenuPage";

function App() {
    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/home">
                            <SearchPage />
                        </Route>
                        <Route exact path="/user">
                            <UserPage />
                        </Route>
                        <Route exact path="/data-layer">
                            <DataLayerPage />
                        </Route>
                        <Route exact path="/menu">
                            <MenuPage />
                        </Route>
                        <Redirect exact path="/" to="/home" />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon icon={searchIcon} />
                            <IonLabel>Search</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="user" href="/user">
                            <IonIcon icon={personIcon} />
                            <IonLabel>User</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="data-layer" href="/data-layer">
                            <IonIcon icon={layersIcon} />
                            <IonLabel>Data Layers</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="menu" href="/menu">
                            <IonIcon icon={menuIcon} />
                            <IonLabel>Menu</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;
