// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// const TableListing = () => {
//   const tabledata = [
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Approved",
//     },
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Approved",
//     },
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Approved",
//     },
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Pending",
//     },
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Approved",
//     },
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Pending",
//     },
//     {
//       id: 123456,
//       ProductName: "Acer Nitro6",
//       Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRUYr93nbyOZZD9zA0GdVThOWNPKpy22QOrjd9-5xY14UKIXek0i2_KMgtwKcvj3pYPA&usqp=CAU",
//       customer: "John Wan",
//       date: "1 March",
//       amount: "785",
//       Method: "Cash On Delivery",
//       Status: "Approved",
//     },
//   ];
//   return (
//     <>
//       <div className="table-responsive-add">
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell className="tableCell">Tracking ID</TableCell>
//                 <TableCell className="tableCell">Product</TableCell>
//                 {/* <TableCell className="tableCell">Users</TableCell> */}
//                 <TableCell className="tableCell">Customer</TableCell>
//                 <TableCell className="tableCell">Date</TableCell>
//                 <TableCell className="tableCell">Amount</TableCell>
//                 <TableCell className="tableCell">Payment Method</TableCell>
//                 <TableCell className="tableCell">Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tabledata.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   {/* <TableCell className="tableCell">{row.product}</TableCell> */}
//                   <TableCell className="tableCell">
//                     <div className="cellwrapper">
//                       <img src={row.Img} alt="" className="size-table-user" />
//                       {row.ProductName}
//                     </div>
//                   </TableCell>

//                   <TableCell className="tableCell">{row.customer}</TableCell>
//                   <TableCell className="tableCell">{row.date}</TableCell>
//                   <TableCell className="tableCell">{row.amount}</TableCell>
//                   <TableCell className="tableCell">{row.Method}</TableCell>
//                   {/* <TableCell className="tableCell">{row.Status}</TableCell> */}
//                   <TableCell className="tableCell">
//                     <span className={`status ${row.Status}`}>{row.Status}</span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </>
//   );
// };

// export default TableListing;
