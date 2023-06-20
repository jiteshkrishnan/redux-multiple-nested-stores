import { createRoot } from "react-dom/client";
import { store, globalStore } from "./store";
import { Provider } from "react-redux";
import { GlobalContext, ScreenContext } from "./StoreContext";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/**
 * Initialize the config atom which will be read by the atom effect
 */
root.render(
  <Provider store={globalStore} context={GlobalContext}>
    <Provider store={store} context={ScreenContext}>
      <App />
    </Provider>
  </Provider>
);
