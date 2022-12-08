import { useEffect, useMemo, useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useDefaultsFromURLSearch } from 'state/limitOrders/hooks'
import { AppBody } from 'components/App'

import { useExchangeChartManager } from '../../state/user/hooks'
import Page from '../Page'

import SwapForm from './components/SwapForm'
import StableSwapFormContainer from './StableSwap'
import { StyledInputCurrencyWrapper, StyledSwapContainer } from './styles'
import SwapTab, { SwapType } from './components/SwapTab'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BSC]

const STABLE_SUPPORT_CHAIN_IDS = [ChainId.BSC_TESTNET]

export default function Swap() {
  const { isMobile } = useMatchBreakpoints()
  const [isChartExpanded, setIsChartExpanded] = useState(false)
  const [userChartPreference, setUserChartPreference] = useExchangeChartManager(isMobile)
  const [isChartDisplayed, setIsChartDisplayed] = useState(userChartPreference)

  useDefaultsFromURLSearch()

  useEffect(() => {
    setUserChartPreference(isChartDisplayed)
  }, [isChartDisplayed, setUserChartPreference])

  const { chainId } = useActiveWeb3React()

  // swap state & price data

  const isStableSupported = useMemo(() => !chainId || STABLE_SUPPORT_CHAIN_IDS.includes(chainId), [chainId])

  const isAccessTokenSupported = useMemo(() => ACCESS_TOKEN_SUPPORT_CHAIN_IDS.includes(chainId), [chainId])

  return (
    <Page removePadding={isChartExpanded} hideFooterOnDesktop={isChartExpanded}>
      <Flex width="100%" justifyContent="center" position="relative">
        <Flex flexDirection="column">
          <StyledSwapContainer $isChartExpanded={isChartExpanded}>
            <StyledInputCurrencyWrapper mt={isChartExpanded ? '24px' : '0'}>
              <AppBody>
                <SwapTab showStable={isStableSupported}>
                  {(swapTypeState) =>
                    swapTypeState === SwapType.STABLE_SWAP ? (
                      <StableSwapFormContainer
                        setIsChartDisplayed={setIsChartDisplayed}
                        isChartDisplayed={isChartDisplayed}
                      />
                    ) : (
                      <SwapForm
                        isAccessTokenSupported={isAccessTokenSupported}
                        setIsChartDisplayed={setIsChartDisplayed}
                        isChartDisplayed={isChartDisplayed}
                      />
                    )
                  }
                </SwapTab>
              </AppBody>
            </StyledInputCurrencyWrapper>
          </StyledSwapContainer>
        </Flex>
      </Flex>
    </Page>
  )
}
