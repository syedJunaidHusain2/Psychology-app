// 'use client'

// import { Button } from '../../MTailwind'
// import React from 'react'
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "../../MTailwind";

// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//     </svg>
//   );
// }

// const AccordionDropdown = () => {
//   const [open, setOpen] = React.useState(0);
 
//   const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
//   return (
//     <>
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}>What kind of therapy services do you offer?</AccordionHeader>
//         <AccordionBody>
//         We provide a range of therapy services, including individual, couples, and group therapy sessions tailored to your needs.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(2)}>
//         Do you offer online therapy options?
//         </AccordionHeader>
//         <AccordionBody classname='text-red-500' >
//         Yes, we offer virtual therapy sessions for your convenience and comfort, ensuring you can access support from anywhere.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(3)}>
//         How can I schedule an appointment?
//         </AccordionHeader>
//         <AccordionBody>
//         You can easily schedule an appointment by contacting our office via phone or email, or by filling out our online appointment request form.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(4)}>
//         Are your services covered by insurance?
//         </AccordionHeader>
//         <AccordionBody>
//         We accept a variety of insurance plans, and our team can help you navigate the process to ensure you receive the coverage you are entitled to.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(5)}>
//         Do you offer specialized therapy for specific issues?
//         </AccordionHeader>
//         <AccordionBody>
//         Our psychologists have expertise in various areas, such as anxiety, depression, trauma, and more, offering specialized therapy tailored to your unique needs.

//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(6)}>
//         Can I choose my therapist?
//         </AccordionHeader>
//         <AccordionBody>
//         We strive to match you with a therapist who best fits your preferences and needs, ensuring a strong therapeutic alliance for effective treatment.
//         </AccordionBody>
//       </Accordion>
//     </>
//   );
// }

// export default AccordionDropdown











'use client'

import { Button } from '../../MTailwind'
import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "../../MTailwind";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const AccordionDropdown = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-[16px] font-semibold"
        >
          What kind of therapy services do you offer?
        </AccordionHeader>
        <AccordionBody className="text-[14px]">
          We provide a range of therapy services, including individual, couples, and group therapy sessions tailored to your needs.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-[16px] font-semibold"
        >
          Do you offer online therapy options?
        </AccordionHeader>
        <AccordionBody className="text-[14px]">
          Yes, we offer virtual therapy sessions for your convenience and comfort, ensuring you can access support from anywhere.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
        className="text-[16px] font-semibold"
        >
          How can I schedule an appointment?
        </AccordionHeader>
        <AccordionBody className="text-[14px]">
          You can easily schedule an appointment by contacting our office via phone or email, or by filling out our online appointment request form.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-[16px] font-semibold"
        >
          Are your services covered by insurance?
        </AccordionHeader>
        <AccordionBody className="text-[14px]">
          We accept a variety of insurance plans, and our team can help you navigate the process to ensure you receive the coverage you are entitled to.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
     className="text-[16px] font-semibold"
        >
          Do you offer specialized therapy for specific issues?
        </AccordionHeader>
        <AccordionBody className="text-[14px]">
          Our psychologists have expertise in various areas, such as anxiety, depression, trauma, and more, offering specialized therapy tailored to your unique needs.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
               className="text-[16px] font-semibold"
        >
          Can I choose my therapist?
        </AccordionHeader>
        <AccordionBody className="text-[14px]">
          We strive to match you with a therapist who best fits your preferences and needs, ensuring a strong therapeutic alliance for effective treatment.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionDropdown;

