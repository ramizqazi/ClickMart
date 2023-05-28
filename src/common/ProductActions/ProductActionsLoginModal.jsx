import React, { useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import {
  Text,
  Input,
  Button,
  Center,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormLabel,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { Eye, EyeOff } from 'react-feather';
import { login as loginAction } from '../../auth/redux/actions';

const ProductActionsLoginModal = ({ isVisible, onClose, login }) => {
  const [passwordToggle, setPasswordToggle] = useState(true);

  const _togglePassword = () => setPasswordToggle((prevState) => !prevState);

  const _handleSubmit = async (values) => {
    await login(values.email, values.password);
    onClose();
  };

  return (
    <Modal isCentered isOpen={isVisible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx={5}>
        <ModalHeader>
          <Text mb={3} fontSize="3xl" color="black">Sign In</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        color="black"
                        _hover="none !important"
                        borderColor="gray"
                        variant="outline"
                        {...field}
                      />
                      <FormErrorMessage>
                        <FormErrorIcon />
                        {form.errors.email}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl mt={3} isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          color="black"
                          type={passwordToggle ? 'password' : 'text'}
                          _hover="none !important"
                          borderColor="gray"
                          variant="outline"
                          {...field}
                        />
                        <InputRightElement onClick={_togglePassword}>
                          {passwordToggle ? <EyeOff /> : <Eye /> }
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        <FormErrorIcon />
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  w="100%"
                  type="submit"
                  isLoading={isSubmitting}
                  color="white"
                  bgColor="brand"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const initialValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Must not be empty'),
  password: Yup.string().required('Must not be empty'),
});

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(ProductActionsLoginModal);
