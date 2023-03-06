import { Container } from "../Container/Container";
import { UserImage } from "../UserImage/UserImage";

export const HeaderSkeleton = () => (
  <div
    className="fixed top-0 right-0 left-0 bg-white border-b-2 h-16 drop-shadow-md animate-pulse z-20"
    role="status"
  >
    <Container className="w-full h-full flex">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="h-6 w-24 bg-gray-200 rounded"></div>
        <div className="flex flex-row gap-3">
          <UserImage />
          <div className="h-10 w-[114px] bg-gray-200 rounded"></div>
        </div>
      </div>
    </Container>
  </div>
);
