import { BlogPost } from "@/types/index";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src/contents/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const readTime = readingTime(content);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        tags: data.tags || [],
        author: data.author || "Baek SeungBeom",
        readingTime: readTime.text,
        content,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const readTime = readingTime(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      tags: data.tags || [],
      author: data.author || "Baek SeungBeom",
      readingTime: readTime.text,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}
