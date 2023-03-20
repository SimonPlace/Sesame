import React, { useState } from "react";
import {
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { CardType, UserType } from "types/types";
import { ViewIcon, DeleteIcon } from "@chakra-ui/icons";

const CreditCard = ({
  card,
  deleteCard,
  user,
}: {
  card: CardType;
  deleteCard: (cardId: string, user: UserType) => void;
  user: UserType;
}) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <Card margin="20px auto" width={"100%"}>
      <CardHeader>
        <Checkbox value={card.id} />
        <Heading size="md">Visa</Heading>
      </CardHeader>
      <CardBody>
        <Text>{card.number}</Text>
        <Text>{card.expirationDate}</Text>
        <Flex
          flexWrap={"wrap"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Text>{isHidden ? "•••" : card.cvv}</Text>{" "}
          <Box>
            <Button onClick={() => setIsHidden(false)} margin="0 10px">
              <ViewIcon />
            </Button>
            <Button
              onClick={() => {
                deleteCard(card.id, user);
              }}
            >
              <DeleteIcon />
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CreditCard;
