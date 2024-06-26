import React from "react";
import * as S from "./Footer.style";
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
					<S.Logo onClick={goToMainPage}>실거래gogo</S.Logo>
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
				</S.Nav>
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
			</S.Inner>
		</S.Container>
	);
};
	  

export default Footer;
