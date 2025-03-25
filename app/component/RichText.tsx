import React from "react";

interface RichTextProps {
  content: string;
  wrapperTag?: React.ElementType;
  className?: string;
}

const RichText: React.FC<RichTextProps> = ({
  content,
  wrapperTag: WrapperTag = "div",
  className = "",
}) => {
  return (
    <WrapperTag
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
