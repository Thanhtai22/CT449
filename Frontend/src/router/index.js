import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: HomePage,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginPage.vue"),
        props: true //
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Regsister.vue"),
        props: true //
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/Cart.vue")
    },
    {
        path: "/ordered",
        name: "order",
        component: () => import("@/views/Ordered.vue")
    },
    {
        path: "/admin",
        name: "homepageadmin",
        component: () => import("@/views/homeAdmin.vue")
    },
    {
        path: "/admin/product",
        name: "manageproduct",
        component: () => import("@/views/admin/product.vue")
    },
    {
        path: "/admin/order",
        name: "manageorder",
        component: () => import("@/views/admin/order.vue")
    },
    {
        path: "/admin/statistic",
        name: "statistic",
        component: () => import("@/views/admin/statistic.vue")
    },
    {
        path: "/month",
        name: "statisticwithmoth",
        component: () => import("@/views/admin/month.vue")
    },
    {
        path: "/statistic",
        name: "statisticproductc",
        component: () => import("@/views/admin/day.vue")
    },
    {
        path: "/admin/products/add",
        name: "statisticwithday",
        component: () => import("@/views/admin/addproduct.vue")
    },
    {
        path: "/admin/products/edit/:id",
        name: "editproduct",
        component: () => import("@/views/admin/editproduct.vue")
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/products",
        name: "products.view",
        component: () => import("@/views/Products.vue")
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;