import { UserType } from "types/types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "@chakra-ui/react";
import { CheckboxGroup } from "@chakra-ui/react";
import CreditCard from "./Card";

export default function CardList({ user }: { user: UserType | null }) {
  console.log(user);
  return (
    <Container maxW={"1024"} margin="30px auto">
      <CheckboxGroup>
        <ResponsiveMasonry>
          <Masonry gutter={"20px"}>
            {user &&
              user?.cards.map((card) => {
                return <CreditCard card={card} />;
              })}
          </Masonry>
        </ResponsiveMasonry>
      </CheckboxGroup>
    </Container>
  );
}
