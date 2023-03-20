import React, { useCallback } from "react";
import { UserType } from "types/types";
import { CHARGER, DECHARGER, DELETE } from "constants/index";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container, Heading } from "@chakra-ui/react";
import {
  CheckboxGroup,
  Select,
  HStack,
  Button,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import CreditCard from "./Card";
import { ChargeModal } from "./ChargeModal";

export default function CardList({
  user,
  deleteCard,
  deleteCards,
}: {
  user: UserType;
  deleteCard: (cardId: string, user: UserType) => void;
  deleteCards: (cardIds: string[], user: UserType) => void;
}) {
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [options, setOptions] = React.useState<string | number>("0");
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleModalValidate = useCallback(
    (e: string, type: string | number) => {
      if (e === "0") onOpen();
      else {
        onClose();
      }
    },
    [onOpen, onClose]
  );

  if (user?.cards.length === 0) {
    return (
      <Container maxW={"600"} margin="30px auto">
        <Heading textAlign={"center"}>
          Vous n'avez pas de cartes, contactez votre administrateur
        </Heading>
      </Container>
    );
  }
  return (
    <Container maxW={"1024"} margin="30px auto">
      <ChargeModal
        isOpen={isOpen}
        onClose={onClose}
        handleModalValidate={handleModalValidate}
        type={options}
      />
      <Heading mb="20px">Vos Cartes</Heading>
      <HStack>
        {selected.length > 0 && (
          <>
            <Select
              onChange={(e: any) => {
                const value = e.target.value;
                setOptions(value);
              }}
            >
              <option value={"0"}></option>
              <option value={DELETE}>Supprimer les cartes selectionnées</option>
              <option value={CHARGER}>Charger les cartes selectionnées</option>
              <option value={DECHARGER}>
                Décharger les cartes selectionnées
              </option>
            </Select>
            <Button
              onClick={() => {
                switch (options) {
                  case DELETE:
                    deleteCards(selected, user);
                    break;
                  case CHARGER:
                    handleModalValidate("0", CHARGER);
                    break;
                  case DECHARGER:
                    return null;
                  default:
                    return null;
                }
              }}
            >
              Valider
            </Button>
          </>
        )}
      </HStack>
      <CheckboxGroup onChange={(cardId: Array<string>) => setSelected(cardId)}>
        <Skeleton isLoaded={isLoaded}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter={"20px"}>
              {user &&
                user?.cards.map((card) => (
                  <CreditCard card={card} user={user} deleteCard={deleteCard} />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </Skeleton>
      </CheckboxGroup>
    </Container>
  );
}
