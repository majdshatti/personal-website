import { useState, useEffect } from "react";
import { Loader } from "../Common/Loader";

export const withLoader = (WrappedComponent) => {
  return function WithLoader(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false);
    }, []);

    return isLoading ? <Loader /> : <WrappedComponent {...props} />;
  };
};
