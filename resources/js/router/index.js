import { createRouter,createWebHashHistory } from "vue-router";

import invoiceIndex from '../component/invoices/index.vue';
import invoiceNew from '../component/invoices/new.vue';
import  notFound from '../component/notFound.vue';
import  invoiceEdit from '../component/invoices/edit.vue';
import invoiceShow from '../component/invoices/show.vue';

const routes = [
    {
        path:'/',
        component:invoiceIndex
    },
    {
        path:'/:pathMatch(.*)*',
        component:notFound
    },
    {
        path:'/invoice/new',
        component:invoiceNew
    },
    {
        path:'/invoice/show/:id',
        component:invoiceShow,
        props:true,
    },
    {
        path:'/invoice/edit/:id',
        component:invoiceEdit,
        props:true,
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router