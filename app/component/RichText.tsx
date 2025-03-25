import React from "react";

interface RichTextProps {
  content: string;
}

const RichText = ({ content }: RichTextProps) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default RichText;
