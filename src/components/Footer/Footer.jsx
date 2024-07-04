import React from "react";
import * as S from "./Footer.style";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faYoutube,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	const goToMainPage = () => {
		navigate("/mainpage");
	};

	return (
		<S.Container>
			<S.Inner>
				<S.Logo>
				<image src="/logo.png" alt="Logo" style={{ height: "50px" }} />
					<span onClick={goToMainPage}>KOSTA</span>
				</S.Logo>
				<S.Info>
					<p>70 Gasandigital1ro, Geumcheongu, 08590, Seoul, KOREA</p>
					<p>info@KOSTA.com</p>
					<p>&copy; 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
				</S.Info>
				<S.Nav>
					<ul>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#about">About us</a>
						</li>
						<li>
							<a href="#location">Location & hours</a>
						</li>
						<li>
							<a href="#blog">Blog</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<S.Social>
						<a href="#facebook">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="#twitter">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="#instagram">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="#youtube">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
						<a href="#linkedin">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</S.Social>
				</S.Nav>
			</S.Inner>
		</S.Container>
	);
};
	  
=======
const Footer = () => {
  return (
    <>
      <S.Container>푸터</S.Container>
    </>
  );
};
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)

export default Footer;
