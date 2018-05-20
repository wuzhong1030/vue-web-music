const main = resolve => require.ensure([], () => resolve(require("../page/main.vue")), 'main')
const search = resolve => require.ensure([], () => resolve(require("../page/search.vue")), 'search')
const finder = resolve => require.ensure([], () => resolve(require("../page/finder.vue")), 'finder')
const mv = resolve => require.ensure([], () => resolve(require("../page/mv.vue")), 'mv')
const friend = resolve => require.ensure([], () => resolve(require("../page/friend.vue")), 'friend')

export default [
  {
    path: "/",
    component: main,
    children: [
      {
        path: "/search",
        component: search
      },
      {
        path: "/finder",
        component: finder
      },
      {
        path: "/mv",
        component: mv
      }, 
      {
        path: "/friend",
        component: friend
      }
    ]
  }
]