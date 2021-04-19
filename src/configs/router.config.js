
const Home = () => import('../views/home')
const About = () => import('../views/about')
const Read = () => import('../views/read')
const Project = () => import('../views/project')
const ProjectDetail = () => import('../views/project/detail')
const Assess = () => import('../views/assess')
const NotFoundComponent = () => import('../views/exception/404')
const UserList = () => import('../views/sys/user')
const Paper = () => import('../views/achievements/paper')
const Management = () => import('../views/sys/management')
const Setting = () => import('../views/sys/setting')
const Award = () => import('../views/achievements/award')
const Book = () => import('../views/achievements/book')
const AssessSetting = () => import('../views/assess/setting')
const AssessForm = () => import('../views/assess/report-form')
const Audit = () => import('../views/audit')
const AssessReport = () => import('../views/assess/report')

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home',
    name: 'layout',
    component: () => import('../layout/Layout'),
    children: [
      {
        path: '/home',
        name: '仪表盘',
        component: Home,
        mate: {
          title: '仪表盘',
          icon: 'dashboard',
          isLoading: true
        }
      },
      {
        path: '/project',
        name: '项目管理',
        component: Project,
        mate: {
          title: '项目管理',
          icon: 'project',
          isLoading: true
        }
      },
      {
        path: '/project/read/:id',
        name: '项目详情',
        component: ProjectDetail,
        mate: {
          title: '项目详情',
          isLoading: false
        }
      },
      {
        path: '/assessment',
        name: '考核管理',
        mate: {
          title: '考核管理',
          icon: 'line-chart',
          isLoading: true,
          children: [
            { path: '/assess-list', title: '考核列表' },
            { path: '/assess-form', title: '报表列表' },
            { path: '/assess-setting', title: '考核设置' }
          ]
        }
      },
      {
        path: '/assessment/assess-list',
        name: '考核列表',
        component: Assess,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/assessment/report/:id',
        name: '考核报告',
        component: AssessReport,
        mate: {
          title: '考核报告',
          isLoading: false
        }
      },
      {
        path: '/assessment/assess-form',
        name: '报表列表',
        component: AssessForm,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/assessment/assess-setting',
        name: '考核设置',
        component: AssessSetting,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/achievements',
        name: 'Achievements',
        mate: {
          title: '成果管理',
          icon: 'apartment',
          isLoading: true,
          children: [
            { path: '/paper', title: '论文' },
            { path: '/book', title: '著作' },
            { path: '/award', title: '获奖成果' }
          ]
        }
      },
      {
        path: '/audit',
        name: '数据审核',
        component: Audit,
        mate: {
          title: '数据审核',
          icon: 'file-done',
          isLoading: true
        }
      },
      {
        path: '/system',
        name: 'System',
        component: About,
        mate: {
          title: '系统管理',
          icon: 'setting',
          isLoading: true,
          children: [{ path: '/list', title: '用户列表' }, { path: '/management', title: '管理文件' }, { path: '/setting', title: '系统配置' }]
        }
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        mate: {
          title: '关于',
          icon: 'question-circle',
          isLoading: true
        }
      },
      {
        path: '/read/:id',
        name: 'Read',
        component: Read,
        mate: {
          title: '阅读',
          isLoading: false
        }
      },
      {
        path: '/achievements/paper',
        name: '论文',
        component: Paper,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/achievements/book',
        name: '著作',
        component: Book,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/achievements/award',
        name: '获奖成果',
        component: Award,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/system/list',
        name: '用户列表',
        component: UserList,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/system/management',
        name: '管理文件',
        component: Management,
        mate: {
          isLoading: false
        }
      },
      {
        path: '/system/setting',
        name: '系统配置',
        component: Setting,
        mate: {
          isLoading: false
        }
      }
    ]
  },
  {
    path: '/sys/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/sys/forget',
    name: '忘记密码',
    component: () => import('../views/login/forgot')
  },
  {
    path: '/login/github',
    name: 'GithubLogin',
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/exception/403',
    name: '403',
    component: () => import('../views/exception/403'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/500',
    name: '500',
    component: () => import('../views/exception/500'),
    mate: {
      isLoading: false
    }
  },
  {
    path: '/exception/404',
    name: '404',
    component: NotFoundComponent,
    mate: {
      isLoading: false
    }
  },
  {
    path: '*',
    redirect: '/exception/404',
    hidden: true
  }
]
