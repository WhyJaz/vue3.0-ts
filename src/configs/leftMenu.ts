import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'

interface childMenuItem {
  title: String;
  name: String;
  path: String;
}

interface menuItem {
  title: String;
  name: String;
  Icon: Object;
  pathPrefix?: String;
  children?: Array<childMenuItem>;
  path?: String;
}

const menus: Array<menuItem> = [
  {
    title: '风控基础',
    name: 'risk_base',
    Icon: Location,
    pathPrefix: 'risk_base',
    children: [
      {
        title: '风控规则',
        name: 'riskRule',
        path: '/risk_base/rules_list'
      },
      {
        title: '风控因子',
        name: 'riskFactor',
        path: '/risk_base/risk_factors'
      }
    ]
  },
  {
    title: '事件信息',
    name: 'eventInfo',
    Icon: Setting,
    path: '/risk_factors'
  },
  {
    title: '事件管理',
    name: 'EventManageList',
    Icon: Setting,
    path: '/event_manage/list'
  },
]

export default menus
