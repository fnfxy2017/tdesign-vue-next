<template>
  <div>
    <h3>带步骤的思维链</h3>
    <t-chat-chain-of-thought header="思考过程" :default-collapsed="false">
      <t-chat-chain-of-thought-step
        label="步骤1：理解问题"
        description="分析用户问题的意图和上下文"
        status="complete"
      />
      <t-chat-chain-of-thought-step label="步骤2：检索知识库" description="从知识库中检索相关信息" status="complete" />
      <t-chat-chain-of-thought-step label="步骤3：生成回答" description="基于检索结果生成最终回答" status="active" />
      <t-chat-chain-of-thought-step label="步骤4：审核输出" description="检查回答的准确性和合理性" status="pending" />
    </t-chat-chain-of-thought>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TChatChainOfThought from '../chat-chain-of-thought';
import TChatChainOfThoughtStep from '../chat-chain-of-thought-step';

export default defineComponent({
  name: 'WithStepsDemo',
  components: {
    TChatChainOfThought,
    TChatChainOfThoughtStep,
  },
});
</script>
