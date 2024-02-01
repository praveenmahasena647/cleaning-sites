<script lang='ts' setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <router-link to='/borckville' class='f'>
        borckville
    </router-link>
    <br>
    <br>
    <router-link to='/kingston' class='f'>
        kingston
    </router-link>
    <br>
    <br>
    <router-link to='/x' class='f'>
        stocks & supplies
    </router-link>

    <br>
    <br>
    <router-link to='/southFrontenac' class='f'>
        South Frontenac
    </router-link>
    <br>
    <br>

    <router-link to='/places' class='f'>
        Places with Address
    </router-link>

</template>

<style lang='scss' scoped>
.f {
    font-size:1.7rem;
    font-width:bold;
    text-decoration:underline;
}
</style>
