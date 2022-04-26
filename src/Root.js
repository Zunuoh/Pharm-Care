import React, { useLayoutEffect } from "react";
import { fetchDrugs } from "./features/drug-reducer";
import { useDispatch } from "react-redux";

const Root = ({ children }) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchDrugs());
    return () => {};
  }, [dispatch]);

  return <>{children}</>;
};

export default Root;
