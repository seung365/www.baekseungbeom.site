const AVATAR_EMOJIS = ["🐱", "🐶", "🐰", "🦊", "🐼", "🐨", "🐯", "🦁", "🦁", "🐧"];

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
];

const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const getAvatarForName = (
  name: string,
): {
  emoji: string;
  gradient: string;
} => {
  const hash = simpleHash(name);
  const emojiIndex = hash % AVATAR_EMOJIS.length;
  const gradientIndex = hash % AVATAR_GRADIENTS.length;

  return {
    emoji: AVATAR_EMOJIS[emojiIndex],
    gradient: AVATAR_GRADIENTS[gradientIndex],
  };
};
