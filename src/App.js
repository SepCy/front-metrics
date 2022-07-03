import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HeaderView from "./components/header/HeaderView";
import RouterContent from "./navigation/content/RouterContent";
import store from "./redux/store";
import "./index.css";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authActions";
import { getAllStations } from "./redux/actions/stationActions";

// Tries to load the current user

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getAllStations());
    // store.dispatch(loadFollowed());
  }, []);

  return (
    <Provider store={store}>
      <div class="h-full relative">
        <BrowserRouter basename="/">
          <div className="App_header relative z-10">
            <HeaderView />
          </div>
          <div class=" absolute bg-gray-100  inset-0  w-full flex justify-center align-center">
            <RouterContent />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
