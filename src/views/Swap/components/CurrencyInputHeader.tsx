import styled from 'styled-components'
import {
  Flex,
  Heading,
  HistoryIcon,
  IconButton,
  NotificationDot,
  Text,
  useModal,
} from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { useExpertModeManager } from 'state/user/hooks'
import { ReactElement } from 'react'
import { SettingsMode } from '../../../components/Menu/GlobalSettings/types'

interface Props {
  title: string | ReactElement
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
}

const CurrencyInputContainer = styled(Flex)`
  flex-direction: column;
  padding: 24px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  subtitle,
  setIsChartDisplayed,
}) => {
  const [expertMode] = useExpertModeManager()

  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Heading as="h2">{title}</Heading>
        <Flex>
          <NotificationDot show={expertMode}>
            <GlobalSettings color="textSubtle" mr="0" mode={SettingsMode.SWAP_LIQUIDITY} />
          </NotificationDot>
          <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="textSubtle" width="24px" />
          </IconButton>
        </Flex>
      </Flex>
        <Text color="textSubtle" fontSize="14px">
          {subtitle}
        </Text>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
