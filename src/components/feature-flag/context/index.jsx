import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
        setLoading(true)
      const response = await featureFlagsDataServiceCall();
      setEnableFlags(response);
      setLoading(false)
    } catch (error) {
        setLoading(false)
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{loading, enableFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
