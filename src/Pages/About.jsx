import {Accordion,AccordionButton,AccordionIcon,AccordionPanel,AccordionItem,Box, Heading} from "@chakra-ui/react"

function About(){

     return <>
      <div style={{margin:"10px"}}>

      <Accordion margin="20px">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue', color: 'black' }} borderRadius="10px" >
        <Box as='span' flex='1' textAlign='left'>
          <Heading size="sm">About Bansal</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


<Accordion margin="20px">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue', color: 'black' }} borderRadius="10px" >
        <Box as='span' flex='1' textAlign='left'>
          <Heading size="sm">Achievements</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


<Accordion margin="20px">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue', color: 'black' }} borderRadius="10px" >
        <Box as='span' flex='1' textAlign='left'>
          <Heading size="sm">Our Mission</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


<Accordion margin="20px">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue', color: 'black' }} borderRadius="10px" >
        <Box as='span' flex='1' textAlign='left'>
          <Heading size="sm">Our Vission</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </div>
     </>
}
export default About