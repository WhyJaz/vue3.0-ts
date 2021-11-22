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
    title: '风控设置',
    name: 'riskSet',
    Icon: Location,
    pathPrefix: 'risk_set',
    children: [
      {
        title: '风控规则',
        name: 'riskRule',
        path: '/risk_set/rules_list'
      },
    ]
  },
  {
    title: '事件管理',
    name: 'EventManageList',
    Icon: Setting,
    path: '/event_manage/list'
  },
  {
    title: '风控方案',
    name: 'riskPlan',
    Icon: Setting,
    path: '/risk_plan/list'
  },
]

export default menus
