import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer/reducer.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const logger = createLogger({});
const middleware = compose(applyMiddleware(promise(), thunk, logger));

// let store  = createStore(
//     reducer,
//     middleware
// )

// persistStore(store);
// export default store;

const createAppStore = () => {
    let store = createStore(persistedReducer, middleware)
    let persistor = persistStore(store)
    return { store, persistor}
}

export default createAppStore;