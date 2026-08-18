import type { NavigationGuardWithThis } from 'vue-router'

export const setTitle: NavigationGuardWithThis<undefined> = (to) => {
  document.title = `${to.meta.title} | ${import.meta.env.VITE_APP_NAME}`
  return true
}
