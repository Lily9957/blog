import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Container.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/write",
    name: "Write",
    component: () => import("../views/WriteBlog.vue")
  },
  {
    path: "/comments",
    name: "Comments",
    component: () => import("../components/Comments.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/ShowBlog.vue")
  },
  {
    path: "/me",
    name: "About",
    component: () => import("../views/About.vue"),
    redirect: '/posts',
    children: [
      {
        path: "/posts",
        name: "MyPosts",
        component: () => import("../components/About/MyPosts.vue")
      },
      {
        path: "/draft",
        name: "Draft",
        component: () => import("../components/About/Draft.vue")
      },
      {
        path: "/personal",
        name: "Personal",
        component: () => import("../components/About/Personal.vue")
      }
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
