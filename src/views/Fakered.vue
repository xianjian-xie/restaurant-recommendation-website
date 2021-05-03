<template>
    <div>
    </div>

</template>

<script>
export default {
    name: 'Fakered',
    mounted() {
        setTimeout(function(){ }, 500);
        this.$router.push('/wishlist')
        console.log("I am here")
        // this.$router.push({ path: '/todos', params: { userID: this.$prop.userID }})
  }

}

</script>


