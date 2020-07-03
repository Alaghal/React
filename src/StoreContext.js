import React from "react";
import store from "./Redux/storeRedux";

const StoreContext = React.createContext(store);

//  export const Provider = (props) =>
//  {
//     return <StoreContext.Provider value={props.store}>
//         {props.children}
//     </StoreContext.Provider>
// }

export default StoreContext;