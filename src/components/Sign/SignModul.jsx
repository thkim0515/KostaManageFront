import React, { useState } from 'react';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/Login/Login';
import * as S from "./SignModul.style";

const SignModul = ({ isOpen, onClose }) => {
    const [selectedTab, setSelectedTab] = useState('signIn');

    if (!isOpen) return null;

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    }

    return (
        <S.ModalOverlay>
            <S.Container>
                <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
                <S.Wrapper>
                    <input
                        id="tab-1"
                        type="radio"
                        name="tab"
                        className="sign-in"
                        checked={selectedTab === 'signIn'}
                        onChange={() => handleTabChange('signIn')}
                        style={{ display: 'none' }}
                    />
                    <S.TabLabel htmlFor="tab-1" selected={selectedTab === 'signIn'}>
                        Sign In
                    </S.TabLabel>

                    <input
                        id="tab-2"
                        type="radio"
                        name="tab"
                        className="sign-up"
                        checked={selectedTab === 'signUp'}
                        onChange={() => handleTabChange('signUp')}
                        style={{ display: 'none' }}
                    />
                    <S.TabLabel htmlFor="tab-2" selected={selectedTab === 'signUp'}>
                        Sign Up
                    </S.TabLabel>
                </S.Wrapper>
                <S.Content>
                    {selectedTab === 'signIn' ? <Login /> : <SignUp />}
                </S.Content>
            </S.Container>
        </S.ModalOverlay>
    );
};

export default SignModul;
