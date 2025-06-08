"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as styles from "./styles";

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
    <div className={styles.filterWrapper}>
      <div className={styles.tagList}>
        <button className={styles.tagItem({ selected: !selectedTag })} onClick={handleAllClick} type="button">
          전체
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={styles.tagItem({ selected: selectedTag === tag })}
            onClick={() => handleTagClick(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
