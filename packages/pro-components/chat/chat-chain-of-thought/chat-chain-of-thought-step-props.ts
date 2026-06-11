/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PropType } from 'vue';
import { TdChatChainOfThoughtStepProps } from '../type';

export default {
  /** 步骤标题 */
  label: {
    type: String as PropType<TdChatChainOfThoughtStepProps['label']>,
    default: '',
  },
  /** 步骤描述 */
  description: {
    type: String as PropType<TdChatChainOfThoughtStepProps['description']>,
    default: '',
  },
  /** 步骤状态 */
  status: {
    type: String as PropType<TdChatChainOfThoughtStepProps['status']>,
    default: 'complete' as TdChatChainOfThoughtStepProps['status'],
    validator(val: TdChatChainOfThoughtStepProps['status']): boolean {
      if (!val) return true;
      return ['complete', 'active', 'pending'].includes(val);
    },
  },
  /** 自定义图标插槽 */
  icon: {
    type: Function as PropType<TdChatChainOfThoughtStepProps['icon']>,
  },
};
