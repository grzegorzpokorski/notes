"use client";

import { Container } from "@/components/Container/Container";
import { useUIContext } from "@/providers/UIProvider";
import { useSession } from "next-auth/react";
import { AddNoteButton } from "../AddNoteButton/AddNoteButton";
import { HeaderSkeleton } from "../Loading/HeaderSkeleton";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { UserImage } from "../UserImage/UserImage";

export const Header = () => {
  const { status } = useSession();
  const { openModal } = useUIContext();

  if (status !== "authenticated") return <HeaderSkeleton />;

  return (
    <header className="fixed bottom-0 md:top-0 right-0 left-0 h-16 bg-white border-t-2 md:border-b-2 md:border-t-0 shadow z-20">
      <Container className="w-full h-full flex">
        <nav className="flex w-full flex-row items-center justify-between">
          <h1 className="text-lg font-bold">Notes</h1>
          <div className="flex flex-row gap-3">
            <UserImage />
            <div className="flex flex-row-reverse md:flex-row gap-3">
              <AddNoteButton />
              <LogoutButton />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
