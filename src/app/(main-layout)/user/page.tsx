import { Container } from "@/components/Container/Container";
import { PrivateRoute } from "@/components/PrivateRoute/PrivateRoute";
import { UserPage } from "@/components/UserPage/UserPage";
import { Suspense } from "react";
import { NotesListSkeleton } from "@/components/Loading/NotesListSkeleton";

export const metadata = {
  title: "twoje notatki",
};

export default function Page() {
  return (
    <Container>
      <Suspense fallback={<NotesListSkeleton />}>
        <PrivateRoute>
          <UserPage />
        </PrivateRoute>
      </Suspense>
    </Container>
  );
}
