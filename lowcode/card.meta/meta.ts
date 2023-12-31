import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "CardMeta"
const componentTitle: string = "卡片描述"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'avatar',
                title: {
                  label: '头像',
                  tip: 'avatar | 头像',
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'description',
                title: {
                  label: '描述',
                  tip: 'description | 描述',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'title',
                title: {
                  label: '标题',
                  tip: 'title | 标题',
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
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack("CardMeta"),
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
        component: {
            nestingRule: {
                parentWhitelist: (target: any, self: any) => {
                    if (target.componentName == 'Card' || (
                        target.componentName == 'Slot' && target.parent.componentName == 'Card'
                    )) {
                        return true
                    }
                    return false
                }
            }
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
    },
];

export default {
  ...Metadata,
  snippets
};
