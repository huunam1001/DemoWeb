import Dashboard from '../pages/dashboard/dashboard'
import Category from '../pages/category'
import Login from '../pages/login/login'
import PATH from './path'

export const loginRoutes = [
  {
    manuName: 'Dashboard',
    path: PATH.DASHBOARD_SCREEN,
    uiContent: Dashboard,
    isMenu: true
  },
  {
    manuName: 'Category',
    path: PATH.CATEGORY_SCREEN,
    uiContent: Category,
    isMenu: true
  }
]

export const unAuthRoutes = [
  {
    manuName: '',
    path: PATH.LOGIN_SCREEN,
    uiContent: Login,
    isMenu: false
  }
]
