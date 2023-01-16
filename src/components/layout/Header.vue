<script setup lang="ts">
import iconLogo from '../icons/iconLogo.vue';
import { RouterLink } from 'vue-router'

</script>

<template>
    <header class="header">
        <div class="header_container">
            <a class="header_container_logoBx">
                <img class="header_container_logoBx_img" src="@/assets/picture/icon.jpg" alt="">
                <iconLogo/>
            </a>
            <div class="header_container_navBx">
                <nav class="header_container_navBx_nav">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </div>
        
    </header>
</template>

<style lang="scss" scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: $alterno;
        padding: 10px 20px;
        z-index: 1000;
        height: 65px;
    }
    .header_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .header_container_logoBx{
        width: 55px;
        height: 45px;
    }
    .header_container_logoBx_img{
        width: 100%;
        height: 100%;
    }
    .header_container_navBx{
        min-width: 15%;
        max-width: 40%;
        width: auto;
    }
    .header_container_navBx_nav{
        display: flex;
        justify-content: space-around;
        gap: 5px;
        width: 100%;

        a{
            @include text_enlace($text_principal);
        }
    }
</style>