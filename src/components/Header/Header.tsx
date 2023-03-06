"use client";

import { Container } from "@/components/Container/Container";
import { useSession } from "next-auth/react";
import { HeaderSkeleton } from "../Loading/HeaderSkeleton";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { UserImage } from "../UserImage/UserImage";

export const Header = () => {
  const { status } = useSession();

  if (status !== "authenticated") return <HeaderSkeleton />;

  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-white drop-shadow z-20">
      <Container className="w-full h-full flex">
        <nav className="flex w-full flex-row items-center justify-between">
          <h1 className="text-lg font-bold">Notes</h1>
          <div className="flex flex-row gap-3">
            <UserImage />
            <LogoutButton />
          </div>
        </nav>
      </Container>
    </header>
  );
};
