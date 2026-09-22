import React from 'react'
import pic from '../images/studentimage.jpg'
function ICard(data) {
   
  return (
    <div>
        <img src={pic} height={200} width={200} style={{borderRadius :'50%'}}></img>
       <h2 style={{color: 'red'}}> Welcome to react using vite </h2>
   
   <div style={{border :'10px solid red',height:300,width:200}}>
  
      <h2>Name:{data.name}</h2>
      <h2>Roll:{data.roll}</h2>
      <h2>Branch:{data.branch}</h2>
      <h2>College:{data.college}</h2>
   </div>
    </div>
  )
}

export default ICard 
// import React from "react";
// import studentPhoto from "../assets/student.jpg";

// function ICard() {
//   return (
//     <div className="page">

//       <div className="id-card">

//         {/* Header */}
//         <div className="header">

//           <div className="logo">
//             <div className="logo-text">ABES</div>

//             <div className="logo-circle">
//               <span>ABES</span>
//             </div>
//           </div>

//           <div className="college-info">
//             <h1>ABES</h1>
//             <h2>Engineering College</h2>

//             <div className="college-bottom">
//               <span>Estd.2000</span>
//               <span>College Code 032</span>
//             </div>
//           </div>

//         </div>


//         {/* Student Photo */}
//         <div className="photo-box">
//           <img
//             src={studentPhoto}
//             alt="Student"
//           />
//         </div>


//         {/* Student Information */}
//         <h3 className="student-name">
//           ADITI SINGH
//         </h3>

//         <p className="course">
//           B.TECH (CSE)
//         </p>

//         <div className="separator"></div>


//         {/* Details */}
//         <div className="details">

//           <div className="detail-row">
//             <span>ADMISSION NO.</span>
//             <b>:</b>
//             <span>2024B01011184</span>
//           </div>

//           <div className="detail-row">
//             <span>DOB</span>
//             <b>:</b>
//             <span>11-03-2006</span>
//           </div>

//           <div className="detail-row">
//             <span>BLOOD GROUP</span>
//             <b>:</b>
//             <span>A+</span>
//           </div>

//           <div className="detail-row">
//             <span>HOSTEL</span>
//             <b>:</b>
//             <span>No</span>
//           </div>

//           <div className="detail-row">
//             <span>VALID TILL</span>
//             <b>:</b>
//             <span>31.07.2028</span>
//           </div>

//         </div>


//         {/* Barcode */}
//         <div className="barcode">
//           {Array.from({ length: 40 }).map((_, index) => (
//             <span
//               key={index}
//               style={{
//                 width: index % 3 === 0 ? "5px" : "2px"
//               }}
//             ></span>
//           ))}
//         </div>


//         {/* Registrar */}
//         <div className="registrar">

//           <div className="signature">
//             <span>ƒam</span>
//           </div>

//           <div className="signature-line"></div>

//           <strong>Registrar</strong>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ICard;
