import Table from 'react-bootstrap/Table';
import classes from './Detail.module.css'

function Detail() {
  return (
    <Table className={classes.parent}>
      <thead>
        <tr>
         
          <th>Product Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           
          <td><img src="logo512.png" alt="logo" width="50" height="50"/>Abstract 3D</td>
          <td>32 in stock</td>
          <td>$46.5</td>
          <td>20</td>
        </tr>
        <tr>
          <td><img src="logo512.png" alt="logo" width="50" height="50"/>Sarphens Illustration</td>
          <td>44 in stock</td>
          <td>$2.4</td>
          <td>40</td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default Detail;


// import React from 'react'
// import { BsSearch } from 'react-icons/bs'
// import classes from './Detail.module.css';

// const Detail = () => {
//   return (
//     <div className={classes.parent}>
//         <div className={classes.ch1}>
//             <div><h1>Products sell</h1></div>
//             <div>
//             <BsSearch  className='icon'/> Search
//             <p>Last 30 days</p>
//             </div>
//         </div>
//         <div className={classes.ch2}>
//             <h4>Product Name</h4>
//             <div>
//                 <p>Stock</p>
//                 <p>Price</p>
//                 <p>Total sales</p>
//             </div>
//         </div>
//         <div className={classes.ch3}>
//             <div>
//             <img src="/scene1.png" alt="scene" />
//             <h4>Abstract 3D</h4>
//             </div>
//             <div>
//                 <p>32 in stock</p>
//                 <p>$45.99</p>
//                 <p>20</p>
//             </div>
//         </div>
//         <div className={classes.ch4}>
//             <div>
//             <img src="/scene2.png" alt="scene2" />
//             <h4>Sarphens Illustration</h4>
//             </div>
//             <div>
//                 <p>32 in stock</p>
//                 <p>$45.99</p>
//                 <p>20</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Detail