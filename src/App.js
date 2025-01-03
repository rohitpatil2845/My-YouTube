import './App.css';
import Head from './component/head';
import Body from './component/body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <Body />
    </div>
    </Provider>
  );
};

export default App;
