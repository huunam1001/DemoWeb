import Dashboard from '../pages/dashboard/dashboard'
import Category from '../pages/category'
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
