"use client";

import { NoteList } from "../NoteList/NoteList";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

export const UserPage = () => {
  return (
    <PrivateRoute>
      <NoteList />
    </PrivateRoute>
  );
};
