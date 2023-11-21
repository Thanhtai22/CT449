<template>
    <div class="container my-y" style="text-align: center;">
        <img src="../assets/images/cart.png" style="width: 200px;" alt="">
        <div class="mt-4">
            <h4 class="orange-red fw-600">Your cart is empty</h4>
            <h5 class="darkblue fw-600">You can go to home page to view more food items.</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmptyCart"
};
</script>

<style>
.orange-red{
    color: red;
}
.darkblue{
    color: darkblue;
}
.fw-600{
    font-weight: 600;
}
</style>