import React, { useCallback } from "react";
import Navbar from "./Navbar";
//With useCallback
export function Layout<P>(Component: React.ComponentType<P>) {
  const ComponentWithLayout = useCallback(
    (props: P) => {
      return (
        <>
          <Navbar />
          <Component {...props} />
        </>
      );
    },
    [Component]
  );
  return ComponentWithLayout;
}

// Without useCallback
// export function Layout<P>(Component: React.ComponentType<P>) {
//   const ComponentWithLayout = (props: P) => {
//     return (
//       <>
//         <Navbar />
//         <Component {...props} />
//       </>
//     );
//   };
//   return ComponentWithLayout;
// }
