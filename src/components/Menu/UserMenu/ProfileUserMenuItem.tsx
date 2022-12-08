import styled from 'styled-components'
import NextLink from 'next/link'
import { Flex, Skeleton, UserMenuItem } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useTranslation } from '@pancakeswap/localization'

interface ProfileUserMenuItemProps {
  isLoading: boolean
  hasProfile: boolean
  disabled: boolean
}

const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`

const ProfileUserMenuItem: React.FC<React.PropsWithChildren<ProfileUserMenuItemProps>> = ({
  isLoading,
  hasProfile,
  disabled,
  // eslint-disable-next-line consistent-return
}) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <UserMenuItem>
        <Skeleton height="24px" width="35%" />
      </UserMenuItem>
    )
  }
}

export default ProfileUserMenuItem
