import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";
import { useDispatch } from "react-redux";
import { editExpense } from "../features/ExpenceSlice";

const EditExpense = ({expense}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [expenseData, setExpenseData] = useState({
    title: expense.title,
    amount: expense.amount,
    category: expense.category,
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

    let updatedExpense = {
      title,
      amount,
      category,
      id: uuid(),
      timeStamp: date,
    };
    dispatch(editExpense({ id: expense.id, updatedExpense}));

    onClose()
  };

  return (
    <>
      <Button onClick={onOpen}>Update</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Item:</FormLabel>
                <Input
                  type="text"
                  borderColor="gray.900"
                  _hover={{ borderColor: "teal.400" }}
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Amount:</FormLabel>
                <Input
                  type="number"
                  borderColor="gray.900"
                  _hover={{ borderColor: "teal.400" }}
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Category of Expense:</FormLabel>
                <Select
                  placeholder="Select option"
                  borderColor="gray.900"
                  _hover={{ borderColor: "teal.400" }}
                  name="category"
                  value={category}
                  onChange={handleChange}
                >
                  <option value="Food ">Food and Drink</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Housing and Renting">Housing and Renting</option>
                </Select>
              </FormControl>
              <Button type="submit" colorScheme="twitter" mt={5}>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditExpense;
