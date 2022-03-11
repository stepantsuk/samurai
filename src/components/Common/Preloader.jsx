import React from "react";
import preloader from './../../img/preloader.gif';

export let Preloader = () => {
  return (
    <div>
      <img src={preloader}/>
    </div>
  )
};


// import React from 'react';
// import preloader from "/../../img/preloader.gif";

// let Preloader = (props) => {
//     return <div  style={ { backgroundColor: 'white' } }>
//         <img src={preloader} />
//     </div>
// }

// export default Preloader;