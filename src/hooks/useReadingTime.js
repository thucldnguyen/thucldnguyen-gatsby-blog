import readingDuration from 'reading-duration';

export const useReadingTime = (content) => {
  if (!content) return '⌛ 1 min read';
  
  return readingDuration(content, {
    wordsPerMinute: 200,
    emoji: true
  });
}; 