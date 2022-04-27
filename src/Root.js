import React, { useLayoutEffect } from "react";
import { fetchDrugs, getFromCache } from "./features/drug-reducer";
import { useDispatch } from "react-redux";

const Root = ({ children }) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const checkLocalStorage = () => window.localStorage.getItem("persist:root");
    const store = JSON.parse(checkLocalStorage());
    console.log("store", store);
    if (store) {
      dispatch(getFromCache(store));
    } else {
      dispatch(fetchDrugs());
    }

    return () => {};
  }, [dispatch]);

  return <>{children}</>;
};

export default Root;
