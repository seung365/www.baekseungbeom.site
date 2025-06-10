"use client";

import CommentForm from "@/components/Guestbook/CommentForm";
import CommentList from "@/components/Guestbook/CommentList";
import { useComments } from "@/hooks/useComments";
import { useGuestbookForm } from "./_hooks/useGuestbookForm";
import * as styles from "./styles.css";

const Guestbook = () => {
  const { comments, isLoading, error, addComment } = useComments();
  const { name, setName, message, setMessage, isSubmitting, submitError, handleSubmit } = useGuestbookForm(addComment);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>방명록</h1>
          <p className={styles.subtitle}>자유롭게 의견을 남겨주세요 ✨</p>
        </header>

        <div className={styles.contentLayout}>
          <div className={styles.formSection}>
            <CommentForm
              name={name}
              setName={setName}
              message={message}
              setMessage={setMessage}
              isSubmitting={isSubmitting}
              submitError={submitError}
              onSubmit={handleSubmit}
            />
          </div>

          <CommentList comments={comments} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
