import {
    ArrowDownIcon,
    ArrowUpIcon,
    Box,
    Button,
    Flex,
    InfoIcon,
    Text,
    UserMenu,
    UserMenuDivider,
    UserMenuItem,
    useTooltip,
} from '@pancakeswap/uikit'
import { ChainId, NATIVE } from '@pancakeswap/sdk'
import { useActiveChainId, useLocalNetworkChain } from 'hooks/useActiveChainId'
import { useNetworkConnectorUpdater } from 'hooks/useActiveWeb3React'
import { useTranslation } from '@pancakeswap/localization'
import { useSessionChainId } from 'hooks/useSessionChainId'
import { useHover } from 'hooks/useHover'
import { useNetwork } from 'wagmi'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import { ChainLogo } from './Logo/ChainLogo'


export const Bridge = () => {

    return (
        <Button style={{
            height: 35, margin: 20, backgroundColor: '#383241', color: "rgb(220, 220, 220)"
        }}>
            <a href='https://app.flash-bridge.com/'>Bridge</a>
        </Button >
    )
}
