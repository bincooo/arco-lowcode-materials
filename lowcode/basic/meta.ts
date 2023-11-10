import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack from '../pack'

const componentName: string = "Basic"
const fieldConfig: IPublicTypeFieldConfig[] = [
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
            }
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "文本",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '基础',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                  name: 'onClick',
                  template: "\nonClick(event, ${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                },
            ],
            style: true
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: "text",
        screenshot: require('./__screenshots__/text.png'),
        schema: {
            title: 'text',
            componentName,
            props: {
                tag: 'text',
                children: '我是文本'
            }
        }
    },
    {
        title: "div",
        screenshot: '',
        schema: {
            title: 'div',
            componentName,
            props: {
                tag: 'div',
                children: '我是DIV'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
