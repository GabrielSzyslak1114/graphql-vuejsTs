<script setup lang="ts">
import {computed, watchEffect} from 'vue';

const props = defineProps({
  infoPagination: { type: Object, required: true, default:{prev: null, next: 1, count: 1} }
});

const emits = defineEmits<{
  ( event: 'getDataPagination', value: number): void
}>();


const setNumbersOfPages = computed(()=>{
  let numbersOfPages: number[] = [];
  if(props.infoPagination.count > 1){
    const numbers = Math.ceil( props.infoPagination.count / 20 );
    for(let i = 1; i <= numbers; i ++){
      numbersOfPages.push(Math.floor(i));
    }
  }
  return numbersOfPages
})

watchEffect(()=>{
  console.log(setNumbersOfPages);
})
</script>

<template>
      <div class="pagination">
        <a v-if="props.infoPagination.prev != null" class="pagination_btn prev " @click=" emits('getDataPagination',props.infoPagination.prev ) ">Prev</a>
        <div class="pagination_btn_numbers">
          <a class="pagination_btn" v-for="(pageNumber, index) in setNumbersOfPages.slice(props.infoPagination.prev, props.infoPagination.next+1)" @click="emits('getDataPagination', pageNumber)" :key="index">
            {{pageNumber}}
          </a>
        </div>
        <a v-if="props.infoPagination.next != null" class="pagination_btn next " @click=" emits('getDataPagination', props.infoPagination.next ) ">Next</a>
      </div>
</template>

<style lang="scss">
    .pagination{
      width: 25%;
      max-width: 300px;
      min-width: 285px;
      padding: 10px;
      gap: 5px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .pagination_btn{
      width: 40px;
      height: 40px;
      padding: 10px;
      background: $principal;
      color: $alterno;
      font-size: $fontSize_4;
      font-weight: $fontWeight_1;
      text-shadow: 1px 1px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      cursor: pointer;
      &:hover{
        background:$secundario;
      }

    }

    .pagination_btn_numbers{
        width: 52%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
</style>