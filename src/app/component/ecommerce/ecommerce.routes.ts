import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PorductPageComponent } from './porduct-page/porduct-page.component';
import { PaymentDetalisComponent } from './payment-detalis/payment-detalis.component';
import { ApprovedproductsComponent } from './approvedproducts/approvedproducts.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CommandesComponent } from './commandes/commandes.component';
import { StatusUpdateComponent } from './status-update/status-update.component';
import { RefundsComponent } from './refunds/refunds.component';

export const Ecommerce: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-products',
        component: AddProductComponent,
        data: {
          title: "Add Product",
          breadcrumb: "Add Product",
        }
      },
      {
        path: 'approvedproducts',
        component: ApprovedproductsComponent,
        data: {
          title: "Approved Products",
          breadcrumb: "Approved Products",
        }
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        data: {
          title: "Product Categories",
          breadcrumb: "Product Categories",
        }
      },
      {
        path: 'list-products',
        component: ListProductsComponent,
        data: {
          title: "Product Categories",
          breadcrumb: "Product Categories",
        }
      },
      {
        path: 'commandes',
        component: CommandesComponent,
        data: {
          title: "Commandes",
          breadcrumb: "Commandes",
        }
      },
      {
        path: 'status-update',
        component: StatusUpdateComponent,
        data: {
          title: "status-update",
          breadcrumb: "status-update",
        }
      },
      {
        path: 'refunds',
        component: RefundsComponent,
        data: {
          title: "Refunds",
          breadcrumb: "Refunds",
        }
      },
      {
        path: 'products',
        component: ProductComponent,
        data: {
          title: "Product",
          breadcrumb: "Product",
        }
      },
      {
        path: 'category-page',
        component: CategoryPageComponent,
        data: {
          title: "Display Category",
          breadcrumb: "Category",
        }
      },
      {
        path: 'product-page',
        component: PorductPageComponent,
        data: {
          title: "Product Page",
          breadcrumb: "Product Page",
        }
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        data: {
          title: "Product List",
          breadcrumb: "Product List",
        }
      },
      {
        path: 'payment-details',
        component: PaymentDetalisComponent,
        data: {
          title: "Payment Details",
          breadcrumb: "Payment Details",
        }
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        data: {
          title: "Recent Orders",
          breadcrumb: "Recent Orders",
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: "Cart",
          breadcrumb: "Cart",
        }
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        data: {
          title: "Wishlist",
          breadcrumb: "Wishlist",
        }
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          title: "Checkout",
          breadcrumb: "Checkout",
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: "Pricing",
          breadcrumb: "Pricing",
        }
      }
    ]
  }
]