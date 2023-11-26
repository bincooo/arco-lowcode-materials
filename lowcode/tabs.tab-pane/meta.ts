import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "TabPane"
const componentTitle: string = "标签面板"


const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'title',
                title: {
                    label: '选项卡的标题显示',
                    tip: 'title | 选项卡的标题显示'
                },
                setter: { componentName: 'StringSetter' },
            },
            {
                name: 'closable',
                title: {
                    label: '允许关闭当前标签页',
                    tip: 'closable | 动态增减标签页时是否允许关闭当前标签页'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'destroyOnHide',
                title: {
                    label: '销毁标签页内的DOM结构',
                    tip: 'destroyOnHide | 选项卡隐藏的时候是否销毁标签页内的DOM结构，优先级高于 Tabs 的 destroyOnHide 属性'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用'
                },
                setter: { componentName: 'BoolSetter' },
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack("Tabs", componentName),
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: ['Tabs']
            },
        },
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '',
        schema: {
            componentName,
            title: componentTitle,
            props: {
            },
        }
    },
];

export default {
  ...Metadata,
//   snippets
};
