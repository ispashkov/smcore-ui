import { FolderOpenOutlined, StarOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'

import { AppLayoutTopBarMenu } from '../../components/layouts/app-layout/app-layout-top-bar/app-layout-top-bar.types'
import { AppLayoutSidebarMenuItem } from '../../components/layouts/app-layout/app-layout-sidebar/app-layout-sidebar.types'
import {
  genClientsPagePath,
  genDirectionsPagePath,
  genDiscountsPagePath,
  genEmployeesPagePath,
  genFranchisesPagePath,
  genProductsPagePath,
  genSchedulePagePath,
  genSettingsPagePath,
  genStudiosPagePath,
  genTransactionsPagePath,
} from '../../format/path.format'
import { formatPathName, formatUserType } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { UserType } from '../../types/users.types'
import { ProductsPageSection } from '../../pages/products-page/products-page.types'
import { isDef, NString } from '../../types/lang.types'

export function genAppLayoutSidebarMenu(studioId: NString): AppLayoutSidebarMenuItem[] {
  return [
    isDef(studioId)
      ? {
          title: formatPathName(AppPath.SCHEDULE),
          path: genSchedulePagePath(studioId),
        }
      : null,
    {
      title: formatPathName(AppPath.DISCOUNTS),
      path: genDiscountsPagePath(),
    },
    isDef(studioId)
      ? {
          title: formatPathName(AppPath.TRANSACTIONS),
          path: genTransactionsPagePath(studioId),
        }
      : null,
    {
      title: formatPathName(AppPath.SETTINGS),
      path: genSettingsPagePath(),
    },
  ].reduce<AppLayoutSidebarMenuItem[]>((acc, it) => {
    if (isDef(it)) {
      acc.push(it)
    }

    return acc
  }, [])
}

export function genAppLayoutTopBarMenu(logout: () => void): AppLayoutTopBarMenu[] {
  return [
    {
      title: 'Сотрудники',
      Icon: UserOutlined,
      items: [
        {
          title: formatUserType(UserType.Trainer),
          path: genEmployeesPagePath({ type: UserType.Trainer }),
        },
        {
          title: formatUserType(UserType.Administrator),
          path: genEmployeesPagePath({ type: UserType.Administrator }),
        },
        {
          title: formatUserType(UserType.Manager),
          path: genEmployeesPagePath({ type: UserType.Manager }),
        },
        {
          title: formatUserType(UserType.All),
          path: genEmployeesPagePath(),
        },
      ],
    },
    {
      title: 'Клиенты',
      Icon: StarOutlined,
      items: [
        {
          title: 'Все клиенты',
          path: genClientsPagePath(),
        },
      ],
    },
    {
      title: 'Управление',
      Icon: FolderOpenOutlined,
      items: [
        {
          title: formatPathName(AppPath.FRANCHISES),
          path: genFranchisesPagePath(),
        },
        {
          title: formatPathName(AppPath.DIRECTIONS),
          path: genDirectionsPagePath(),
        },
        {
          title: formatPathName(AppPath.STUDIOS),
          path: genStudiosPagePath(),
        },
        {
          title: formatPathName(AppPath.PRODUCTS),
          path: genProductsPagePath(ProductsPageSection.GROUP_SUBSCRIPTIONS),
        },
      ],
    },
    {
      title: 'Ааа',
      Icon: UsergroupAddOutlined,
      items: [
        {
          title: 'Выход',
          onClick: logout,
        },
      ],
    },
  ]
}
