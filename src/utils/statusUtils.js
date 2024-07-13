const statusMap = {
  Present: "출석",
  Absent: "결석",
  Late: "지각",
  EarlyLeave: "조퇴",
};

export const toKoreanStatus = (status) => statusMap[status] || status;

const reverseStatusMap = Object.entries(statusMap).reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {}
);

export const toEnglishStatus = (status) => reverseStatusMap[status] || status;
