import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App'
import { AppProvider} from "./Context"
const Index = ()=>{
    return (
      <React.StrictMode>
        <AppProvider>
        <App />
        </AppProvider>
      </React.StrictMode>
    );
}
ReactDOM.render(<Index/>, document.getElementById('root'));
