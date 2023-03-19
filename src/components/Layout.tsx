import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Select,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { UserType } from "types/types";

export default function Nav({
  user,
  login,
  getAllUsers,
  isLoggedIn,
  logout,
}: {
  login: (user: UserType) => void;
  getAllUsers: () => any;
  isLoggedIn: () => boolean;
  logout: () => void;
  user: UserType;
}) {
  const Users = getAllUsers();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image src="sesame.svg" alt="logo" />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={user && user.imgUrl} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={user && user.imgUrl} />
                  </Center>
                  <br />
                  <Center>
                    <Select
                      px={2}
                      placeholder="Select option"
                      defaultValue={user && user.id}
                      onChange={(event) => {
                        const user =
                          Users &&
                          Users.find((user: UserType) => {
                            return user.id === event.target.value;
                          });
                        if (user) {
                          login(user);
                        }
                      }}
                    >
                      {Users.map((user: any) => {
                        return (
                          <option key={user.id} value={user.id}>
                            {user.name}
                          </option>
                        );
                      })}
                    </Select>
                  </Center>
                  <br />
                  <MenuDivider />

                  {isLoggedIn() && (
                    <>
                      <MenuItem>
                        <Link to="cards">Vos cartes</Link>
                      </MenuItem>
                      <MenuItem>Restaurants</MenuItem>
                      <MenuItem onClick={() => logout()}>Deconnexion</MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
