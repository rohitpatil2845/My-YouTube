import "./App.css";
import Head from "./component/head";
import Body from "./component/body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from './component/maincontainer';
import Watchpage from "./component/watchpage";

const appRouter =createBrowserRouter([{
path:"/",
element: <Body/>,
children:[
  {path: "/",
    element: <Maincontainer />
  },
  {path: "watch",
    element: <Watchpage />
  },
]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
     );
}

export default App;
