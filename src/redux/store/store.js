import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/index";

// redux-persist > 상태 영구 저장 및 새로고침 방지 라이브러리
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(/* 미들웨어 추가 */)
);
const persistor = persistStore(store);

export { store, persistor };
