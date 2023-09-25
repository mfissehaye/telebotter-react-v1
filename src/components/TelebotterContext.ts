import { createContext } from "react";

const TelebotterContext = createContext<{ token: string }>({ token: '' })

export default TelebotterContext
export const TelebotterProvider = TelebotterContext.Provider