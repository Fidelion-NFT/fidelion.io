import SoundOffIcon from "@/assets/menu/speaker_off.png";
import SoundOnIcon from "@/assets/menu/speaker_on.png";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const SoundButton = () => {
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    const bgm = document.getElementById("bgm") as HTMLAudioElement;
    setMuted(bgm.paused);
  }, []);

  return (
    <ImageButton
      src={muted ? SoundOffIcon : SoundOnIcon}
      onClick={() => {
        const bgm = document.getElementById("bgm") as HTMLAudioElement;
        if (bgm.paused) {
          bgm.play();
          setMuted(false);
        } else {
          bgm.pause();
          setMuted(true);
        }
      }}
    />
  );
};

const ImageButton = styled.img`
  position: fixed;
  right: 30px;
  bottom: 30px;

  width: 38px;

  cursor: pointer;

  z-index: 10;
`;
