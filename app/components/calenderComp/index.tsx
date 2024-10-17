// import React, { useState } from "react";
// import { Calendar, Tooltip } from "@nextui-org/react";
// import { parseDate } from "@internationalized/date";
// import { today, getLocalTimeZone } from "@internationalized/date";

// const CustomDateComponent = ({ date, message }) => (
//   <Tooltip content={message} color={"danger"}>
//     <div>{date.day}</div>
//   </Tooltip>
// );

// const CalenderComp = () => {
//   const minDate = parseDate("2024-09-10");

//   // Example data for tooltips, mapping dates to messages
//   const tooltipMessages = {
//     "2024-08-28": "This is a special day!",
//     "2024-08-29": "Another important day!",
//     // Add more dates and messages as needed
//   };

//   const formatDate = (date) => {
//     return date.toString();
//     console.log(date.toString(), "Testtt");

//     // Adjust this to match your date format in tooltipMessages
//   };

//   return (
//     <div className="flex justify-center bg-gray-700">
//       <Calendar
//         aria-label="Date (Min Date Value)"
//         defaultValue={today(getLocalTimeZone())}
//         minValue={minDate}
//         renderCell = {() => {
//           <div onMouseEnter={() => alert()}>

//           </div>
//         }}
//         // renderCell={(date) => (
//         //   <CustomDateComponent
//         //     date={date}
//         //     message={tooltipMessages[formatDate(date)] || "Default message"}
//         //   />
//         // )}
//       />
//     </div>
//   );
// };

// export default CalenderComp;





