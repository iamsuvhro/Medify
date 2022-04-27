import './App.css';
import React from 'react';
import Body from './containers/Body';
import Navbar from './containers/Navbar';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

function App(props) {
  const [value, setValue] = React.useState(0);
  return (
    <>
    <div className="App">
      <Navbar title="Medify"/>
      <div>
        <h2 Style="margin-top:20px;">Malaria Detection test</h2>
        <Paper square>
            <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <Tab label="Upload" />
            <Tab label="Results" />
            <Tab label="Logs" />
            </Tabs>
        </Paper>
        </div>
      <Body value={value}/>
    </div>
    </>
  );
}

export default App;
