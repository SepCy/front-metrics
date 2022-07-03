import { Route, Switch } from "react-router-dom";
import AbonnementContainer from "../../components/abonnement/AbonnementContainer";
import HomeView from "../../components/home/HomeView";
import LoginView from "../../components/login/LoginView";
import AddStationFormContainer from "../../components/ownerstations/components/AddStationFormContainer";

import OwnerStations from "../../components/ownerstations/OwnerStations";
import OwnerStationsSuivies from "../../components/ownerstations/OwnerStationsSuivies";

import RegisterView from "../../components/register/RegisterView";
import VisualiserView from "../../components/visualiser/VisualiserView";
import {
  ABONNEMENT,
  ACCUEIL,
  CONNEXION,
  CREER_COMPTE,
  STATIONS,
  STATIONS_AJOUTER,
  STATION_SUIVIES,
  TARIF,
  VISUALISER,
} from "../CONSTANTS";
import OwnerRoute from "../OwnerRoute";
import PrivateRoute from "../PrivateRoute";

export default function RouterContent() {
  return (
    <Switch>
      {/* Home route */}
      <Route exact path={ACCUEIL} component={HomeView} />
      {/* Sign in route */}
      <Route exact path={CONNEXION} component={LoginView} />

      {/* Sign up route */}
      <Route exact path={CREER_COMPTE} component={RegisterView} />

      {/* Stations route owner only */}

      <PrivateRoute exact path={STATIONS}>
        <OwnerStations />
      </PrivateRoute>

      {/* Stations route owner only */}

      <PrivateRoute exact path={STATION_SUIVIES}>
        <OwnerStationsSuivies />
      </PrivateRoute>

      {/* Add station route owner only */}

      <PrivateRoute exact path={STATIONS_AJOUTER}>
        <AddStationFormContainer />
      </PrivateRoute>

      {/* Subscription connected users only */}
      <PrivateRoute exact path={ABONNEMENT}>
        <AbonnementContainer />
      </PrivateRoute>

      {/* Visualisation premium and owner only */}
      <Route exact path={VISUALISER} component={VisualiserView} />

      {/* Pricing route for everyone */}
      <Route exact path={TARIF} component={AbonnementContainer} />
    </Switch>
  );
}
