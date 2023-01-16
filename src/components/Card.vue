<script setup lang="ts">
import { RouterLink } from 'vue-router'

// defineProps<{
//     info: object
// }>()

const props = defineProps({
    info:{
        type: Object,
        default: { 
            name: "",
            status: "",
            species: "",
            image: "",
            location: {name: ""},
            gender: ""
        }
    }
})

</script>

<template>
    <article class="card">
        <div class="card_imgBx">
            <img class="card_imgBx_img" :src="props.info.image" alt="#">
        </div>

        <div class="card_content">
            <div class="card_content_section">
                <RouterLink to="/" class="card_content_section_name" href="">{{props.info.name}}</RouterLink>
                <span class="card_content_section_subtitle" :class="props.info.status == 'Alive' ? 'alive_color' : 'dead_color' ">{{ props.info.status }} - {{ props.info.species }}</span>
            </div>
            <div class="card_content_section">
                <span class="card_content_section_subtitle" href="">Last known location</span>
                <RouterLink class="card_content_section_link" to="/"> {{ props.info.location.name }} </RouterLink>
            </div>
            <div class="card_content_section">
                <span class="card_content_section_subtitle" href="">Gender</span>
                <RouterLink class="card_content_section_link" to="/">  {{ props.info.gender }}</RouterLink>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
    .card{
    width: 450px;
    min-width: 380px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: $negro_alterno;
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    }
    .card_imgBx{
        width: 35%;
        height: 100%;
    }
    .card_imgBx_img{
        width: 100%;
        height: 100%;
    }

    .card_content{
    width: 65%;
    position: relative;
    padding: 1.2rem;
    color: $alterno;
    display: flex;
    flex-direction: column;
    }
    .card_content_section{
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    }
    .card_content_section_name{
        font-size: $fontSize_3;
        font-weight: $fontWeight_1;
        color: $alterno;
    }
    .card_content_section_subtitle{
        font-size: $fontSize_4;
        font-weight: $fontWeight_3;
        color: $text_secundario;
        font-weight: $fontWeight_2;

}
    .card_content_section_link{
        font-size: $fontSize_4;
        color:$alterno
    }

    .dead_color{
        color: red;
    }
    .alive_color{
        color: green;
    }

</style>