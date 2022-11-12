import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
const SKILLS = ["Javascript", "React", "Git", "Python", "Django", "Rust"];
export const AboutMe = () => (
  <Container centerContent={false} margin="1">
    <Box textAlign="left">
      <Box fontSize="30px" paddingTop="10" paddingBottom="2">
        Hi, I'm Ankiti Aggarwal!
      </Box>
      <p>
        I'm a second year Computer Engineering student at the University of
        Waterloo ⚡
      </p>
    </Box>
    <Box textAlign="left">
      <Box paddingTop="10" paddingBottom="2" fontWeight="semibold">
        Education
      </Box>
      <Box fontSize="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Box>
    </Box>
    <Box textAlign="left" paddingBottom={6}>
      <Box paddingTop="10" paddingBottom="2" fontWeight="semibold">
        Skills
      </Box>
      <Box fontSize="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Box>
    </Box>

    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
      {SKILLS.map((skill) => {
        return (
          <GridItem bg="green" w="100%" p={4} color="white">
            {skill}
          </GridItem>
        );
      })}
    </Grid>
  </Container>
);
