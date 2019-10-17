import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: Home
  },
  {
    path: "/appointments",
    name: "appointments",
    meta: { layout: "main" },
    component: () => import("../views/Appointments.vue")
  },
  {
    path: "/cancelappointment",
    name: "cancelappointment",
    meta: { layout: "main" },
    component: () => import("../views/CancelAppointment.vue")
  },
  {
    path: "/clinics",
    name: "clinics",
    meta: { layout: "main" },
    component: () => import("../views/Clinics.vue")
  },
  {
    path: "/comingsoon",
    name: "comingsoon",
    meta: { layout: "main" },
    component: () => import("../views/ComingSoon.vue")
  },
  {
    path: "/feedback",
    name: "feedback",
    meta: { layout: "main" },
    component: () => import("../views/Feedback.vue")
  },
  {
    path: "/locations/:id",
    name: "locations",
    meta: { layout: "main" },
    component: () => import("../views/Locations.vue")
  },
  {
    path: "/openinghours",
    name: "openinghours",
    meta: { layout: "main" },
    component: () => import("../views/OpeningHours.vue")
  },
  {
    path: "/prescriptions",
    name: "prescriptions",
    meta: { layout: "main" },
    component: () => import("../views/Prescriptions.vue")
  },
  {
    path: "/praticeteam",
    name: "praticeteam",
    meta: { layout: "main" },
    component: () => import("../views/PraticeTeam.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
