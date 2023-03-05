type NoteListHeaderProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "output";
  content: string;
};

export const NoteListHeader = ({
  as: Tag = "h2",
  content,
}: NoteListHeaderProps) => (
  <header className="text-center py-6 border-y-2">
    <Tag className="text-xl font-medium">{content}</Tag>
  </header>
);
