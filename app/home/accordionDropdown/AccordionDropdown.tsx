import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

const AccordionDropdown = () => {
  return (
    <div>
      <Accordion allowToggle>
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' className='font-bold' textAlign='left'>
        What kind of therapy services do you offer?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We provide a range of therapy services, including individual, couples, and group therapy sess
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' className='font-bold' textAlign='left'>
        Do you offer online therapy options?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, we offer virtual therapy sessions for your convenience and comfort, ensuring you can access support from anywhere.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' className='font-bold' textAlign='left'>
        How can I schedule an appointment?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You can easily schedule an appointment by contacting our office via phone or email, or by filling out our online appointment request form.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' className='font-bold' textAlign='left'>
        Are your services covered by insurance?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We accept a variety of insurance plans, and our team can help you navigate the process to ensure you receive the coverage you are entitled to.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' className='font-bold' textAlign='left'>
        Do you offer specialized therapy for specific issues?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Our psychologists have expertise in various areas, such as anxiety, depression, trauma, and more, offering specialized therapy tailored to your unique needs.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' className='font-bold' textAlign='left'>
        Can I choose my therapist?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We strive to match you with a therapist who best fits your preferences and needs, ensuring a strong therapeutic alliance for effective treatment.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      
    </div>
  )
}

export default AccordionDropdown
