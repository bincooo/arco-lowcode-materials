import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "MenuItem"
const componentTitle: string = "子菜单"

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
                name: 'disabled',
                title: {
                    label: '菜单项禁止选中',
                    tip: 'disabled | 菜单项禁止选中',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'wrapper',
                title: {
                    label: '配置最外层标签',
                    tip: 'wrapper | 配置最外层标签，可以是 html 标签或是组件',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'renderItemInTooltip',
                title: {
                    label: '菜单折叠Tooltip节点',
                    tip: 'renderItemInTooltip | 菜单折叠时，指定在 Tooltip 中展示的菜单项节点',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Menu", "Item"),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            style: true,
        },
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: require('./__screenshots__/1.png'),
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
//   snippets
};
