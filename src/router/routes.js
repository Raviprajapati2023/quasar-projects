const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/quiz-app", component: () => import("pages/QuizApp.vue") },
      { path: "/quiz-app", component: () => import("pages/QuizApp.vue") },
      { path: "/flip-card", component: () => import("pages/FlipCard.vue") },
      { path: "/todo-app", component: () => import("pages/TodoApp.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
