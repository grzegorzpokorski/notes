import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { FaPlus } from "react-icons/fa";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { UserImage } from "../UserImage/UserImage";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white border-b-2 h-16">
      <Container className="w-full h-full flex">
        <div className="flex w-full flex-row items-center justify-between">
          {/* <p className="text-md font-bold">Notes</p> */}
          <HeaderTitle />
          <div className="flex flex-row gap-3">
            <UserImage />
            <LogoutButton />
            <Button label={<FaPlus />} />
          </div>
        </div>
      </Container>
    </header>
  );
};
