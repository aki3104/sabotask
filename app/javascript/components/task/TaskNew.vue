<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>タスク追加</h1>
      </v-flex>
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <FormTaskTitle></FormTaskTitle>
              <FormTaskContent></FormTaskContent>
              <FormTaskLimit></FormTaskLimit>
              <div class="text-center">
                <v-btn :to="{ name: 'Top' }">キャンセル</v-btn>
                <!-- 後で保存できるactionをtask.js内に作成 -->
                <v-btn color="info" class="ml-2" @click="create()">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import FormTaskTitle from '../form/FormTaskTitle'
import FormTaskContent from '../form/FormTaskContent'
import FormTaskLimit from '../form/FormTaskLimit'

export default {
  name: 'TaskNew',
  components: {
    FormTaskTitle,
    FormTaskContent,
    FormTaskLimit,
  },
  methods: {
    ...mapActions( 'task', [
      'create',
    ])
  }
}
</script>