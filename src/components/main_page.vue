<template>
  <v-container>
    <v-content>
      <div class="text-center display-3 my-4">메인 페이지입니다.</div>
      <v-row>
        <v-col offset-sm="1" sm="10">
          <v-text-field label="제목" v-model="sTitle"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-sm="1" sm="10">
          <v-text-field label="제목" v-model="sParam1"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-sm="1" sm="10">
          <v-text-field label="제목" v-model="sParam2"></v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn fab large class="mt-5" color="purple" dark @click="fnSetTitle">
          확 인
        </v-btn>
      </div>
      <div class="text-center">
        <v-btn fab large class="mt-5" color="purple" dark @click="fnGosub">
          sub 확 인
        </v-btn>
      </div>
    </v-content>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      sTitle: this.$store.getters.fnGetData,
      sParam1: '',
      sParam2: ''
    }
  },
  methods: {
    fnSetTitle() {
      this.$store.commit('fnSetData', this.sTitle)
      this.$router.push('/sub')
    },
    fnGosub() {
      this.$router.push({
        name: 'sub_page',
        params: {
          p_param1: this.sParam1,
          p_param2: this.sParam2
        }
      })
    }
  }
}
</script>

<style></style>
