import { Container } from "@/components/Container/Container";
import { UserPage } from "@/components/UserPage/UserPage";
import { UserPageSkeleton } from "@/components/UserPageSkeleton/UserPageSkaleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <Container>
      <Suspense fallback={<UserPageSkeleton />}>
        <UserPage />
      </Suspense>
    </Container>
  );
}
