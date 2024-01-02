import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Spin"
const componentTitle: string = "加载中"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'block',
                title: {
                    label: '为块级元素',
                    tip: 'block | 是否为块级元素',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dot',
                title: {
                    label: '使用点类型的动画',
                    tip: 'dot | 是否使用点类型的动画',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'loading',
                title: {
                    label: '是否为加载状态',
                    tip: 'loading | 是否为加载状态（仅在 Spin 有子节点时生效）',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'delay',
                title: {
                    label: '延迟显示加载的时间',
                    tip: 'delay | 延迟显示加载的时间 (ms)',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '加载动画的尺寸',
                    tip: 'size | 加载动画的尺寸',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'element',
                title: {
                    label: '自定义元素',
                    tip: 'element | 自定义元素，非图标，不附带旋转效果。可用于设置为 gif 图片等',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'icon',
                title: {
                    label: '自定义图标',
                    tip: 'icon | 自定义图标，会自动旋转',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'tip',
                title: {
                    label: '加载的文案',
                    tip: 'tip | 加载的文案',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '反馈',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
            ],
            style: true,
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '', // require('./__screenshots__/icon.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: {
                
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
