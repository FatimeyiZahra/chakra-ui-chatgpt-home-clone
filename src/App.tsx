import { Box, Flex, Stack } from "@chakra-ui/react";
import { Footer } from "./shared/layouts/footer/footer.component";
import { Home } from "./pages/home";
import { Header } from "./shared/layouts/header/header.component";
import { SidebarProvider } from "./shared/layouts/sidebar/sidebar-context";
import { Sidebar } from "./shared/layouts/sidebar/sidebar.component";

function App() {
  return (
    <SidebarProvider>
      <Flex minH="100dvh">
        <Sidebar />
        <Box flex="1">
          <Stack h="full">
            <Header />
            <Home />
            <Footer />
          </Stack>
        </Box>
      </Flex>
    </SidebarProvider>
  );
}

export default App;
