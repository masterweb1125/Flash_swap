import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  cakePriceUsd,
  color = "textSubtle",
  showSkeleton = true,

}) => {
  const [flash, setFlash] = useState('')

  useEffect(() => {

    const getFlashPrice = async () => {
      const response = await fetch('https://api.pancakeswap.info/api/v2/tokens/0x311E015E2e255Dd14edDc4a2107e39649dc81c5D')
      const data = await response.json()
      setFlash(data.data.price)
    }

    getFlashPrice()
  }, [])

  return 1 ? (
    <PriceLink
      href="https://api.pancakeswap.info/api/v2/tokens/0x311E015E2e255Dd14edDc4a2107e39649dc81c5D"
      target="_blank"
    >
      <Text color={color} bold>{`$${flash !== '' ? flash.substr(0, 8) : ''}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
