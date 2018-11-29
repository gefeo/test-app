<template>
<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">
    <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
    {{ shopName }}
  </a>
  <div>
    <a href="#" @click="hideCart()" class="badge badge-primary">Products</a>
    <a href="#" @click="showCart()" class="badge badge-primary">Cart({{counter}})</a>
  </div>
</nav>
</template>

<script>

export default {
    data : function() {
        return {
            shopName : 'My Shop'
        };
    },
    props : {
       counter: { type: Number, required: true}
    },
    methods : {
	showCart : function() {
		this.$emit('zone',false);
	},
	hideCart : function() {
		this.$emit('zone',true);
	}
    }

};

</script>

<style scoped>
    nav {
	font-size:1.2em;
        color:white;
    }
</style>
