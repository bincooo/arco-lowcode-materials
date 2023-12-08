import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "FormProvider"
const componentTitle: string = "表单联动"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Form", "Provider"),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onFormSubmit',
                    description: '包裹的任意Form组件触发提交',
                    template: "\n\n  onFormSubmit(name, values, info, ${extParams}) {\n    // 包裹的任意 Form 组件触发提交时，该方法会被调用\n    console.log('onFormSubmit', values);\n  }\n",
                },
                {
                    name: 'onFormValuesChange',
                    description: '包裹的任意Form组件的值改变',
                    template: "\n\n  onFormValuesChange(name, changedValues, info, ${extParams}) {\n    // 包裹的任意 Form 组件的值改变时，该方法会被调用\n    console.log('onFormValuesChange', changedValues);\n  }\n",
                },
            ],
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'Form' ]
            }
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
