<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'

const openValue = ref(['a'])
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <section>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="info">info</Button>
      <Button type="warning">warning</Button>
      <Button type="danger">danger</Button>
      <Button plain type="primary">primary</Button>
      <Button plain type="success">success</Button>
      <Button plain type="info">info</Button>
      <Button plain type="warning">warning</Button>
      <Button plain type="danger">danger</Button>

      <Button type="danger" loading>loading</Button>
      <Button type="danger" icon="arrow-up">icon</Button>
    </section>

    <section>
      <Collapse v-model="openValue" accordion>
        <Item name="a" title="Title A">
          <h1>headline title</h1>
          <div>this is content a aaa</div>
        </Item>
        <Item name="b" title="Title B">
          <div>this is bbbbb test</div>
        </Item>
        <Item name="c" title="Disabled Title" disabled>
          <div>this is cccc test</div>
        </Item>
      </Collapse>
      {{ openValue }}
    </section>

    <section>
      <Icon icon="fa-solid fa-user-secret" size="2x" type="danger" color="blue" />
    </section>
  </main>
</template>

<style scoped></style>
