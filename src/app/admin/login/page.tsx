"use client";

import { useState } from "react";
import { login } from "./action";
import * as styles from "./styles.css";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login(formData);

      if (result?.error) {
        setError(result.error);
      }
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>관리자 로그인</h1>

        <form className={styles.form} action={handleSubmit}>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              아이디
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              required
              autoComplete="username"
              disabled={isLoading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              required
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>

          <button type="submit" className={styles.loginButton} disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}
