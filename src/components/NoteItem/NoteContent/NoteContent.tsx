type NoteContentProps = {
  title: string;
  content: string;
};

export const NoteContent = ({ title, content }: NoteContentProps) => (
  <>
    <h3 className="font-bold text-md text-gray-800">{title}</h3>
    <p className="text-gray-600 text-base">{content}</p>
  </>
);
