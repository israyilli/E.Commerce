import { useState, useEffect } from "react";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./../../../assets/style/admin/AdminHome.scss";

function AdminHome() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <div className="container">
        <TableContainer className="userTable">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Username</Th>
                <Th>Surname</Th>
                <Th>Password</Th>
                <Th>Email</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user.map((element) => (
                <Tr key={element.id}>
                  <Td>{element.id}</Td>
                  <Td>{element.name}</Td>
                  <Td>{element.surname}</Td>
                  <Td>{element.password}</Td>
                  <Td>{element.email}</Td>
                  <Td>
                    <Button colorScheme="cyan">Edit</Button>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => {
                        axios
                          .delete(`http://localhost:3000/users/${element.id}`)
                          .then(() => {
                            let filteredUsers = user.filter(
                              (x) => x.id !== element.id
                            );
                            setUser(filteredUsers);
                          })
                          .catch((error) => {
                            console.error("Error deleting user: ", error);
                          });
                      }}
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </ChakraProvider>
  );
}

export default AdminHome;
