import styled from "@emotion/styled";

export const S = {
  FormWrapper: styled.form`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `,

  FormHeader: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  `,

  FormIcon: styled.span`
    font-size: 1.5rem;
  `,

  FormTitle: styled.h2`
    font-size: 1.1rem;
    margin: 0;
    color: #333;
    font-weight: 600;
  `,

  FormGrid: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  `,

  InputWrapper: styled.div`
    position: relative;
  `,

  Input: styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.9rem;
    background: white;
    color: #333;
    transition: all 0.2s ease;

    &:focus {
      border-color: #667eea;
      outline: none;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #a0aec0;
    }
  `,

  TextareaWrapper: styled.div`
    position: relative;
  `,

  Textarea: styled.textarea`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.9rem;
    background: white;
    color: #333;
    resize: none;
    font-family: inherit;
    transition: all 0.2s ease;

    &:focus {
      border-color: #667eea;
      outline: none;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #a0aec0;
    }
  `,

  CharCount: styled.div<{ isLimit?: boolean }>`
    position: absolute;
    bottom: 0.6rem;
    right: 0.75rem;
    font-size: 0.75rem;
    color: ${(props) => (props.isLimit ? "#e53e3e" : "#a0aec0")};
    background: white;
    padding: 0.25rem;
  `,

  SubmitButton: styled.button`
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
  `,

  Spinner: styled.div`
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,

  ErrorMessage: styled.div`
    background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%);
    color: #c53030;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    border: 1px solid #fca5a5;
    font-size: 0.875rem;
    font-weight: 500;
  `,
};
