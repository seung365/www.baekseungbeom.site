import * as styles from "./styles.css";

interface CommentFormProps {
  name: string;
  setName: (name: string) => void;
  message: string;
  setMessage: (message: string) => void;
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

const CommentForm = ({ name, setName, message, setMessage, isSubmitting, submitError, onSubmit }: CommentFormProps) => {
  return (
    <form className={styles.formWrapper} onSubmit={onSubmit}>
      <div className={styles.formHeader}>
        <span className={styles.formIcon}>💬</span>
        <h2 className={styles.formTitle}>메시지 남기기</h2>
      </div>

      {submitError && <div className={styles.errorMessage}>{submitError}</div>}

      <div className={styles.formGrid}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            maxLength={20}
            required
          />
        </div>

        <div className={styles.textareaWrapper}>
          <textarea
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="따뜻한 메시지를 남겨주세요..."
            rows={3}
            maxLength={500}
            required
          />
          <div className={styles.charCount({ isLimit: message.length > 450 })}>{message.length}/500</div>
        </div>
      </div>

      <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <div className={styles.spinner} />
            작성 중...
          </>
        ) : (
          <>
            <span>💌</span>
            보내기
          </>
        )}
      </button>
    </form>
  );
};

export default CommentForm;
