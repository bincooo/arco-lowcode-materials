import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents } from '../pack'

const componentName: string = "Icon"
const fieldConfig: IPublicTypeFieldConfig[] = [
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'tag',
                title: '标签名称',
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'spin',
                title: '旋转状态',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            }
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "图标",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '通用',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: "图标",
        screenshot: require('./__screenshots__/icon.png'),
        schema: {
            componentName,
            props: {
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
