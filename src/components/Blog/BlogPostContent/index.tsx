import { MDXRemote } from "next-mdx-remote/rsc";
import * as styles from "./styles";

interface BlogPostContentProps {
  content: string;
}

const components = {
  h1: (props: any) => <h1 className={styles.h1} {...props} />,
  h2: (props: any) => <h2 className={styles.h2} {...props} />,
  h3: (props: any) => <h3 className={styles.h3} {...props} />,
  p: (props: any) => <p className={styles.paragraph} {...props} />,
  code: (props: any) => <code className={styles.inlineCode} {...props} />,
  pre: (props: any) => <pre className={styles.codeBlock} {...props} />,
  blockquote: (props: any) => <blockquote className={styles.blockquote} {...props} />,
  ul: (props: any) => <ul className={styles.ul} {...props} />,
  ol: (props: any) => <ol className={styles.ol} {...props} />,
  li: (props: any) => <li className={styles.li} {...props} />,
  a: (props: any) => <a className={styles.link} {...props} />,
  img: (props: any) => <img className={styles.image} {...props} />,
};

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <article className={styles.contentWrapper}>
      <MDXRemote source={content} components={components} />
    </article>
  );
};

export default BlogPostContent;
