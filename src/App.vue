
<template>
 <div>
  <h3>Hello World</h3>
  <button @click="createAuth">createAuth</button>
  <button @click="queryAuthors">queryAuthors</button>
  <button @click="deleteAuthors">deleteAuthors</button>
  <div v-for="author in authors" :key="author.id">
    <h1>{{author.last_name}}</h1>
    <h5>{{author.frist_name}}</h5>
  </div>
  </div>

</template>

<script>
import { DataStore } from '@aws-amplify/datastore';
import { Authors } from './models';

export default {
  name: 'App',
  data:(()=>({
    authors:[]

  })),
  components: {
  },
  methods:{
async createAuth(){
             await DataStore.save(
    new Authors({
		"frist_name": "Alber",
		"last_name": "Lee",
		"Posts": []
	})
        );

   },
   async queryAuthors() {
        const models = await DataStore.query(Authors);
        this.authors=models;
        console.log(models);

  },
  async deleteAuthors() {
        const modelToDelete = await DataStore.query(Authors,'ea800ca2-862d-4a02-9560-48dcb4e47056');
        DataStore.delete(modelToDelete);
  }

  }
}
</script>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

