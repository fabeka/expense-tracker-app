import { Grid, GridItem } from "@chakra-ui/react";
import ExpenseForm from "./Components/ExpenseForm";
import Expenses from "./Components/Expenses";

const App = () => {
  return (
    <Grid templateColumns="repeat(12,1fr)">
      <GridItem colSpan={{ base: 12, md: 6 }} p={8}>
        <ExpenseForm />
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }} p={8}>
        <Expenses />
      </GridItem>
    </Grid>
  );
};

export default App;
