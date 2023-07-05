import { useSelector } from "react-redux";
import Expense from "./Expense";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const Expenses = () => {
  const { expenses } = useSelector((state) => state.expenses);

  return (
    <>
      <Heading mb={4}>Expenses</Heading>
      <SimpleGrid minChildWidth={250} gap={3}>
        {expenses.map((expense) => {
          return <Expense key={expense.id} {...expense} expense={expense}/>;
        })}
      </SimpleGrid>
    </>
  );
};

export default Expenses;
