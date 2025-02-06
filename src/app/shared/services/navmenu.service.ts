import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  headTitle1?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[]
}


@Injectable({
  providedIn: 'root'
})
export class NavmenuService {

  public isDisplay!: boolean;
  public language: boolean = false;
  public isShow: boolean = false;
  public closeSidebar: boolean = false;


  constructor() { }

  MENUITEMS: Menu[] = [
    {
      headTitle1: "General",
    },
    {
      id: 1,
      level: 1,
      title: "Dashboards",
      icon: "home",
      type: "sub",
      active: true,
      children: [
        { path: "/widgets/general", title: "Board", type: "link" },
       /*  { path: "/dashboard/ecommerce", title: "Ecommerce", type: "link" },
        { path: "/dashboard/project-deshboard", title: "Project", type: "link" }, */
      ],
    },
   /*  {
      id: 2,
      level: 1,
      title: "Widgets",
      icon: "widget",
      type: "sub",
      active: false,
      children: [
        { path: "/widgets/general", title: "General", type: "link" },
        { path: "/widgets/chart", title: "Chart", type: "link" },
      ],
    }, */
   /*  {
      id: 3,
      level: 1,
      title: "Page Layout",
      icon: "layout",
      type: "sub",
      active: false,
      children: [
        { path: '/page-layout/hide-nav-scroll', title: 'Hide Nav Scroll', type: 'link' },
      ],
    }, */
    {
      headTitle1: "Product Management",
    },
   /*  {
      id: 4,
      level: 1,
      title: "Pieces",
      icon: "project",
      type: "sub",
      active: false,
      horizontalList: true,
      
    }, */
   /*  {
      id: 5,
      level: 1,
      path: "/file-manager",
      title: "File Manager",
      icon: "file",
      type: "link",
    }, */
    {
      id: 6,
      level: 1,
      title: "Ecommerce",
      type: "sub",
      icon: "ecommerce",
      horizontalList: true,
      active: false,
      children: [
        { path: "/ecommerce/add-products", title: "Add Product", type: "link" },
        { path: "/ecommerce/approvedproducts", title: "Approve Products", type: "link" },
        { path: "/ecommerce/list-products", title: "Liste of Products", type: "link" },
        { path: "/ecommerce/categories", title: "Categories", type: "link" },
     /*    {
          title: 'invoice',
          type: "sub",
          level: 2,
          active: false,
          children: [
            { path: "/invoice/invoice1", title: "Invoice1", type: "link" },
            { path: "/invoice/invoice2", title: "Invoice2", type: "link" },
            { path: "/invoice/invoice3", title: "Invoice3", type: "link" },
            { path: "/invoice/invoice4", title: "Invoice4", type: "link" },
            { path: "/invoice/invoice5", title: "Invoice5", type: "link" },
            { path: "/invoice/invoice6", title: "Invoice6", type: "link" },
          ]
        }, */
        /* { path: "/ecommerce/cart", title: "Cart", type: "link" },
        { path: "/ecommerce/wishlist", title: "Wishlist", type: "link" },
        { path: "/ecommerce/checkout", title: "Checkout", type: "link" },
        { path: "/ecommerce/pricing", title: "Pricing", type: "link" }, */
      ],
    },
    /* {
      id: 7,
      level: 1,
      title: "Product Approvals",
      path: "/letter-box",
      icon: "email",
      active: false,
      type: "link",
    }, */
  /*   {
      id: 8,
      level: 1,
      title: "Chat",
      type: "sub",
      icon: "ecommerce",
      active: false,
      children: [
        { path: "/Chat/private-chat", title: "Private Chat", type: "link" },
        { path: "/Chat/group-chat", title: "Group Chat", type: "link" },
      ],
    }, */
    
    /* { level: 1, id: 10, path: "/bookmarks", title: "Bookmarks", icon: "bookmark", type: "link" },
    { level: 1, id: 11, path: "/contacts", bookmark: true, title: "Contact", icon: "contact", type: "link" },
    { level: 1, id: 12, path: "/task", bookmark: true, title: "Tasks", icon: "task", type: "link" },
    { level: 1, id: 13, path: "/calender", title: "Calender", icon: "calendar", type: "link" },
    { level: 1, id: 14, path: "/social-app", title: "Social App", icon: "social", type: "link" },
    { level: 1, id: 15, path: "/todo", bookmark:true, title: "To-Do", icon: "to-do", type: "link" },
    { level: 1, id: 16, path: "/search-pages", title: "Search Result", icon: "search", type: "link" }, */
    {
      headTitle1: "Commandes",
    },
    {
      id: 17,
      level: 1,
      title: "Les Commandes",
      icon: "form",
      type: "sub",
      active: false,
      children: [
        {
          title: "Commandes",
          type: "sub",
          level: 2,
          active: false,
          children: [
            { path: "/ecommerce/commandes", title: "Commandes", type: "link" },
            { path: "/ecommerce/status-update",  title: "Status Updates", type: "link" },
            { path: "/ecommerce/refunds", title: "Refunds & Returns", type: "link" },
            
          ],
        }
        
      ]
    },
    /* {
      id: 18,
      level: 1,
      title: "Tables",
      icon: "table",
      type: "sub",
      active: false,
      children: [
        {
          title: "Bootstrap Tables",
          type: "sub",
          level: 2,
          active: false,
          children: [
            { path: "/table/bootstrap-tables/basic-table", title: "Basic Table", type: "link" },
            { path: "/table/bootstrap-tables/table-components", title: "Table Components", type: "link" },
          ],
        },
        {
          title: "Data Table",
          active: false,
          type: "link",
          path: "/table/datatable",
        },
      ],
    }, */
    {
      headTitle1: "Inventory Management",
    },
    {
      id: 19,
      level: 1,
      title: "Inventaire",
      icon: "ui-kits",
      type: "sub",
      active: false,
      children: [
        { path: "/ui-kits/typography", title: "Vendor Stock Monitoring", type: "link" },
        { path: "/ui-kits/avatars", title: "Low Stock Alerts", type: "link" },
        
      ],
    },
    {
      headTitle1: "Financial Management",
    },
    { level: 1, id: 24, path: "/sample-page", title: "Vendor Payments", icon: "sample-page", type: "link" },
    { level: 1, id: 25, path: "/sample-page", title: "Cmission Mangment", icon: "sample-page", type: "link" },
    { level: 1, id: 26, path: "/sample-page", title: "Discounts/Promotions", icon: "sample-page", type: "link" },
    { level: 1, id: 27, path: "/sample-page", title: "Transaction Logs", icon: "sample-page", type: "link" },
   
    {
      headTitle1: "Gestion de Utilisateurs",
    },
    {
      id: 9,
      level: 1,
      title: "Utilisateurs",
      icon: "user",
      type: "sub",
      active: false,
      children: [
        { path: "/user/users-profile", title: "Comptes Clients", type: "link" },
        { path: "/user/profile-edit", title: "Comptes Vendeurs", type: "link" },
        { path: "/user/users-cards", title: "Access Control", type: "link" },
      ],
    },
    {
      headTitle1: "Reporting & Analytics",
    },
    { level: 1, id: 24, path: "/sample-page", title: "Sales Reports", icon: "sample-page", type: "link" },
    { level: 1, id: 25, path: "/sample-page", title: "Vendor Performance", icon: "sample-page", type: "link" },
    { level: 1, id: 26, path: "/sample-page", title: "Customer Insights", icon: "sample-page", type: "link" },
  
    {
      headTitle1: "Marketing Tools",
    },
    { level: 1, id: 24, path: "/sample-page", title: "Home Management", icon: "sample-page", type: "link" },
    { level: 1, id: 25, path: "/sample-page", title: "Email/SMS Campaigns", icon: "sample-page", type: "link" },
    { level: 1, id: 26, path: "/sample-page", title: "SEO Management", icon: "sample-page", type: "link" },
   
  
  ]

  item = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
