import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";



export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.PROFILEPAGE);
    });
  }

  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleFormSubmission} className="auth__form">
    //     <label htmlFor="input-username">Username</label>
    //     <input
    //       id="input-username"
    //       type="text"
    //       name="username"
    //       placeholder="Text"
    //       value={username}
    //       onChange={handleInputChange}
    //       required
    //     />
        

    //     <label htmlFor="input-password">Password</label>
    //     <input
    //       id="input-password"
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handleInputChange}
    //       required
    //       minLength="8"
    //     />

        

    //     <button className="button__submit" type="submit">
    //       Submit
    //     </button>
    //   </form>
    // </div>

    <div className="background1">
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor=""
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="purple.500" />
          <Heading color="gray.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleFormSubmission} className="auth__form">
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="clear"
                boxShadow="md"
              >
                <FormControl >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
      
                    />
      
                    <Input  placeholder="username" id="input-username"
                  type="text"
                  name="username"
                  color="purple.400"
                  value={username}
                  onChange={handleInputChange}
                required />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
      
                    />
      
                    <Input id="input-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    color="gray.400"
                    value={password}
                    onChange={handleInputChange}
                    required
                    minLength="8"
      
      
                    />
                    <InputRightElement width="4.5rem">
      
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
      
                  </FormHelperText>
                </FormControl>
                {error && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{error.message}</p>
            </div>
              )}
                <Button color="purple" className="button__submit" type="submit">
                  Register
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          {/* New to us?{" "}
          <Link color="teal.500" href="#">
            Sign Up
          </Link> */}
        </Box>
      </Flex>
    </div>



  );
}
