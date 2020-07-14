module.exports = {
  documents: [
    {
      key: 'introduce',
      name: '关于Zarm',
      module: () => import('@site/web/docs/introduce.md'),
      style: false,
    },
    {
      key: 'quick-start',
      name: '快速上手',
      module: () => import('@site/web/docs/quick-start.md'),
      style: false,
    },
    {
      key: 'change-log',
      name: '更新日志',
      module: () => import('@/CHANGELOG.md'),
      style: false,
    },
  ],
  components: {
    general: [
      {
        key: 'button',
        name: '按钮',
        module: () => import('@/components/button/demo.md'),
        style: true,
      },
      {
        key: 'icon',
        name: '图标',
        module: () => import('@/components/icon/demo.md'),
        style: true,
      },
    ],
    form: [
      {
        key: 'input',
        name: '文本框',
        module: () => import('@/components/input/demo.md'),
        style: false,
      },
      {
        key: 'radio',
        name: '单选框',
        module: () => import('@/components/radio/demo.md'),
        style: true,
      },
      {
        key: 'checkbox',
        name: '复选框',
        module: () => import('@/components/checkbox/demo.md'),
        style: true,
      },
      {
        key: 'picker',
        name: '选择器',
        module: () => import('@/components/picker/demo.md'),
        style: true,
      },
      {
        key: 'stack-picker',
        name: '层叠选择器',
        module: () => import('@/components/stack-picker/demo.md'),
        style: false,
      },
      {
        key: 'date-picker',
        name: '日期选择器',
        module: () => import('@/components/date-picker/demo.md'),
        style: false,
      },
      {
        key: 'calendar',
        name: '日历',
        module: () => import('@/components/calendar/demo.md'),
        style: true,
      },
      {
        key: 'slider',
        name: '滑动输入条',
        module: () => import('@/components/slider/demo.md'),
        style: false,
      },
      {
        key: 'stepper',
        name: '步进器',
        module: () => import('@/components/stepper/demo.md'),
        style: false,
      },
      {
        key: 'switch',
        name: '开关',
        module: () => import('@/components/switch/demo.md'),
        style: false,
      },
      {
        key: 'search-bar',
        name: '搜索栏',
        module: () => import('@/components/search-bar/demo.md'),
        style: true,
      },
      {
        key: 'file-picker',
        name: '文件选择器',
        module: () => import('@/components/file-picker/demo.md'),
        style: true,
      },
      {
        key: 'keyboard',
        name: '虚拟键盘',
        module: () => import('@/components/keyboard/demo.md'),
        style: false,
      },
    ],
    feedback: [
      {
        key: 'action-sheet',
        name: '动作面板',
        module: () => import('@/components/action-sheet/demo.md'),
        style: false,
      },
      {
        key: 'message',
        name: '消息',
        module: () => import('@/components/message/demo.md'),
        style: true,
      },
      {
        key: 'modal',
        name: '模态框',
        module: () => import('@/components/modal/demo.md'),
        style: true,
      },
      {
        key: 'toast',
        name: '轻提示',
        module: () => import('@/components/toast/demo.md'),
        style: true,
      },
      {
        key: 'loading',
        name: '加载',
        module: () => import('@/components/loading/demo.md'),
        style: false,
      },
      {
        key: 'pull',
        name: '上拉加载下拉刷新',
        module: () => import('@/components/pull/demo.md'),
        style: true,
      },
      {
        key: 'swipe-action',
        name: '滑动操作',
        module: () => import('@/components/swipe-action/demo.md'),
        style: false,
      },
      {
        key: 'activity-indicator',
        name: '活动指示器',
        module: () => import('@/components/activity-indicator/demo.md'),
        style: false,
      },
      {
        key: 'popup',
        name: '弹出框',
        module: () => import('@/components/popup/demo.md'),
        style: true,
      },
      {
        key: 'popper',
        name: '气泡层',
        module: () => import('@/components/popper/demo.md'),
        style: true,
      },
    ],
    view: [
      {
        key: 'collapse',
        name: '折叠面板',
        module: () => import('@/components/collapse/demo.md'),
        style: true,
      },
      {
        key: 'badge',
        name: '徽标',
        module: () => import('@/components/badge/demo.md'),
        style: true,
      },
      {
        key: 'cell',
        name: '列表项',
        module: () => import('@/components/cell/demo.md'),
        style: true,
      },
      {
        key: 'carousel',
        name: '走马灯',
        module: () => import('@/components/carousel/demo.md'),
        style: true,
      },
      {
        key: 'progress',
        name: '进度条',
        module: () => import('@/components/progress/demo.md'),
        style: true,
      },
      {
        key: 'notice-bar',
        name: '通告栏',
        module: () => import('@/components/notice-bar/demo.md'),
        style: true,
      },
      {
        key: 'panel',
        name: '面板',
        module: () => import('@/components/panel/demo.md'),
        style: true,
      },
      {
        key: 'marquee',
        name: '滚动',
        module: () => import('@/components/marquee/demo.md'),
        style: false,
      },
      {
        key: 'tooltip',
        name: '文字提示',
        module: () => import('@/components/tooltip/demo.md'),
        style: true,
      },
    ],
    navigation: [
      {
        key: 'tabs',
        name: '标签页',
        module: () => import('@/components/tabs/demo.md'),
        style: true,
      },
      {
        key: 'nav-bar',
        name: '导航栏',
        module: () => import('@/components/nav-bar/demo.md'),
        style: false,
      },
      {
        key: 'tab-bar',
        name: '标签栏',
        module: () => import('@/components/tab-bar/demo.md'),
        style: false,
      },
    ],
    other: [
      // {
      //   key: 'mask',
      //   name: '遮罩层',
      //   module: () => import('@/components/mask/demo.md'),
      //   style: false,
      // },
      {
        key: 'locale-provider',
        name: '国际化',
        module: () => import('@/components/locale-provider/demo.md'),
        style: false,
      },
      {
        key: 'drag',
        name: '拖拽',
        module: () => import('@/components/drag/demo.md'),
        style: false,
      },
      {
        key: 'back-to-top',
        name: '返回顶部',
        module: () => import('@/components/back-to-top/demo.md'),
        style: false,
      },
    ],
  },
  design: [
    {
      key: 'download',
      name: '设计资源下载',
      module: () => import('@/site/web/pages/Design/Download'),
      style: false,
    },
  ],
};
