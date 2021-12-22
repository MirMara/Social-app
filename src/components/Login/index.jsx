import { useReducer } from "react";
import Header from "./../Header/Header.js";

import {styles} from "./Login.module.scss";

const Login = (props) => {
    const username = props.username || "Miriana";
    const password = props.password || "******";

    const INIT_STATE = {
        name: "Faisbrut",
        nav: [
          { link: "/", label: "Home" },
          { link: "/messages", label: "Messages" },
          { link: "/friends", label: "Friends" },
        ],
        friendsPreview: [],
      };

    const reducer = (state, action) => {
        switch (action.type) {
          case "change-name":
            return { ...state, name: `Ciao ${username}` };
          default:
            return state;
        }
      };


    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return(
        <div>
            <Header name={state.name} links={state.nav} />
           
            <form >
                <label>Username: </label>
                <input className="usernameLog" type="text">
                </input>
                <label>password: </label>
                <input type="password">
                </input>
                <button type="button" onClick={() => dispatch({ type: "change-name" })}>
                    Submit
                </button>
            </form>
             
            
        </div>
    )
};

export default Login;