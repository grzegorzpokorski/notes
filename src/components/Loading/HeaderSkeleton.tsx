import { Container } from "../Container/Container";

export const HeaderSkeleton = () => (
  <div
    className="fixed bottom-0 md:top-0 right-0 left-0 border-t-2 md:border-b-2 md:border-t-0 h-16 bg-white z-20"
    role="status"
  >
    <Container className="w-full h-full flex animate-pulse">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="h-6 w-24 bg-gray-200 rounded"></div>
        <div className="flex flex-row gap-3">
          <div className="rounded w-10 h-10 bg-zinc-200"></div>
          <div className="h-10 w-12 md:w-36 bg-gray-200 rounded"></div>
          <div className="h-10 w-12 md:w-36 bg-gray-200 rounded"></div>
        </div>
      </div>
    </Container>
  </div>
);
