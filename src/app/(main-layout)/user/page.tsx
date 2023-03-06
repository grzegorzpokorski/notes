import { Container } from "@/components/Container/Container";
import { PrivateRoute } from "@/components/PrivateRoute/PrivateRoute";
import { UserPage } from "@/components/UserPage/UserPage";
import { UserPageSkeleton } from "@/components/Loading/UserPageSkaleton";
import { Suspense } from "react";

export const metadata = {
  title: "twoje notatki",
};

export default function Page() {
  return (
    <Container>
      <Suspense fallback={<UserPageSkeleton />}>
        <PrivateRoute>
          <UserPage />
        </PrivateRoute>
      </Suspense>
    </Container>
  );
}
