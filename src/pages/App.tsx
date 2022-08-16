import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Post } from "../components/Post/Post";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Layout>
          <Sidebar />
          <Box as="main">
            <Post />
          </Box>
        </Layout>
      </Box>
    </ChakraProvider>
  );
}
