"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from raw_material import views

urlpatterns = [
    
    path('', views.webIndex, name='login'),
    path('index/', views.openLogin, name='login'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='login'),
    path('web_logout/', views.webLogout, name='login'),

    path('admin_master/', views.adminMaster, name='admin_master'),
    path('add/admin_master/', views.add, name='admin_master'),
    path('update/admin_master/', views.update, name='admin_master'),
    path('delete/admin_master/', views.delete, name='admin_master'),
    path('get_data/admin_master/', views.getData, name='admin_master'),

    path('product/', views.product, name='product'),
    path('add/product/', views.addProduct, name='product'),
    path('update/product/', views.updateProduct, name='product'),
    path('delete/product/', views.deleteProduct, name='product'),
    path('get_data/product/', views.getProductData, name='product'),

    path('vendor/', views.vendor, name='vendor'),
    path('add/vendor/', views.addVendor, name='vendor'),
    path('update/vendor/', views.updateVendor, name='vendor'),
    path('delete/vendor/', views.deleteVendor, name='vendor'),
    path('get_data/vendor/', views.getVendorData, name='vendor'),

    path('order/', views.order, name='order'),
    path('get_data/order/', views.getOrderData, name='order'),

    # web url starts
    path('web_index/', views.webIndex, name='web_index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('admin_contact/', views.admin_contact, name='contact'),
    path('checkout/', views.checkout, name='checkout'),
    path('shop/', views.shop, name='shop'),
    path('single/', views.single, name='single'),
    path('payment/', views.payment, name='payment'),
    path('pay_success/', views.paymentSuccess, name='payment'),
    path('cart/', views.cart, name='cart'),
    path('add_cart/', views.addCart, name='cart'),
    path('get_cart/', views.getCart, name='cart'),
    path('checkout/payment/', views.checkoutPayment, name='payment'),
    path('check_checkout/', views.checkCheckout, name='payment'),
    path('get_buy_now_url/', views.getBuyNowURL, name='payment'),

    path('get_home_details/', views.getHomeDetails, name='home'),
    path('get_home_slider/', views.getHomeSlider, name='home'),

    path('get_single_item/', views.getSingleItem, name='home'),

    path('submit_review/', views.submitReview, name='home'),
    path('get_review/', views.getReview, name='home'),

    path('register/', views.register, name='home'),
    path('add_register/', views.newRegister, name='home'),

    path('web_login/', views.webLogin, name='web_login'),
    path('orders/', views.webOrders, name='web_login'),
    path('get_orders/', views.getOrders, name='web_login'),
    path('cancel_item/', views.cancelItem, name='home'),
    path('cancel_order/', views.cancelOrder, name='home'),
    path('save_contact/', views.saveContact, name='home'),
    path('get_contact/', views.getContact, name='home'),
    path('get_profile/', views.getProfile, name='home'),
    
    path('web_forgot_password/', views.webForgotPassword, name='web_forgot_password'),
    path('web_update_password/', views.webUpdatePassword, name='web_forgot_password'),
    path('user_check_email/', views.checkEmail, name='user_check_email'),
    path('update_password/', views.updatePassword, name='update_password'),
]
