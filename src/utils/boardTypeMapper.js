const boardTypeMapper = (type) => {
  const typeMap = {
    curriculum: "커리큘럼",
    general: "통합게시판",
    classContents: "수업내용",
    congratulations: "축하해주세요!",
    announcements: "공지사항",
    complaints: "민원게시판",
    studyGroup: "스터디모집",
    faq: "FAQ게시판",
  };

  return typeMap[type] || "알 수 없는 게시판";
};

export default boardTypeMapper;
