import React from "react";
import styled from "styled-components";
import PageContainer from "containers/PageContainer/PageContainer.styled";
import useDetectViewport from "hooks/useDetectViewport";
import { pageEffect } from "styles/motions/variants";

import AvatarSettingBox from "containers/AvatarSettingBox/AvatarSettingBox";
import { MotionButton } from "components/Button/Button.styled";

import useBitFaceState from 'hooks/useBitFaceState';

/* -------------------------------------------------------------------------- */

const ProfileContainer = styled.div`
  background-color: var(--color-lightgray);
  width: 80vw;
  min-width: 300px;
  max-width: 680px;
  padding: 1em;
  border-radius: 10px;
  margin: 2em auto;

  h1 {
    margin: 1em;
    text-align: center;
    font-weight: 700;
    font-size: 1.2em;
  }
`;

/* -------------------------------------------------------------------------- */

let bitFaceUrl = '';

export default function ProfilePage() {
  const { isMobile } = useDetectViewport();
  const [userName, setUserName] = React.useState('안예인');
  bitFaceUrl = useBitFaceState(userName);
  const handleInput = e => {
    setUserName(e.target.value);
  }

  return (
    <PageContainer
      variants={pageEffect}
      initial="hidden"
      animate="visible"
      ismobile={'' + isMobile}
    >
      <ProfileContainer>
        <h1>프로필 조회 · 수정</h1>
        <AvatarSettingBox
          // initValue=""
          id="profileInput"
          label="프로필 조회 및 수정"
          userName={userName}
          avatarUrl={bitFaceUrl}
          handleInput={handleInput}
        />
        <MotionButton>DONE</MotionButton>
      </ProfileContainer>
    </PageContainer>
  );
}
