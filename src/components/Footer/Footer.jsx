import React from "react";
import * as S from "./Footer.style";
const Footer = () => {
  return (
		<S.Container>
			<S.Inner>
				<S.Logo>
					<img src="path/to/logo.png" alt="멍게멍게 로고" />
				</S.Logo>
				<S.Info>
					<p>849 King Street, Mesa, AZ 85301, SEOUL, KOREA</p>
					<p>info@example.com</p>
					<p>&copy; 2023 Brand, Inc. • Privacy • Terms • Sitemap</p>
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
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="#twitter">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="#instagram">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="#youtube">
						<i className="fab fa-youtube"></i>
					</a>
					<a href="#linkedin">
						<i className="fab fa-linkedin-in"></i>
					</a>
				</S.Social>
			</S.Inner>
		</S.Container>
	) 
};

export default Footer;
