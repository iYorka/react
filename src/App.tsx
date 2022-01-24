import React, {useState} from 'react';
import './App.css';
import {Layout} from './shared/Layout/Layout';
import './main.global.css'
import {Header} from './shared/Header/Header';
import {Content} from './shared/Content/Content';
import {CardsList} from './shared/CardsList/CardsList';
import {GenericList} from "./shared/GenericList/GenericList";

import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {Dropdown} from "./shared/Dropdown";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./store";


const store = createStore(rootReducer, composeWithDevTools());

const LIST = [
  {text: 'some'},
  {text: 'Another some'},
  {text: 'some another'},
  {text: 'some'},
  {text: 'some more'},
].map(generateId)


function App() {
  const [list, setList] = useState(LIST);
  const handleItemClick = (id: string) => {
    setList(list.filter((el) => el.id != id))
  }
  const handleAddElement = () => {
    setList(list.concat(generateId({text: generateRandomString()})))
  }

  return (
    <Provider store={store}>
      <Layout>
        <Header/>
        <Content>
          {/*<button onClick={handleAddElement}>Add element</button>*/}
          {/*<GenericList list={list.map(merge({onClick: handleItemClick}))}/>*/}
          <CardsList/>

          <Dropdown onOpen={() => console.log('open')} onClose={() => console.log('closed')} isOpen={false}
                    button={<button>Press me</button>}>
            <GenericList list={list}/>
          </Dropdown>
        </Content>
      </Layout>
    </Provider>

  );
}

export default App;
