"use client";

import styled from "@emotion/styled";
import { useRouter, useSearchParams } from "next/navigation";

interface TagFilterProps {
  tags: string[];
  selectedTag?: string;
}

const TagFilter = ({ tags, selectedTag }: TagFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams);

    if (selectedTag === tag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }

    const queryString = params.toString();
    const url = queryString ? `/blog?${queryString}` : "/blog";
    router.push(url);
  };

  const handleAllClick = () => {
    router.push("/blog");
  };

  return (
    <FilterWrapper>
      <TagList>
        <TagItem onClick={handleAllClick} isSelected={!selectedTag}>
          전체
        </TagItem>
        {tags.map((tag) => (
          <TagItem key={tag} onClick={() => handleTagClick(tag)} isSelected={selectedTag === tag}>
            {tag}
          </TagItem>
        ))}
      </TagList>
    </FilterWrapper>
  );
};

export default TagFilter;

const FilterWrapper = styled.div`
  margin-bottom: 2rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagItem = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => (props.isSelected ? "#667eea" : "var(--color-border)")};
  background: ${(props) => (props.isSelected ? "#667eea" : "var(--color-background)")};
  color: ${(props) => (props.isSelected ? "white" : "var(--color-text)")};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: #667eea;
    background: ${(props) => (props.isSelected ? "#5a6fd8" : "rgba(102, 126, 234, 0.1)")};
  }
`;
