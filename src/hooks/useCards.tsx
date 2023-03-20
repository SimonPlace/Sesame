import { CardType, UserType } from "types/types";
import useAuth from "hooks/useAuth";

const useCard = () => {
  const { modifyUser } = useAuth();
  const deleteCard = (cardId: string, user: UserType) => {
    const cardToDelete = user?.cards.filter((card: CardType) => {
      return card.id !== cardId;
    });
    const updatedUser = {
      ...user,
      cards: cardToDelete,
    };

    modifyUser(updatedUser);
  };

  const deleteCards = (cardIds: string[], user: UserType) => {
    const cardsToDelete = user?.cards.filter((card: CardType) => {
      return !cardIds.includes(card.id);
    });
    const updatedUser = {
      ...user,
      cards: cardsToDelete,
    };

    modifyUser(updatedUser);
  };

  return {
    deleteCard,
    deleteCards,
  };
};

export default useCard;
