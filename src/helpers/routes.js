// import React from 'react'

// function IsUserRedirect (props) {
//   const { user, loggedInPath, children, ...rest } = props
//   const checkUserRedirect = () => {
//     if (!user) {
//       return children
//     }

//     return (
//             <Redirect to={{
//               pathname: loggedInPath
//             }} />
//     )
//   }

//   return (
//         <Route
//             {...rest}
//             render={checkUserRedirect}
//         />
//   )
// }

// export default IsUserRedirect
