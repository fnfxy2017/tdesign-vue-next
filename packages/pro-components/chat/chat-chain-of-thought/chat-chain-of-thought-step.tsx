import { defineComponent, inject, computed } from 'vue';
import { usePrefixClass, useTNodeJSX } from '@tdesign/shared-hooks';
import props from './chat-chain-of-thought-step-props';
import type { TdChatChainOfThoughtStepProps } from '../type';

export default defineComponent({
  name: 'TChatChainOfThoughtStep',
  props,
  setup(props: TdChatChainOfThoughtStepProps) {
    const COMPONENT_NAME = usePrefixClass('chat-chain-of-thought__step');
    const renderTNodeJSX = useTNodeJSX();

    const collapsed = inject('chat-chain-of-thought-collapsed', computed(() => false));

    const cls = computed(() => [
      `${COMPONENT_NAME.value}`,
      `${COMPONENT_NAME.value}--${props.status}`,
      {
        [`${COMPONENT_NAME.value}--collapsed`]: collapsed.value,
      },
    ]);

    const iconCls = computed(() => [
      `${COMPONENT_NAME.value}-icon`,
      `${COMPONENT_NAME.value}-icon--${props.status}`,
    ]);

    return () => (
      <div class={cls.value}>
        <div class={iconCls.value}>
          {renderTNodeJSX('icon') || (
            <span class={`${COMPONENT_NAME.value}-icon-default`}>
              {props.status === 'complete' ? '✓' : props.status === 'active' ? '●' : '○'}
            </span>
          )}
        </div>
        <div class={`${COMPONENT_NAME.value}-content`}>
          {props.label && <div class={`${COMPONENT_NAME.value}-label`}>{props.label}</div>}
          {props.description && (
            <div class={`${COMPONENT_NAME.value}-description`}>{props.description}</div>
          )}
          {renderTNodeJSX('default')}
        </div>
      </div>
    );
  },
});
