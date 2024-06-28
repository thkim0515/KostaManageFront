import React from "react";
import * as S from "./Under.style"; // 스타일링 파일을 별도로 import

const Under = () => (
	<S.LabelContainer>
		<S.Text>다양한 게시글을 통해서 서로의 생각을 나누는 소통의 공간</S.Text>
		<S.Box>
			<S.Group>
				<S.Overlap>
					<S.Payment>
						<S.OGroup>
							<S.List>
								{Array.from({ length: 4 }, (_, i) =>
									i !== 0 ? (
										<S.Element2 key={i}>
											<S.Icon>
												<S.Trending alt="Trending" src="trending.svg" />
											</S.Icon>
											<S.Text>
												<S.TWrapper>게시글 제목</S.TWrapper>
											</S.Text>
											<S.Date>2 March 2021, 13:45 PM</S.Date>
											<S.Likes>♥ : 0개</S.Likes>
											<S.OGroup2>
												<S.Author>작성자명</S.Author>
											</S.OGroup2>
										</S.Element2>
									) : (
										<S.Element key={i}>
											<S.Icon>
												<S.Trending alt="Trending" src="trending.svg" />
											</S.Icon>
											<S.Text>
												<S.TWrapper>게시글 제목</S.TWrapper>
											</S.Text>
											<S.Date>2 March 2021, 13:45 PM</S.Date>
											<S.Likes>♥ : 0개</S.Likes>
											<S.OGroup2>
												<S.Author>작성자명</S.Author>
											</S.OGroup2>
										</S.Element>
									)
								)}
							</S.List>
							<S.PostTitle>게시글</S.PostTitle>
						</S.OGroup>
					</S.Payment>
					<S.Pagination>
						<S.ShowingFrom
							alt="Showing from"
							src="showing-1-5-from-100-data.svg"
						/>
						<S.Page>
							<S.Dropdown alt="Dropdown" src="image.svg" />
							{Array.from({ length: 3 }, (_, i) => (
								<S.OWrapper key={i}>
									<S.Overlap2>
										{i === 0 ? (
											<S.TextWrapper6>{i + 1}</S.TextWrapper6>
										) : (
											<S.TextWrapper7>{i + 1}</S.TextWrapper7>
										)}
									</S.Overlap2>
								</S.OWrapper>
							))}
							<S.Dropdown alt="Dropdown" src="dropdown.svg" />
						</S.Page>
					</S.Pagination>
				</S.Overlap>
			</S.Group>
		</S.Box>
	</S.LabelContainer>
);

export default Under;
