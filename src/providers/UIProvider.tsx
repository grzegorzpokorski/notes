"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type UIProviderValue = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const UIContext = createContext<UIProviderValue | null>(null);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    document.body.classList.add("overflow-hidden");
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    document.body.classList.remove("overflow-hidden");
    setIsModalOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isModalOpen,
      openModal,
      closeModal,
    }),
    [closeModal, isModalOpen, openModal],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const ctx = useContext(UIContext);

  if (!ctx) {
    throw new Error("UIContext must be use inside Provider!");
  }

  return ctx;
};
