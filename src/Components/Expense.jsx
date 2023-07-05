import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/ExpenceSlice";
import EditExpense from "./EditExpense";

const Expense = ({ title, amount, category, timeStamp, id }) => {
  let expense = {title, amount, category, timeStamp, id};
  const dispatch = useDispatch();

  return (
    <Box
      bg="gray.200"
      color="gray.800"
      maxW="300px"
      p={3}
      borderRadius={5}
      
    >
      <Text fontSize={13}>Purchase Date: {timeStamp}</Text>
      <Text fontWeight="bold">
        Item:{" "}
        <Text as="span" fontWeight="medium">
          {title}
        </Text>
      </Text>
      <Text fontWeight="bold">
        Amount:{" "}
        <Text as="span" fontWeight="medium">
          {amount}
        </Text>
      </Text>
      <Text fontWeight="bold">
        Category:{" "}
        <Text as="span" fontWeight="medium">
          {category}
        </Text>
      </Text>
      <ButtonGroup mt={3}>
        <EditExpense expense={expense}/>
        <Button colorScheme='blue' onClick={() => dispatch(deleteExpense(id))}>
          Delete
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Expense;
