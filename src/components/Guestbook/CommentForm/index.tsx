import { S } from "./styles";

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
    <S.FormWrapper onSubmit={onSubmit}>
      <S.FormHeader>
        <S.FormIcon>💬</S.FormIcon>
        <S.FormTitle>메시지 남기기</S.FormTitle>
      </S.FormHeader>

      {submitError && <S.ErrorMessage>{submitError}</S.ErrorMessage>}

      <S.FormGrid>
        <S.InputWrapper>
          <S.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            maxLength={20}
            required
          />
        </S.InputWrapper>

        <S.TextareaWrapper>
          <S.Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="따뜻한 메시지를 남겨주세요..."
            rows={3}
            maxLength={500}
            required
          />
          <S.CharCount isLimit={message.length > 450}>{message.length}/500</S.CharCount>
        </S.TextareaWrapper>
      </S.FormGrid>

      <S.SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <S.Spinner />
            작성 중...
          </>
        ) : (
          <>
            <span>💌</span>
            보내기
          </>
        )}
      </S.SubmitButton>
    </S.FormWrapper>
  );
};

export default CommentForm;
