import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Tag"
const componentTitle: string = "标签"



const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'children',
                title: {
                  label: '内容',
                  tip: 'children | 内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'checkable',
                title: {
                    label: '支持选中',
                    tip: 'checkable | 是否支持选中'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'checked',
                title: {
                    label: '选中',
                    tip: 'checked | 是否选中（受控模式）'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'closable',
                title: {
                    label: '可关闭标签',
                    tip: 'closable | 是否可关闭标签'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'defaultChecked',
                title: {
                    label: '默认选中',
                    tip: 'defaultChecked | 是否默认选中'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'visible',
                title: {
                    label: '标签显示隐藏',
                    tip: 'visible | 设置标签显示隐藏'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'color',
                title: {
                    label: '标签背景颜色',
                    tip: 'color | 设置标签背景颜色'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'ColorSetter' },
                ]
            },
            {
                name: 'size',
                title: {
                    label: '标签尺寸',
                    tip: 'size | 标签尺寸'
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'small', value: 'small' },
                            { title: 'default', value: 'default' },
                            { title: 'medium', value: 'medium' },
                            { title: 'large', value: 'large' },
                        ]
                    }
                },
            },
            {
                name: 'closeIcon',
                title: {
                    label: '自定义关闭图标',
                    tip: 'closeIcon | 自定义关闭图标'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'icon',
                title: {
                    label: '设置图标',
                    tip: 'icon | 设置图标'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'bordered',
                title: {
                    label: '显示边框',
                    tip: 'bordered | 	是否显示边框'
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
    npm: pack(componentName),
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onClose',
                    description: '关闭标签回调函数',
                    template: "\n\n  onClose(event, ${extParams}) {\n    // 关闭标签回调函数\n    console.log('onClose', event);\n  }\n",
                },
                {
                    name: 'onCheck',
                    description: '选中的回调',
                    template: "\n\n  onCheck(event, ${extParams}) {\n    // 选中的回调\n    console.log('onCheck', event);\n  }\n",
                },
            ],
            style: true,
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
                color: "gray",
                icon: {
                    type: "JSSlot",
                    value: [
                        {
                            title: "图标",
                            componentName: "Icon",
                            props: {
                                tag: "IconGithub"
                            },
                        }
                    ],
                },
                children: "Github"
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
