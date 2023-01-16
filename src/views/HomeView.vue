<script setup lang="ts">
import { watchEffect, reactive, computed, onMounted,ref } from 'vue';
import type { Character } from '../interfaces/character';
import {GQL_CHARACTERS} from '@/graphql/Characters';
import { useQuery } from '@vue/apollo-composable';
import Pagination from '@/components/Pagination.vue';
import Card from '@/components/Card.vue';

let characters = reactive<Character[]> ([]);
let searchValue = ref<string>("");

const variables = reactive({
  page: 1,
  filter: {name: '', status: ''}
});

const { result, loading, error } = useQuery(GQL_CHARACTERS, variables);


// search character pagination
function getCharacters(page: number = 1):void{
  // RefreshData();
  variables.page = page;
}

//search character for name
function searchCharacter(value: string):void{
  RefreshData();
  variables.filter.name = value;
}

// search characters with filter for status 'Alive' or 'Dead'
function filter(value: string):void{
  RefreshData();
  variables.filter.status = value;
}

function RefreshData(all: boolean = false):void{
  if(all){
    console.log("refresh");
    variables.page = 1;
    variables.filter.status = "";
    variables.filter.name = '';
    searchValue.value = '';
  }else{
    console.log("refresh");
    variables.page = 1;
    variables.filter.status = "";
  }
}
// observer result Api RickAnMorty if change:  update state array characters
watchEffect(()=>{
  console.log("watch: ",result);
  if(result.value != undefined ) {
    characters = result.value.characters.results;
    console.log("existe characters: ", characters);
  }
  else{ console.log("no existe")};
})


</script>

<template>
  <main class="page">
    <div class="banner">
      
    </div>

    <section class="list">
      <h2 class="list_title">
        Rick and Morty
      </h2>
      
      <div class="list_loading" v-if="loading">
        <p> Loading...</p>
      </div>
      
      <div v-else-if="error">
        <p>Error: {{ error.message }}</p>
      </div>
      
      <div v-else-if="result && result.characters" class="list_container">
        <div class="list_container_header">
          <div class="list_container_header_searchBx">
            <input type="text" placeholder="search" v-model="searchValue" @keyup.enter="searchCharacter(searchValue)">
          </div>

          <div class="list_container_header_filtersBx">
            <a @click="filter('Alive')" :class="variables.filter.status == 'Alive' ? 'active' : 'normal' ">Alive</a>
            <a @click="filter('Dead')" :class="variables.filter.status == 'Dead' ? 'active' : 'normal' ">Dead</a>
            <a @click="RefreshData()" :class="variables.filter.status == '' && variables.filter.name == ''  ? 'active' : 'normal' ">All</a>
            <a v-if="variables.filter.name != ''" @click="RefreshData(true)" >Refresh</a>
          </div>
          <Pagination :infoPagination="result.characters.info" @getDataPagination="(page: number)=> getCharacters(page)"/>
        </div>
          <div class="list_container_cards">
            <Card v-for="(character, index) in characters" :info="character" />
          </div>
      </div>
    </section>

  </main>
</template>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/picture/banner.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.list{
  position: relative;
  top: -65px;
  min-height: 100vh;
  background: $negro;
  border-radius: 50px 50px 0px 0px;
  overflow: hidden;
}

.list_title{
  font-size: $fontSize_1;
  font-weight: $fontWeight_1;
  color: $principal;
  text-align: center;
  margin: 60px 5px 30px;
}

.list_container_header{
  box-shadow: 2px 0px 5px 2px rgb(0 0 0 / 5%);
      width: 95%;
      margin: 0 auto;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      gap: 5px;
      background: $negro_alterno;
}

.list_container_header_searchBx{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    input{
      width: 100%;
      height: 40px;
      padding: 10px;
      border: 1px solid rgba(0,0,0,.10);
      border-radius: 15px;
      background: $negro;
      color: $principal;
    }
    input:focus{
      border: 1px solid rgba(0,0,0,.20);
      outline: none;
    }
}

.list_container_header_filtersBx{
  width: 30%;
  min-width: 260px;
  max-width: 265px;
  display: flex;
  justify-content: space-around;
  a{
    min-width: 70px;
    width: auto;
    // background: $principal;
    color: $alterno;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
  }
}


.list_container_cards{
    width: 100%;
    padding: 5px 25px;
    min-height: 500px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media(max-width: 1200px){
      justify-content: center;
    }
}

.active{
  background: $secundario;
}

.normal{
  background: $negro_alterno;
}


.list_loading{
  color: $alterno;
  font-size: $fontSize_1;
  text-align: center;
  margin: 20px auto;
  width: 100%;
}
</style>
