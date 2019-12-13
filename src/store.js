import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details. https://github.com/rt2zz/redux-persist/tree/master/src/stateReconciler
};

const pReducer = persistReducer(persistConfig, rootReducer);

let storeEnv = createStore(pReducer);

if (process.env.REACT_APP_PRODUCTION !== 'true') {
  storeEnv = createStore(pReducer, composeWithDevTools());
}

export const store = storeEnv;
export const persistor = persistStore(store);
