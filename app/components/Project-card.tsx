import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Icon, Stack, Text,useDisclosure } from "@chakra-ui/react";
import { Project } from "../interfaces";
import { LiaEyeSolid } from "react-icons/lia";
import Image from "next/image";
import { ModalComponent } from "./Modal";
import { useState } from "react";
export default function ProjectCard(data: Project) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [detailProject, setDetailProject] = useState<Project>({
        title: "",
        description: "",
        tech: "",
        image: ""
    })

    return (
        <>
        <Card width={'100%'}>
            <CardHeader>
              <Image src={data.image} alt={data.title} width={400} height={400}/>
            </CardHeader>
            <CardBody overflowY={'auto'}>
                <Stack gap={3}>
                    <Heading fontSize={{lg: 18, md: 13, base: 20}}>{data.title}</Heading>
                    <Text fontSize={{lg:13, md: 12, base: 17}}>{data.tech}</Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button width={'full'} onClick={() => {
                    onOpen()
                    setDetailProject({
                        title: data.title,
                        description: data.description,
                        tech: data.tech,
                        image: data.image
                    })
                }} colorScheme="linkedin" color={'white'} size={{lg: 'md', md: 'sm',base: 'xs'}}><Icon as={LiaEyeSolid}/></Button>
            </CardFooter>
        </Card>
        <ModalComponent data={detailProject} action={{isOpen, onClose}}/>
        </>
    )

}