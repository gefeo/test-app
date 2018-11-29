<template>
<div :id="id" class="card">
  <img class="card-img-top img-fluid" :src="image" />
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{description}}</p>
    <a href="#" @click="addToCart($event)" class="btn btn-primary">ADD TO CART</a>
  </div>
</div>
</template>

<script>

export default {
       props: {
            id: { type: String, required: true},
	    image: { type: String, required: true},
	    title: { type: String, required: true, default: "No title"},
	    description: { type: String, required: true, default: "No description"}
	},
	methods : {
	   addToCart : function(event) {

		  let data = {};
		  data.id=this.id;
		  data.title=this.title;
		  data.description=this.description;
		  data.image=this.image;

		  this.$emit('addToCart',data);
		  event.preventDefault();
	   }
	 } 
};

</script>

<style scoped>
  div.card {
    float :left;
    width:300px;
    margin:1.8%;
  }
</style>
