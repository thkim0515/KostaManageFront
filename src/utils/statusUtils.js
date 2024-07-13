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

const statusColorsMap = {
  출석: { backgroundColor: "#a6c8ff", color: "#fff" },
  결석: { backgroundColor: "#bfbfbf", color: "#000" },
  지각: { backgroundColor: "#ffd966", color: "#000" },
  조퇴: { backgroundColor: "#a4df9e", color: "#000" },
};

export const getStatusColors = (status) =>
  statusColorsMap[status] || { backgroundColor: "#a6c8ff", color: "#000" };
