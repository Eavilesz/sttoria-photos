// import React, { useCallback } from "react";
// import Navbar from "./Navbar";

// interface LayoutProps {
//   client: string;
// }

// export function Layout<LayoutProps>(
//   Component: React.ComponentType<LayoutProps>
// ) {
//   const ComponentWithLayout = useCallback(
//     (props: LayoutProps) => {
//       const { client } = props;
//       return (
//         <>
//           <Navbar client={client} />
//           <Component {...props} />
//         </>
//       );
//     },
//     [Component]
//   );
//   return ComponentWithLayout;
// }
export {};
