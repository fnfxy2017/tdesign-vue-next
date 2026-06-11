<template>
  <div>
    <h3>基础用法</h3>
    <t-chat-chain-of-thought header="思维链">
      <t-chat-chain-of-thought-step label="理解用户问题" description="分析用户意图，确定问题类型" status="complete" />
      <t-chat-chain-of-thought-step label="检索相关知识" description="从知识库中检索相关信息" status="complete" />
      <t-chat-chain-of-thought-step label="生成回答" description="基于检索结果生成最终回答" status="active" />
    </t-chat-chain-of-thought>
  </div>
</template>

<script setup lang="ts">
import { TChatChainOfThought, TChatChainOfThoughtStep } from '@tdesign-vue-next/chat';
</script>
