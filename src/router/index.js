import { createRouter, createWebHistory } from "vue-router";

// Main Pages
import Dashboard from "../views/Dashboard.vue";
import Invoices from "../views/Invoices.vue";
import Clients from "../views/Clients.vue";
import Profile from "../views/Profile.vue";
import Reports from "../views/Reports.vue";
import ProductsAndServices from "../views/ProductsAndServices.vue";
import Login from "../views/layouts/auth/Login.vue";
import Register from "../views/layouts/auth/Register.vue";
import ForgotPassword from "../views/layouts/auth/forgot-password.vue";
import Page404 from "../views/layouts/error/404.vue";
import Page500 from "../views/layouts/error/500.vue";






// Component Pages
import Valert from "../views/components/alert.vue";
import Vaccrodion from "../views/components/accordion.vue";
import Vbadges from "../views/components/badges.vue";
import Vbreadcumb from "../views/components/breadcumbs.vue";
import Vbutton from "../views/components/button.vue";
import Vcard from "../views/components/card.vue";
import Vdropdown from "../views/components/dropdown.vue";
import Vmodal from "../views/components/modal.vue";
// layouts
import Blank from "../views/layouts/Blank.vue";
import PageMaintenance from "../views/layouts/error/maintenance.vue";
import Tables from "../views/tables.vue";

var appname = " - BookRite";

const routes = [
  
  // Routes

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },

  {
    path: "/invoices",
    name: "Invoices",
    component: Invoices,
    meta: { title: "Invoices " + appname },
  },

  {
    path: "/clients",
    name: "Clients",
    component: Clients,
    meta: { title: "Clients " + appname },
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { title: "Profile " + appname },
  },

  {
    path: "/reports",
    name: "Reports",
    component: Reports,
    meta: { title: "Reports " + appname },
  },
  {
    path: "/products-and-services",
    name: "ProductsAndServices",
    component: ProductsAndServices,
    meta: { title: "ProductsAndServices " + appname },
  },

  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: "Login" + appname, hideNav: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: "Register" + appname, hideNav: true },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: { title: "i Forgot Password" + appname, hideNav: true },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: Page404,
    meta: { title: "Oops! 404" + appname, hideNav: true },
  },
  {
    path: "/500",
    name: "Page500",
    component: Page500,
    meta: { title: "Server internal Error" + appname, hideNav: true },
  },











  // Components based Routes
  {
    path: "/component/alert",
    name: "Valert",
    component: Valert,
    meta: { title: "Alert" + appname },
  },
  {
    path: "/component/accordion",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: Vbadges,
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/breadcumb",
    name: "Vbreadcumb",
    component: Vbreadcumb,
    meta: { title: "Breadcumb" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: Vbutton,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: Vcard,
    meta: { title: "Card" + appname },
  },
  {
    path: "/component/dropdown",
    name: "Vdropdown",
    component: Vdropdown,
    meta: { title: "Dropdown" + appname },
  },
  {
    path: "/component/modal",
    name: "Vmodal",
    component: Vmodal,
    meta: { title: "Modal" + appname },
  },
  // layouts

  {
    path: "/Blank",
    name: "Blank Page",
    component: Blank,
    meta: { title: "Blank Page" + appname },
  },

  
  
 
  {
    path: "/maintenance",
    name: "maintenance",
    component: PageMaintenance,
    meta: {
      title: "Sorry the app has been Maintenance" + appname,
      hideNav: true,
    },
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: {
      title: "Tables" + appname,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
