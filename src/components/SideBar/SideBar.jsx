import React from "react";
import * as S from "./SideBar.style";
import { Home, User, Document, Bookmark, Chat, Setting, Logout } from 'react-iconly';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <S.SideBarContainer>
            <S.LeftBar>
                <S.Logo>
                    <img className="group" alt="Group" src="group-1.png" />
                    <S.TextWrapper>KOSTA</S.TextWrapper>
                </S.Logo>
                <S.MenuItem selected>
                    <S.Rectangle />
                    <Link to="/">
                        <Home set="bold" primaryColor="#0077ff" />
                        <S.MenuText active>Home</S.MenuText>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/classes">
                        <User set="bold" primaryColor="#A8A8A8" />
                        <S.MenuText>Classes</S.MenuText>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/documents">
                        <Document set="bold" primaryColor="#A8A8A8" />
                        <S.MenuText>Documents</S.MenuText>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/bookmarks">
                        <Bookmark set="bold" primaryColor="#A8A8A8" />
                        <S.MenuText>Bookmarks</S.MenuText>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <S.IconWithBadge>
                        <Link to="/messages">
                            <Chat set="bold" primaryColor="#A8A8A8" />
                            <S.Badge>4</S.Badge>
                            <S.MenuText>Messages</S.MenuText>
                        </Link>
                    </S.IconWithBadge>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/settings">
                        <Setting set="bold" primaryColor="#A8A8A8" />
                        <S.MenuText>Settings</S.MenuText>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/logout">
                        <Logout set="bold" primaryColor="#E55858" />
                        <S.MenuText style={{ color: '#e55858' }}>Sign Out</S.MenuText>
                    </Link>
                </S.MenuItem>
            </S.LeftBar>
        </S.SideBarContainer>
    );
};

export default SideBar;
