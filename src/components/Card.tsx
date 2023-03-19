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
} from "@chakra-ui/react";
import { CardType } from "types/types";
import { ViewIcon } from "@chakra-ui/icons";

const CreditCard = ({ card }: { card: CardType }) => {
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
          <Button onClick={() => setIsHidden(false)}>
            <ViewIcon />
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CreditCard;
