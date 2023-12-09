import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'
import _props, { events } from '../input/base'
const componentName: string = "SearchInput"
const componentTitle: string = "搜索框"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'loading',
                title: {
                    label: '搜索时展示加载状态',
                    tip: 'loading | 搜索时展示加载状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'searchButton',
                title: {
                    label: '搜索按钮',
                    tip: 'searchButton | 搜索按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            ..._props,
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Input", "Search"),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                ...events,
                {
                    name: 'onSearch',
                    description: '点击搜索按钮的回调',
                    template: "\n\n  onSearch(value, ${extParams}) {\n    // 点击搜索按钮的回调\n    console.log('onSearch', value);\n  }\n",
                },
            ],
            style: true
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
