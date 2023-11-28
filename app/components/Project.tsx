import { Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import ProjectCard from './Project-card';
import { projects } from "../data/project";
import { ModalComponent } from "./Modal";
import { useState } from "react";
export default function Project() {
   
    return(
        <>
         <Box id="projects" height={'100%'} padding={7} width={'100%'}margin={'auto'} marginTop={80} bgImage={'/mesh-backround-project.svg'} bgRepeat={'no-repeat'} bgPosition={'center'}>
            <Heading textAlign={'center'} marginBottom={100}>PROJECTS</Heading>
            <Box>
            <Grid templateColumns={{lg: 'repeat(4,1fr)', md: 'repeat(3,1fr)', base: 'repeat(1,1fr)'}} gap={4} height={'100vh'}>
                {projects.map(project => {
                    return (
                        <GridItem>
                          <ProjectCard title={project.title} description={project.description} tech={project.tech} image={project.image}/>
                        </GridItem>
                        )
                    })}
                </Grid>
            </Box>
         </Box>
        </>
    )
}