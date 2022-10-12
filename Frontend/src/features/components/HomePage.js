import { Notes } from "./Notes";
import { PostNote } from "./PostNote";

export const HomePage = () => {
  return (
    <>
      <PostNote />
      <Notes />
    </>
  );
};
