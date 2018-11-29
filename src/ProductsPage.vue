<template>
    <div>
         <div class="col-md-12">
	    <div class="emphasize centered">Products</div>
	    <div class="flexbox">
	      <product @deleteFromCart="$emit('deleteFromCart',$event)" @addToCart="$emit('addToCart',$event)" v-for="product in products" :id=product.id :image="product.image" :key="product" :title="product.title" :description="product.description"></product>
	    </div>
         </div>
    </div>
</template>

<script>

import Product from './Product.vue';

export default {
	mounted : function() {
		fetch('http://localhost:3000/products').then((response)=>{
			response.json().then((data)=>{
				this.products = data;
			});
		});
	},
	components: { Product },
        data : function() {
		return {
			products: null
		}
        }
};

</script>

<style scoped>
    .flexbox {
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
    }
</style>
