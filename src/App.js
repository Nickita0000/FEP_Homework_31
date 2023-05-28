import Form from './Form.js';
import List from './List.js'
import { useDispatch } from "react-redux";
import { fetchAPI } from "./redux/actions";
import { useEffect } from "react";

function App() {
    return (
      <div>
        <Form/>
        <List/>
      </div>
    );
}

export default App;
