import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/ExpenceSlice";

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    category: "",
  });

  //   I destructured this variables so we don't have to
  //  type expenseData.title and the rest
  const { title, amount, category } = expenseData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

    let newExpense = { title, amount, category, id: uuid(), timeStamp: date };
    dispatch(addExpense(newExpense));

    setExpenseData({
      title: "",
      amount: "",
      category: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* This is for the item purchased */}
        <FormControl>
          <FormLabel>Item</FormLabel>
          <Input
            type="text"
            borderColor="gray.900"
            _hover={{ borderColor: "teal.400" }}
            name="title"
            value={title}
            onChange={handleChange}
          />
        </FormControl>
        {/* This is for the Amount paid */}
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            borderColor="gray.900"
            _hover={{ borderColor: "teal.400" }}
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </FormControl>
        {/* This is for the Category of expense */}
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select option"
            borderColor="gray.900"
            _hover={{ borderColor: "teal.400" }}
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value="Food ">Food </option>
            <option value="Accommodation">Accommodation</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing and Renting">Housing and Renting</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="twitter" mt={5}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default ExpenseForm;
