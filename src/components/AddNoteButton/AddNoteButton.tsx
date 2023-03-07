"use client";

import { useUIContext } from "@/providers/UIProvider";
import { FaPlus } from "react-icons/fa";
import { Button } from "../Button/Button";

export const AddNoteButton = () => {
  const { openModal } = useUIContext();
  return (
    <Button size="large" onClick={openModal}>
      <span className="hidden md:inline" aria-hidden="true">
        Dodaj notatkę
      </span>{" "}
      <FaPlus />
      <span className="sr-only">Dodaj notatkę</span>
    </Button>
  );
};
