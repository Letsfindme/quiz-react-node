import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "./utils/api";

import Home from "./pages/home";

export default props => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.app.isLoaded);
  const [state, setState] = useState({
    playerName: '',
    myName: '',
    newPlayer: ''
  });
  // const [playerName, setPlayerName] = useState(null);
  // const [myName, setMyName] = useState(null);
  // const [newPlayer, setNewPlayer] = useState(null);

  useEffect(() => {
    dispatch({ type: "SET_LOADED" });
    api.then(api => {
      api
        .getEntry("6FaLeB6E9iOq6463bCba0X")
        // .then(entry => {
        //   entry.fields.name["en-US"] = "Super spongeBob";
        //   return entry.update();
        // })
        .then(entry => {
          setState({ playerName: entry.fields.name["en-US"] });
          console.log(`Entry ${entry.sys.id} updated.`);
        });
    });
  }, []);

  const handleChange = (event) => {
    setState({ ...state, myName: event.target.value })
  };

  const handleNewPlayerChange = (event) => {
    setState({ ...state, newPlayer: event.target.value })
  };

  const handleClick = () => {
    api.then(api => {
      api
        .getEntry("6FaLeB6E9iOq6463bCba0X")
        .then(entry => {
          entry.fields.name["en-US"] = state.myName;
          return entry.update();
        })
        .then(entry => {
          setState({ ...state, playerName: entry.fields.name["en-US"] });
          console.log(`id ${entry.sys.id}`);
        });
    });
  };

  const addNewPlayer = () => {
    api.then(api => {
      api.createEntry(
        'player', {
          fields: {
            name: {
              'en-US': state.newPlayer
            }
          }
        }
      ).then((entry) => console.log(entry))
        .catch(console.error)
    }
    )
  }


  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <div className="app-wrapper">
      <h1>App wrapper</h1>
      <Home />
      {state.playerName ? `Player name is : ${state.playerName}` : `Player name is : ...`}
      <input type="text" name="player" onChange={handleChange} />
      <button onClick={handleClick} className="block mt-4">
        Change the player name [PUT]
      </button>
      <div>
        <input type="text" name="newObject" onChange={handleNewPlayerChange} />
        <button onClick={addNewPlayer} className="block mt-4">
          Add new object
      </button>
      </div>
    </div>
  );
};
