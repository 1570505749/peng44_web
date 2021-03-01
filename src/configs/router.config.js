
const Home = () => import('../views/home')
const About = () => import('../views/about')
const Read = () => import('../views/read')
const NotFoundComponent = () => import('../views/exception/404')
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
        name: 'Home',
        component: Home,
        mate: {
          title: '主页',
          icon: 'home',
          isLoading: true
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
      }
    ]
  },
  {
    path: '/peng44/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/login/github',
    name: 'GithubLogin',
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/login/gitee',
    name: 'GiteeLogin',
    component: () => import('../views/login/index')
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
  }
]
