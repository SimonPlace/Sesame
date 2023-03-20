import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

export const ChargeModal = ({
  isOpen,
  onClose,
  handleModalValidate,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  handleModalValidate: (inputValue: string, type: string | number) => void;
  type: string | number;
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [inputValue, setInputValue] = useState<string>("0");

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Charger les cartes selectionnées</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Montant</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Montant"
                type={"number"}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => handleModalValidate(inputValue, type)}
            >
              Valider
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
