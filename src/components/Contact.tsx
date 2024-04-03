import { zodResolver } from '@hookform/resolvers/zod';
import { EmailIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormLabel,
    Flex,
    Input,
    Heading,
    Button,
    Stack,
    useToast,
    Text,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { ContactFormValues } from '../views/types';
import { contactFormSquema } from '../views/validationSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

  const Contact = () => {

    //States 
    const [isSending, setIsSending] = useState<boolean>(false);

    //Hooks
    const toast = useToast();

    //Handlers
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm<ContactFormValues>({
      resolver: zodResolver(contactFormSquema)
    });

    const onSubmit: SubmitHandler<ContactFormValues> = async (formValues) => {

      try {
        setIsSending(true);
        const newInteraction = {
          ...formValues,
        };

        console.log(newInteraction);
  
        const { data } = await axios.post('/api/contact', newInteraction)
  
        toast({
          title: data,
          duration: 5000,
        });
  
        reset();
        setIsSending(false);
      } catch (error) {
        setIsSending(false);
        console.log(error);
      }
  
    };
  

    return (

        <>

        <Flex id="contact"
        minHeight={{base:'70vh', md:'100vh'}}
        bgColor='am.200'
        alignItems='center'
        justify={{base:'initial', md:'center'}}
        direction='column'
        textColor={window.location.pathname === '/about' ? 'am.300' : 'am.100' }
        
        gap='1rem'>

        <Flex 
        direction='column'
        display={{base:'flex', md:'none'}}
        padding='1.5rem'
        textAlign='center'>
        <Heading fontSize='1.5rem'>
            Send me a message!
        </Heading>
        <Text fontSize='sm'>If you have a question or proposal, or just want to say Hello. Plase feel free below!</Text>
        </Flex>

        <Flex 
        direction='column'
        display={{base:'none', md:'flex'}}
        textAlign='center'>
        <Heading fontSize='5xl'>
            Send me a message!
        </Heading> 
        <Text>If you have a question or proposal, or just want to say Hello.  <br /> Plase feel free below!</Text>
        </Flex>

        <Flex
        as='form'
        id='form'
        onSubmit={handleSubmit(onSubmit)}
        direction='column'
        width={{ base:'90%', lg:'50%' }}
        gap='1rem'
        bgColor='am.200'
        textColor={window.location.pathname === '/about' ? 'am.300' : 'am.100' }        
        padding='1rem'>

    <FormControl isRequired isInvalid={errors?.fullname ? true : false}>
        <FormLabel>Full name</FormLabel>
        <Input type='text' {...register('fullname')} id='fullname' placeholder='Enter your full name' 
        borderBottom='1px'/>
   <FormHelperText color="coco.100" fontSize={{ base:'small', md:'medium' }}>Write your name and lastname starting by uppercase each one</FormHelperText>

      </FormControl>

      <FormControl isRequired isInvalid={errors?.email ? true : false}>
        <FormLabel>Email Adress</FormLabel>
        <Input id='email' type='text' {...register('email')} placeholder='Enter your email adress' 
        borderBottom='1px'/>
   <FormHelperText color="coco.100" fontSize={{ base:'small', md:'medium' }}>Enter a valid e-mail </FormHelperText>

      </FormControl>

      <FormControl isRequired isInvalid={errors?.message ? true : false}>
        <FormLabel>Message</FormLabel>
        <Input id='message'  type='text' {...register('message')} placeholder='Hi, I think we need your services for my company X. How soon can we discuss it?'
        overflow='auto'
        borderBottom='1px'/>
    <FormHelperText color="coco.100" fontSize={{ base:'small', md:'medium' }}>Write your best for me!</FormHelperText>

      </FormControl>

      <Stack direction='row' spacing={4}>
      <Button 
      type="submit"
      rightIcon={<EmailIcon/>} 
      colorScheme='am.100' 
      variant='outline'
      isLoading={isSending}
      loadingText="Sending email..."
      size='md'
      >
        Email me
      </Button>

</Stack>

        </Flex>

        </Flex>

      </>
    )
  }

  export default Contact;