<template>
<div class="col-md-12">
<div class="emphasize centered">Cart</div>
<div class="text-uppercase centered small" v-if="!cart.length">Your card is empty</div>
<div class="container">
<ul>
<li class="card" v-for="item in cart">
<p>{{item.n}}</p>
<img class="card-img-left img-fluid" :src="item.data.image" />
{{item.data}}
<div class="card-body">
<h5 class="card-title">{{item.data.title}}</h5>
<p class="card-text">{{item.data.description}}</p>
<a href="#" @click="deleteFromCart(item.data.id,$event)" class="btn btn-secondary">REMOVE</a>
</div>
</li>
</ul>
<small v-show="cart.length > 1" ><a href="#" @click="deleteAllFromCart()" class="clean btn btn-secondary">CLEAN ALL</a></small>
</div>
</div>
</template>

<script>

export default {
    data : function() {
        return {
        };
    },
    props: {
       cart: { type: Array, required: true}
    },
    methods : {
       deleteFromCart : function(id,event) {
           this.$emit('deleteFromCart', {
                event:event, 
		id:id
           });
       }
    }
};

</script>

<style scoped>
img {
    width: 40%;
    margin:1%;
}

ul {
padding:0;
}
</style>
