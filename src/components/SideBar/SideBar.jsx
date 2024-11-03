import React from "react";
import { Home, User, Document, Bookmark, Chat, Setting, Logout } from 'react-iconly';
import * as S from "././SideBar.style"

export const SideBar = () => {
    return (
        <S.SideBarContainer>
            <S.LeftBar>
                <S.Logo>
                    <img className="group" alt="Group" src="group-1.png" />
                    <S.TextWrapper>KOSTA</S.TextWrapper>
                </S.Logo>
                <S.MenuItem selected>
                    <S.Rectangle />
                    <Home set="bold" primaryColor="#0077ff" />
                    <S.MenuText active>Home</S.MenuText>
                </S.MenuItem>
                <S.MenuItem>
                    <User set="bold" primaryColor="#A8A8A8" />
                    <S.MenuText>Classes</S.MenuText>
                </S.MenuItem>
                <S.MenuItem>
                    <Document set="bold" primaryColor="#A8A8A8" />
                    <S.MenuText>Documents</S.MenuText>
                </S.MenuItem>
                <S.MenuItem>
                    <Bookmark set="bold" primaryColor="#A8A8A8" />
                    <S.MenuText>Bookmarks</S.MenuText>
                </S.MenuItem>
                <S.MenuItem>
                    <S.IconWithBadge>
                        <Chat set="bold" primaryColor="#A8A8A8" />
                        <S.Badge>4</S.Badge>
                    </S.IconWithBadge>
                    <S.MenuText>Messages</S.MenuText>
                </S.MenuItem>
                <S.MenuItem>
                    <Setting set="bold" primaryColor="#A8A8A8" />
                    <S.MenuText>Settings</S.MenuText>
                </S.MenuItem>
                <S.MenuItem>
                    <Logout set="bold" primaryColor="#E55858" />
                    <S.MenuText style={{color: '#e55858'}}>Sign Out</S.MenuText>
                </S.MenuItem>
            </S.LeftBar>
        </S.SideBarContainer>
    );
};

export default SideBar;
