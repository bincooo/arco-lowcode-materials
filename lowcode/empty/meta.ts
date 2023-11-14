import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Empty"
const componentTitle: string = "空状态"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'icon',
                title: {
                    label: '显示图案',
                    tip: 'icon | 自定义显示图案'
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'imgSrc',
                title: {
                    label: '图片图标',
                    tip: 'imgSrc | 将图标替换为图片',
                },
                setter: { componentName: 'StringSetter' }
            },
            {
                name: 'description',
                title: {
                    label: '显示文案',
                    tip: 'description | 显示文案'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
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
            events: baseEvents,
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
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
