import styled from "styled-components";

export const StatsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #f9f9f9;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 800px;
	margin: 200px auto 40px auto;
`;

export const StatItem = styled.p`
  font-size: 20px;
  margin: 0 10px;
  font-weight: bold;
  color: ${(props) => {
    if (props.type === "percentage") {
      if (props.percentage === 0) return "black";
      return props.percentage >= 80 ? "blue" : "red";
    }
    return "#555";
  }};
`;
