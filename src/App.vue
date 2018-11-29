<template>
    <div>
      <navbar :counter="cart.reduce(function(count, item,index,array) { return count+item.n  },0)" @zone="productsPage=!!$event"></navbar>
      <products-page @addToCart="addToCart($event)" v-if="productsPage"></products-page>
      <cart-page @deleteFromCart="deleteFromCart($event,id)" :cart="cart" v-else></cart-page>
    </div>
</template>

<script>

    import Navbar from './Navbar.vue';
    import ProductsPage from './ProductsPage.vue';
    import CartPage from './CartPage.vue';

    export default {
	beforeMount : function() {
	   //saved data
	   this.restoreCart();

	},
        components : {
            'navbar': Navbar,
            'products-page': ProductsPage,
            'cart-page': CartPage
	},
	data : function() {
            return {
                'productsPage' : true,
		'cart' : []
            }
        },
	methods : {
		restoreCart : function() {
		    let _data;
		    const data = this.$cookies.get('cart');
		    if(data) {
			try {
			  _data = JSON.parse(data);
			} catch (e) { throw e;}
		        this.cart = _data;
		    }
		},
		addToCart(data) {

		    //data.event.preventDefault();

		     const sync = this.cart.find(function(item) {
			return item.data.id === data.id;
		     });

		     if(sync) {

			sync.n += 1


		     } else {
		         this.cart.push({ data: data, n: 1 });
		     }

		     this.$cookies.set('cart', JSON.stringify(this.cart));


	        },
	        deleteFromCart(data) {	

		    //data.event.preventDefault();

		     var sync = this.cart.findIndex(function(item) {
			return item.data.id === data.id;
		     });

		     if(sync !== -1) {

			this.cart[sync].n -= 1

			if(this.cart[sync].n < 1) {
		     	   this.cart.splice(sync, 1);
			}

		     }

		    
		     this.$cookies.set('cart', JSON.stringify(this.cart));

		}
	}  
     }
	    
</script>

<style>
</style>
