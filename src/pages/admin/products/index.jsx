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
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      setData(res.data);
    });
    axios("http://localhost:3000/users").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <div className="container">
        <TableContainer className="productTable">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((element) => (
                <Tr key={element.id}>
                  <Td>{element.id}</Td>
                  <Td>
                    <img
                      src={element.image}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Td>
                  <Td>{element.name}</Td>
                  <Td>{element.category}</Td>
                  <Td>{element.price}</Td>
                  <Td>
                    <Button colorScheme="cyan">Edit</Button>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => {
                        axios
                          .delete(
                            `http://localhost:3000/products/${element.id}`
                          )
                          .then(() => {
                            let filteredProducts = data.filter(
                              (x) => x.id !== element.id
                            );
                            setData(filteredProducts);
                          })
                          .catch((error) => {
                            console.error("Error deleting product: ", error);
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
