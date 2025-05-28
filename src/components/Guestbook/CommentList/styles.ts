import styled from "@emotion/styled";

export const S = {
  CommentsSection: styled.section`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-height: 600px;
  `,

  SectionHeader: styled.div`
    margin-bottom: 1.5rem;
  `,

  SectionTitle: styled.h2`
    font-size: 1.25rem;
    margin: 0;
    color: #333;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  CommentIcon: styled.span`
    font-size: 1.25rem;
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

  CommentsContainer: styled.div`
    max-height: 50vh;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f5f9;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: #cbd5e0;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #a0aec0;
    }
  `,

  LoadingState: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    gap: 1rem;
  `,

  Spinner: styled.div<{ large?: boolean }>`
    width: ${(props) => (props.large ? "2rem" : "1rem")};
    height: ${(props) => (props.large ? "2rem" : "1rem")};
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

  LoadingText: styled.p`
    color: #718096;
    font-size: 0.9rem;
    margin: 0;
  `,

  EmptyState: styled.div`
    text-align: center;
    padding: 3rem 1rem;
    color: #718096;
  `,

  EmptyIcon: styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
  `,

  EmptyTitle: styled.h3`
    font-size: 1.1rem;
    color: #4a5568;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  `,

  EmptySubtext: styled.p`
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.8;
  `,

  CommentListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  CommentItem: styled.div<{ delay: number }>`
    animation: slideInUp 0.5s ease-out ${(props) => props.delay}s both;

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,

  CommentContent: styled.div`
    background: white;
    border-radius: 12px;
    padding: 1.25rem;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;

    &:hover {
      border-color: #cbd5e0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  `,

  CommentHeader: styled.div`
    margin-bottom: 0.75rem;
  `,

  AuthorInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `,

  Avatar: styled.div<{ gradient: string }>`
    width: 2.7rem;
    height: 2.7rem;
    background: ${(props) => props.gradient};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  `,

  AuthorDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,

  CommentAuthor: styled.span`
    font-weight: 600;
    color: #2d3748;
    font-size: 0.9rem;
  `,

  CommentDate: styled.span`
    font-size: 0.75rem;
    color: #a0aec0;
  `,

  CommentMessage: styled.p`
    margin: 0;
    line-height: 1.6;
    color: #4a5568;
    font-size: 0.9rem;
    white-space: pre-wrap;
  `,
};
