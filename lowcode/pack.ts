import { IPublicTypeNpmInfo, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
export default function(componentName: string, subName: string = ''): IPublicTypeNpmInfo {
    return {
        package: "arco-lowcode-materials",
        version: "0.1.0",
        exportName: componentName,
        main: "src/index.tsx",
        destructuring: true,
        subName
    };
};

export const baseEvents = [
    {
        name: 'onClick',
        template: "\nonClick(event, ${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
    },
]

export const baseProps: IPublicTypeFieldConfig = {
    title: '基础',
    display: 'block',
    type: 'group',
    items: [
        {
            name: 'className',
            title: {
                label: '节点类名',
                tip: 'className | 节点类名',
            },
            setter: [
                { componentName: 'StringSetter', condition: () => true },
                {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: { componentName: 'StringSetter' }
                    }
                }
            ],
        },
    ]
}