
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TextMeta: IPublicTypeComponentMetadata = {
  "componentName": "Text",
  "title": "Text",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "arco-lowcode-materials",
    "version": "0.1.0",
    "exportName": "Typography",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Text"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "className",
            "zh-CN": "className"
          }
        },
        "name": "className",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "@zh 文本类型"
          },
          "tip": "type | @zh 文本类型"
        },
        "name": "type",
        "description": "@zh 文本类型",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bold",
            "zh-CN": "@zh 粗体"
          },
          "tip": "bold | @zh 粗体"
        },
        "name": "bold",
        "description": "@zh 粗体",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "@zh 禁用状态"
          },
          "tip": "disabled | @zh 禁用状态"
        },
        "name": "disabled",
        "description": "@zh 禁用状态",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "mark",
            "zh-CN": "@zh 标记样式"
          },
          "tip": "mark | @zh 标记样式"
        },
        "name": "mark",
        "description": "@zh 标记样式",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "color",
                            "zh-CN": "color"
                          }
                        },
                        "name": "color",
                        "setter": {
                          "componentName": "StringSetter",
                          "isRequired": true,
                          "initialValue": ""
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "underline",
            "zh-CN": "@zh 下划线样式"
          },
          "tip": "underline | @zh 下划线样式"
        },
        "name": "underline",
        "description": "@zh 下划线样式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "delete",
            "zh-CN": "@zh 删除线样式"
          },
          "tip": "delete | @zh 删除线样式"
        },
        "name": "delete",
        "description": "@zh 删除线样式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "code",
            "zh-CN": "@zh 代码块样式"
          },
          "tip": "code | @zh 代码块样式"
        },
        "name": "code",
        "description": "@zh 代码块样式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultChecked",
            "zh-CN": "defaultChecked"
          }
        },
        "name": "defaultChecked",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultValue",
            "zh-CN": "defaultValue"
          }
        },
        "name": "defaultValue",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "suppressContentEditableWarning",
            "zh-CN": "suppressContentEditableWarning"
          }
        },
        "name": "suppressContentEditableWarning",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "suppressHydrationWarning",
            "zh-CN": "suppressHydrationWarning"
          }
        },
        "name": "suppressHydrationWarning",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "accessKey",
            "zh-CN": "accessKey"
          }
        },
        "name": "accessKey",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoFocus",
            "zh-CN": "autoFocus"
          }
        },
        "name": "autoFocus",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "contentEditable",
            "zh-CN": "contentEditable"
          }
        },
        "name": "contentEditable",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    },
                    {
                      "label": "plaintext-only",
                      "value": "plaintext-only"
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    },
                    {
                      "label": "plaintext-only",
                      "value": "plaintext-only"
                    }
                  ]
                },
                "initialValue": "true"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "contextMenu",
            "zh-CN": "contextMenu"
          }
        },
        "name": "contextMenu",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dir",
            "zh-CN": "dir"
          }
        },
        "name": "dir",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "draggable",
            "zh-CN": "draggable"
          }
        },
        "name": "draggable",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ]
                },
                "initialValue": "true"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hidden",
            "zh-CN": "hidden"
          }
        },
        "name": "hidden",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lang",
            "zh-CN": "lang"
          }
        },
        "name": "lang",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "nonce",
            "zh-CN": "nonce"
          }
        },
        "name": "nonce",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "placeholder",
            "zh-CN": "placeholder"
          }
        },
        "name": "placeholder",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "slot",
            "zh-CN": "slot"
          }
        },
        "name": "slot",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "spellCheck",
            "zh-CN": "spellCheck"
          }
        },
        "name": "spellCheck",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ]
                },
                "initialValue": "true"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tabIndex",
            "zh-CN": "tabIndex"
          }
        },
        "name": "tabIndex",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "translate",
            "zh-CN": "translate"
          }
        },
        "name": "translate",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "yes",
                "value": "yes"
              },
              {
                "label": "no",
                "value": "no"
              }
            ],
            "options": [
              {
                "label": "yes",
                "value": "yes"
              },
              {
                "label": "no",
                "value": "no"
              }
            ]
          },
          "initialValue": "yes"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "radioGroup",
            "zh-CN": "radioGroup"
          }
        },
        "name": "radioGroup",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "role",
            "zh-CN": "role"
          }
        },
        "name": "role",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "alert",
                      "value": "alert"
                    },
                    {
                      "label": "alertdialog",
                      "value": "alertdialog"
                    },
                    {
                      "label": "application",
                      "value": "application"
                    },
                    {
                      "label": "article",
                      "value": "article"
                    },
                    {
                      "label": "banner",
                      "value": "banner"
                    },
                    {
                      "label": "button",
                      "value": "button"
                    },
                    {
                      "label": "cell",
                      "value": "cell"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "columnheader",
                      "value": "columnheader"
                    },
                    {
                      "label": "combobox",
                      "value": "combobox"
                    },
                    {
                      "label": "complementary",
                      "value": "complementary"
                    },
                    {
                      "label": "contentinfo",
                      "value": "contentinfo"
                    },
                    {
                      "label": "definition",
                      "value": "definition"
                    },
                    {
                      "label": "dialog",
                      "value": "dialog"
                    },
                    {
                      "label": "directory",
                      "value": "directory"
                    },
                    {
                      "label": "document",
                      "value": "document"
                    },
                    {
                      "label": "feed",
                      "value": "feed"
                    },
                    {
                      "label": "figure",
                      "value": "figure"
                    },
                    {
                      "label": "form",
                      "value": "form"
                    },
                    {
                      "label": "grid",
                      "value": "grid"
                    },
                    {
                      "label": "gridcell",
                      "value": "gridcell"
                    },
                    {
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "heading",
                      "value": "heading"
                    },
                    {
                      "label": "img",
                      "value": "img"
                    },
                    {
                      "label": "link",
                      "value": "link"
                    },
                    {
                      "label": "list",
                      "value": "list"
                    },
                    {
                      "label": "listbox",
                      "value": "listbox"
                    },
                    {
                      "label": "listitem",
                      "value": "listitem"
                    },
                    {
                      "label": "log",
                      "value": "log"
                    },
                    {
                      "label": "main",
                      "value": "main"
                    },
                    {
                      "label": "marquee",
                      "value": "marquee"
                    },
                    {
                      "label": "math",
                      "value": "math"
                    },
                    {
                      "label": "menu",
                      "value": "menu"
                    },
                    {
                      "label": "menubar",
                      "value": "menubar"
                    },
                    {
                      "label": "menuitem",
                      "value": "menuitem"
                    },
                    {
                      "label": "menuitemcheckbox",
                      "value": "menuitemcheckbox"
                    },
                    {
                      "label": "menuitemradio",
                      "value": "menuitemradio"
                    },
                    {
                      "label": "navigation",
                      "value": "navigation"
                    },
                    {
                      "label": "none",
                      "value": "none"
                    },
                    {
                      "label": "note",
                      "value": "note"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "presentation",
                      "value": "presentation"
                    },
                    {
                      "label": "progressbar",
                      "value": "progressbar"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "radiogroup",
                      "value": "radiogroup"
                    },
                    {
                      "label": "region",
                      "value": "region"
                    },
                    {
                      "label": "row",
                      "value": "row"
                    },
                    {
                      "label": "rowgroup",
                      "value": "rowgroup"
                    },
                    {
                      "label": "rowheader",
                      "value": "rowheader"
                    },
                    {
                      "label": "scrollbar",
                      "value": "scrollbar"
                    },
                    {
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "searchbox",
                      "value": "searchbox"
                    },
                    {
                      "label": "separator",
                      "value": "separator"
                    },
                    {
                      "label": "slider",
                      "value": "slider"
                    },
                    {
                      "label": "spinbutton",
                      "value": "spinbutton"
                    },
                    {
                      "label": "status",
                      "value": "status"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "tab",
                      "value": "tab"
                    },
                    {
                      "label": "table",
                      "value": "table"
                    },
                    {
                      "label": "tablist",
                      "value": "tablist"
                    },
                    {
                      "label": "tabpanel",
                      "value": "tabpanel"
                    },
                    {
                      "label": "term",
                      "value": "term"
                    },
                    {
                      "label": "textbox",
                      "value": "textbox"
                    },
                    {
                      "label": "timer",
                      "value": "timer"
                    },
                    {
                      "label": "toolbar",
                      "value": "toolbar"
                    },
                    {
                      "label": "tooltip",
                      "value": "tooltip"
                    },
                    {
                      "label": "tree",
                      "value": "tree"
                    },
                    {
                      "label": "treegrid",
                      "value": "treegrid"
                    },
                    {
                      "label": "treeitem",
                      "value": "treeitem"
                    }
                  ],
                  "options": [
                    {
                      "label": "alert",
                      "value": "alert"
                    },
                    {
                      "label": "alertdialog",
                      "value": "alertdialog"
                    },
                    {
                      "label": "application",
                      "value": "application"
                    },
                    {
                      "label": "article",
                      "value": "article"
                    },
                    {
                      "label": "banner",
                      "value": "banner"
                    },
                    {
                      "label": "button",
                      "value": "button"
                    },
                    {
                      "label": "cell",
                      "value": "cell"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "columnheader",
                      "value": "columnheader"
                    },
                    {
                      "label": "combobox",
                      "value": "combobox"
                    },
                    {
                      "label": "complementary",
                      "value": "complementary"
                    },
                    {
                      "label": "contentinfo",
                      "value": "contentinfo"
                    },
                    {
                      "label": "definition",
                      "value": "definition"
                    },
                    {
                      "label": "dialog",
                      "value": "dialog"
                    },
                    {
                      "label": "directory",
                      "value": "directory"
                    },
                    {
                      "label": "document",
                      "value": "document"
                    },
                    {
                      "label": "feed",
                      "value": "feed"
                    },
                    {
                      "label": "figure",
                      "value": "figure"
                    },
                    {
                      "label": "form",
                      "value": "form"
                    },
                    {
                      "label": "grid",
                      "value": "grid"
                    },
                    {
                      "label": "gridcell",
                      "value": "gridcell"
                    },
                    {
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "heading",
                      "value": "heading"
                    },
                    {
                      "label": "img",
                      "value": "img"
                    },
                    {
                      "label": "link",
                      "value": "link"
                    },
                    {
                      "label": "list",
                      "value": "list"
                    },
                    {
                      "label": "listbox",
                      "value": "listbox"
                    },
                    {
                      "label": "listitem",
                      "value": "listitem"
                    },
                    {
                      "label": "log",
                      "value": "log"
                    },
                    {
                      "label": "main",
                      "value": "main"
                    },
                    {
                      "label": "marquee",
                      "value": "marquee"
                    },
                    {
                      "label": "math",
                      "value": "math"
                    },
                    {
                      "label": "menu",
                      "value": "menu"
                    },
                    {
                      "label": "menubar",
                      "value": "menubar"
                    },
                    {
                      "label": "menuitem",
                      "value": "menuitem"
                    },
                    {
                      "label": "menuitemcheckbox",
                      "value": "menuitemcheckbox"
                    },
                    {
                      "label": "menuitemradio",
                      "value": "menuitemradio"
                    },
                    {
                      "label": "navigation",
                      "value": "navigation"
                    },
                    {
                      "label": "none",
                      "value": "none"
                    },
                    {
                      "label": "note",
                      "value": "note"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "presentation",
                      "value": "presentation"
                    },
                    {
                      "label": "progressbar",
                      "value": "progressbar"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "radiogroup",
                      "value": "radiogroup"
                    },
                    {
                      "label": "region",
                      "value": "region"
                    },
                    {
                      "label": "row",
                      "value": "row"
                    },
                    {
                      "label": "rowgroup",
                      "value": "rowgroup"
                    },
                    {
                      "label": "rowheader",
                      "value": "rowheader"
                    },
                    {
                      "label": "scrollbar",
                      "value": "scrollbar"
                    },
                    {
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "searchbox",
                      "value": "searchbox"
                    },
                    {
                      "label": "separator",
                      "value": "separator"
                    },
                    {
                      "label": "slider",
                      "value": "slider"
                    },
                    {
                      "label": "spinbutton",
                      "value": "spinbutton"
                    },
                    {
                      "label": "status",
                      "value": "status"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "tab",
                      "value": "tab"
                    },
                    {
                      "label": "table",
                      "value": "table"
                    },
                    {
                      "label": "tablist",
                      "value": "tablist"
                    },
                    {
                      "label": "tabpanel",
                      "value": "tabpanel"
                    },
                    {
                      "label": "term",
                      "value": "term"
                    },
                    {
                      "label": "textbox",
                      "value": "textbox"
                    },
                    {
                      "label": "timer",
                      "value": "timer"
                    },
                    {
                      "label": "toolbar",
                      "value": "toolbar"
                    },
                    {
                      "label": "tooltip",
                      "value": "tooltip"
                    },
                    {
                      "label": "tree",
                      "value": "tree"
                    },
                    {
                      "label": "treegrid",
                      "value": "treegrid"
                    },
                    {
                      "label": "treeitem",
                      "value": "treeitem"
                    }
                  ]
                },
                "initialValue": "alert"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "about",
            "zh-CN": "about"
          }
        },
        "name": "about",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "content"
          }
        },
        "name": "content",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "datatype",
            "zh-CN": "datatype"
          }
        },
        "name": "datatype",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inlist",
            "zh-CN": "inlist"
          }
        },
        "name": "inlist",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefix",
            "zh-CN": "prefix"
          }
        },
        "name": "prefix",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "property",
            "zh-CN": "property"
          }
        },
        "name": "property",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rel",
            "zh-CN": "rel"
          }
        },
        "name": "rel",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "resource",
            "zh-CN": "resource"
          }
        },
        "name": "resource",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rev",
            "zh-CN": "rev"
          }
        },
        "name": "rev",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "typeof",
            "zh-CN": "typeof"
          }
        },
        "name": "typeof",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "vocab",
            "zh-CN": "vocab"
          }
        },
        "name": "vocab",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoCapitalize",
            "zh-CN": "autoCapitalize"
          }
        },
        "name": "autoCapitalize",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoCorrect",
            "zh-CN": "autoCorrect"
          }
        },
        "name": "autoCorrect",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoSave",
            "zh-CN": "autoSave"
          }
        },
        "name": "autoSave",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemProp",
            "zh-CN": "itemProp"
          }
        },
        "name": "itemProp",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemScope",
            "zh-CN": "itemScope"
          }
        },
        "name": "itemScope",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemType",
            "zh-CN": "itemType"
          }
        },
        "name": "itemType",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemID",
            "zh-CN": "itemID"
          }
        },
        "name": "itemID",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemRef",
            "zh-CN": "itemRef"
          }
        },
        "name": "itemRef",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "results",
            "zh-CN": "results"
          }
        },
        "name": "results",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "security",
            "zh-CN": "security"
          }
        },
        "name": "security",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "unselectable",
            "zh-CN": "unselectable"
          }
        },
        "name": "unselectable",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "on",
                "value": "on"
              },
              {
                "label": "off",
                "value": "off"
              }
            ],
            "options": [
              {
                "label": "on",
                "value": "on"
              },
              {
                "label": "off",
                "value": "off"
              }
            ]
          },
          "initialValue": "on"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inputMode",
            "zh-CN": "Hints at t"
          },
          "tip": "inputMode | Hints at the type of data that might be entered by the user while editing the element or its contents"
        },
        "name": "inputMode",
        "description": "Hints at the type of data that might be entered by the user while editing the element or its contents",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "none",
                "value": "none"
              },
              {
                "label": "search",
                "value": "search"
              },
              {
                "label": "text",
                "value": "text"
              },
              {
                "label": "tel",
                "value": "tel"
              },
              {
                "label": "url",
                "value": "url"
              },
              {
                "label": "email",
                "value": "email"
              },
              {
                "label": "numeric",
                "value": "numeric"
              },
              {
                "label": "decimal",
                "value": "decimal"
              }
            ],
            "options": [
              {
                "label": "none",
                "value": "none"
              },
              {
                "label": "search",
                "value": "search"
              },
              {
                "label": "text",
                "value": "text"
              },
              {
                "label": "tel",
                "value": "tel"
              },
              {
                "label": "url",
                "value": "url"
              },
              {
                "label": "email",
                "value": "email"
              },
              {
                "label": "numeric",
                "value": "numeric"
              },
              {
                "label": "decimal",
                "value": "decimal"
              }
            ]
          },
          "initialValue": "none"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "is",
            "zh-CN": "Specify th"
          },
          "tip": "is | Specify that a standard HTML element should behave like a defined custom built-in element"
        },
        "name": "is",
        "description": "Specify that a standard HTML element should behave like a defined custom built-in element",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dangerouslySetInnerHTML",
            "zh-CN": "dangerouslySetInnerHTML"
          }
        },
        "name": "dangerouslySetInnerHTML",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "__html",
                      "zh-CN": "__html"
                    }
                  },
                  "name": "__html",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        },
                        {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "extraSetter": {
                                "componentName": "MixedSetter",
                                "isRequired": false,
                                "props": {}
                              }
                            }
                          },
                          "isRequired": false,
                          "initialValue": {}
                        }
                      ]
                    },
                    "isRequired": true
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCopy",
            "zh-CN": "onCopy"
          }
        },
        "name": "onCopy",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCopyCapture",
            "zh-CN": "onCopyCapture"
          }
        },
        "name": "onCopyCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCut",
            "zh-CN": "onCut"
          }
        },
        "name": "onCut",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCutCapture",
            "zh-CN": "onCutCapture"
          }
        },
        "name": "onCutCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPaste",
            "zh-CN": "onPaste"
          }
        },
        "name": "onPaste",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPasteCapture",
            "zh-CN": "onPasteCapture"
          }
        },
        "name": "onPasteCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionEnd",
            "zh-CN": "onCompositionEnd"
          }
        },
        "name": "onCompositionEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionEndCapture",
            "zh-CN": "onCompositionEndCapture"
          }
        },
        "name": "onCompositionEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionStart",
            "zh-CN": "onCompositionStart"
          }
        },
        "name": "onCompositionStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionStartCapture",
            "zh-CN": "onCompositionStartCapture"
          }
        },
        "name": "onCompositionStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionUpdate",
            "zh-CN": "onCompositionUpdate"
          }
        },
        "name": "onCompositionUpdate",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionUpdateCapture",
            "zh-CN": "onCompositionUpdateCapture"
          }
        },
        "name": "onCompositionUpdateCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onFocus",
            "zh-CN": "onFocus"
          }
        },
        "name": "onFocus",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onFocusCapture",
            "zh-CN": "onFocusCapture"
          }
        },
        "name": "onFocusCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBlur",
            "zh-CN": "onBlur"
          }
        },
        "name": "onBlur",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBlurCapture",
            "zh-CN": "onBlurCapture"
          }
        },
        "name": "onBlurCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChange",
            "zh-CN": "onChange"
          }
        },
        "name": "onChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChangeCapture",
            "zh-CN": "onChangeCapture"
          }
        },
        "name": "onChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBeforeInput",
            "zh-CN": "onBeforeInput"
          }
        },
        "name": "onBeforeInput",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBeforeInputCapture",
            "zh-CN": "onBeforeInputCapture"
          }
        },
        "name": "onBeforeInputCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInput",
            "zh-CN": "onInput"
          }
        },
        "name": "onInput",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInputCapture",
            "zh-CN": "onInputCapture"
          }
        },
        "name": "onInputCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onReset",
            "zh-CN": "onReset"
          }
        },
        "name": "onReset",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onResetCapture",
            "zh-CN": "onResetCapture"
          }
        },
        "name": "onResetCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSubmit",
            "zh-CN": "onSubmit"
          }
        },
        "name": "onSubmit",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSubmitCapture",
            "zh-CN": "onSubmitCapture"
          }
        },
        "name": "onSubmitCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInvalid",
            "zh-CN": "onInvalid"
          }
        },
        "name": "onInvalid",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInvalidCapture",
            "zh-CN": "onInvalidCapture"
          }
        },
        "name": "onInvalidCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoad",
            "zh-CN": "onLoad"
          }
        },
        "name": "onLoad",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadCapture",
            "zh-CN": "onLoadCapture"
          }
        },
        "name": "onLoadCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onError",
            "zh-CN": "onError"
          }
        },
        "name": "onError",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onErrorCapture",
            "zh-CN": "onErrorCapture"
          }
        },
        "name": "onErrorCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyDown",
            "zh-CN": "onKeyDown"
          }
        },
        "name": "onKeyDown",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyDownCapture",
            "zh-CN": "onKeyDownCapture"
          }
        },
        "name": "onKeyDownCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyPress",
            "zh-CN": "@deprecate"
          },
          "tip": "onKeyPress | @deprecated"
        },
        "name": "onKeyPress",
        "description": "@deprecated",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyPressCapture",
            "zh-CN": "@deprecate"
          },
          "tip": "onKeyPressCapture | @deprecated"
        },
        "name": "onKeyPressCapture",
        "description": "@deprecated",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyUp",
            "zh-CN": "onKeyUp"
          }
        },
        "name": "onKeyUp",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyUpCapture",
            "zh-CN": "onKeyUpCapture"
          }
        },
        "name": "onKeyUpCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAbort",
            "zh-CN": "onAbort"
          }
        },
        "name": "onAbort",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAbortCapture",
            "zh-CN": "onAbortCapture"
          }
        },
        "name": "onAbortCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlay",
            "zh-CN": "onCanPlay"
          }
        },
        "name": "onCanPlay",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlayCapture",
            "zh-CN": "onCanPlayCapture"
          }
        },
        "name": "onCanPlayCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlayThrough",
            "zh-CN": "onCanPlayThrough"
          }
        },
        "name": "onCanPlayThrough",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlayThroughCapture",
            "zh-CN": "onCanPlayThroughCapture"
          }
        },
        "name": "onCanPlayThroughCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDurationChange",
            "zh-CN": "onDurationChange"
          }
        },
        "name": "onDurationChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDurationChangeCapture",
            "zh-CN": "onDurationChangeCapture"
          }
        },
        "name": "onDurationChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEmptied",
            "zh-CN": "onEmptied"
          }
        },
        "name": "onEmptied",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEmptiedCapture",
            "zh-CN": "onEmptiedCapture"
          }
        },
        "name": "onEmptiedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEncrypted",
            "zh-CN": "onEncrypted"
          }
        },
        "name": "onEncrypted",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEncryptedCapture",
            "zh-CN": "onEncryptedCapture"
          }
        },
        "name": "onEncryptedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEnded",
            "zh-CN": "onEnded"
          }
        },
        "name": "onEnded",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEndedCapture",
            "zh-CN": "onEndedCapture"
          }
        },
        "name": "onEndedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedData",
            "zh-CN": "onLoadedData"
          }
        },
        "name": "onLoadedData",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedDataCapture",
            "zh-CN": "onLoadedDataCapture"
          }
        },
        "name": "onLoadedDataCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedMetadata",
            "zh-CN": "onLoadedMetadata"
          }
        },
        "name": "onLoadedMetadata",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedMetadataCapture",
            "zh-CN": "onLoadedMetadataCapture"
          }
        },
        "name": "onLoadedMetadataCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadStart",
            "zh-CN": "onLoadStart"
          }
        },
        "name": "onLoadStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadStartCapture",
            "zh-CN": "onLoadStartCapture"
          }
        },
        "name": "onLoadStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPause",
            "zh-CN": "onPause"
          }
        },
        "name": "onPause",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPauseCapture",
            "zh-CN": "onPauseCapture"
          }
        },
        "name": "onPauseCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlay",
            "zh-CN": "onPlay"
          }
        },
        "name": "onPlay",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlayCapture",
            "zh-CN": "onPlayCapture"
          }
        },
        "name": "onPlayCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlaying",
            "zh-CN": "onPlaying"
          }
        },
        "name": "onPlaying",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlayingCapture",
            "zh-CN": "onPlayingCapture"
          }
        },
        "name": "onPlayingCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onProgress",
            "zh-CN": "onProgress"
          }
        },
        "name": "onProgress",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onProgressCapture",
            "zh-CN": "onProgressCapture"
          }
        },
        "name": "onProgressCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onRateChange",
            "zh-CN": "onRateChange"
          }
        },
        "name": "onRateChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onRateChangeCapture",
            "zh-CN": "onRateChangeCapture"
          }
        },
        "name": "onRateChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onResize",
            "zh-CN": "onResize"
          }
        },
        "name": "onResize",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onResizeCapture",
            "zh-CN": "onResizeCapture"
          }
        },
        "name": "onResizeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeeked",
            "zh-CN": "onSeeked"
          }
        },
        "name": "onSeeked",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeekedCapture",
            "zh-CN": "onSeekedCapture"
          }
        },
        "name": "onSeekedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeeking",
            "zh-CN": "onSeeking"
          }
        },
        "name": "onSeeking",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeekingCapture",
            "zh-CN": "onSeekingCapture"
          }
        },
        "name": "onSeekingCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onStalled",
            "zh-CN": "onStalled"
          }
        },
        "name": "onStalled",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onStalledCapture",
            "zh-CN": "onStalledCapture"
          }
        },
        "name": "onStalledCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSuspend",
            "zh-CN": "onSuspend"
          }
        },
        "name": "onSuspend",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSuspendCapture",
            "zh-CN": "onSuspendCapture"
          }
        },
        "name": "onSuspendCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTimeUpdate",
            "zh-CN": "onTimeUpdate"
          }
        },
        "name": "onTimeUpdate",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTimeUpdateCapture",
            "zh-CN": "onTimeUpdateCapture"
          }
        },
        "name": "onTimeUpdateCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onVolumeChange",
            "zh-CN": "onVolumeChange"
          }
        },
        "name": "onVolumeChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onVolumeChangeCapture",
            "zh-CN": "onVolumeChangeCapture"
          }
        },
        "name": "onVolumeChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWaiting",
            "zh-CN": "onWaiting"
          }
        },
        "name": "onWaiting",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWaitingCapture",
            "zh-CN": "onWaitingCapture"
          }
        },
        "name": "onWaitingCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAuxClick",
            "zh-CN": "onAuxClick"
          }
        },
        "name": "onAuxClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAuxClickCapture",
            "zh-CN": "onAuxClickCapture"
          }
        },
        "name": "onAuxClickCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "onClick"
          }
        },
        "name": "onClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClickCapture",
            "zh-CN": "onClickCapture"
          }
        },
        "name": "onClickCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onContextMenu",
            "zh-CN": "onContextMenu"
          }
        },
        "name": "onContextMenu",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onContextMenuCapture",
            "zh-CN": "onContextMenuCapture"
          }
        },
        "name": "onContextMenuCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDoubleClick",
            "zh-CN": "onDoubleClick"
          }
        },
        "name": "onDoubleClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDoubleClickCapture",
            "zh-CN": "onDoubleClickCapture"
          }
        },
        "name": "onDoubleClickCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDrag",
            "zh-CN": "onDrag"
          }
        },
        "name": "onDrag",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragCapture",
            "zh-CN": "onDragCapture"
          }
        },
        "name": "onDragCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEnd",
            "zh-CN": "onDragEnd"
          }
        },
        "name": "onDragEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEndCapture",
            "zh-CN": "onDragEndCapture"
          }
        },
        "name": "onDragEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEnter",
            "zh-CN": "onDragEnter"
          }
        },
        "name": "onDragEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEnterCapture",
            "zh-CN": "onDragEnterCapture"
          }
        },
        "name": "onDragEnterCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragExit",
            "zh-CN": "onDragExit"
          }
        },
        "name": "onDragExit",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragExitCapture",
            "zh-CN": "onDragExitCapture"
          }
        },
        "name": "onDragExitCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragLeave",
            "zh-CN": "onDragLeave"
          }
        },
        "name": "onDragLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragLeaveCapture",
            "zh-CN": "onDragLeaveCapture"
          }
        },
        "name": "onDragLeaveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragOver",
            "zh-CN": "onDragOver"
          }
        },
        "name": "onDragOver",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragOverCapture",
            "zh-CN": "onDragOverCapture"
          }
        },
        "name": "onDragOverCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragStart",
            "zh-CN": "onDragStart"
          }
        },
        "name": "onDragStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragStartCapture",
            "zh-CN": "onDragStartCapture"
          }
        },
        "name": "onDragStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDrop",
            "zh-CN": "onDrop"
          }
        },
        "name": "onDrop",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDropCapture",
            "zh-CN": "onDropCapture"
          }
        },
        "name": "onDropCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseDown",
            "zh-CN": "onMouseDown"
          }
        },
        "name": "onMouseDown",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseDownCapture",
            "zh-CN": "onMouseDownCapture"
          }
        },
        "name": "onMouseDownCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseEnter",
            "zh-CN": "onMouseEnter"
          }
        },
        "name": "onMouseEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseLeave",
            "zh-CN": "onMouseLeave"
          }
        },
        "name": "onMouseLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseMove",
            "zh-CN": "onMouseMove"
          }
        },
        "name": "onMouseMove",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseMoveCapture",
            "zh-CN": "onMouseMoveCapture"
          }
        },
        "name": "onMouseMoveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOut",
            "zh-CN": "onMouseOut"
          }
        },
        "name": "onMouseOut",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOutCapture",
            "zh-CN": "onMouseOutCapture"
          }
        },
        "name": "onMouseOutCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOver",
            "zh-CN": "onMouseOver"
          }
        },
        "name": "onMouseOver",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOverCapture",
            "zh-CN": "onMouseOverCapture"
          }
        },
        "name": "onMouseOverCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseUp",
            "zh-CN": "onMouseUp"
          }
        },
        "name": "onMouseUp",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseUpCapture",
            "zh-CN": "onMouseUpCapture"
          }
        },
        "name": "onMouseUpCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSelect",
            "zh-CN": "onSelect"
          }
        },
        "name": "onSelect",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSelectCapture",
            "zh-CN": "onSelectCapture"
          }
        },
        "name": "onSelectCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchCancel",
            "zh-CN": "onTouchCancel"
          }
        },
        "name": "onTouchCancel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchCancelCapture",
            "zh-CN": "onTouchCancelCapture"
          }
        },
        "name": "onTouchCancelCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchEnd",
            "zh-CN": "onTouchEnd"
          }
        },
        "name": "onTouchEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchEndCapture",
            "zh-CN": "onTouchEndCapture"
          }
        },
        "name": "onTouchEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchMove",
            "zh-CN": "onTouchMove"
          }
        },
        "name": "onTouchMove",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchMoveCapture",
            "zh-CN": "onTouchMoveCapture"
          }
        },
        "name": "onTouchMoveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchStart",
            "zh-CN": "onTouchStart"
          }
        },
        "name": "onTouchStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchStartCapture",
            "zh-CN": "onTouchStartCapture"
          }
        },
        "name": "onTouchStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerDown",
            "zh-CN": "onPointerDown"
          }
        },
        "name": "onPointerDown",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerDownCapture",
            "zh-CN": "onPointerDownCapture"
          }
        },
        "name": "onPointerDownCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerMove",
            "zh-CN": "onPointerMove"
          }
        },
        "name": "onPointerMove",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerMoveCapture",
            "zh-CN": "onPointerMoveCapture"
          }
        },
        "name": "onPointerMoveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerUp",
            "zh-CN": "onPointerUp"
          }
        },
        "name": "onPointerUp",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerUpCapture",
            "zh-CN": "onPointerUpCapture"
          }
        },
        "name": "onPointerUpCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerCancel",
            "zh-CN": "onPointerCancel"
          }
        },
        "name": "onPointerCancel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerCancelCapture",
            "zh-CN": "onPointerCancelCapture"
          }
        },
        "name": "onPointerCancelCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerEnter",
            "zh-CN": "onPointerEnter"
          }
        },
        "name": "onPointerEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerEnterCapture",
            "zh-CN": "onPointerEnterCapture"
          }
        },
        "name": "onPointerEnterCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerLeave",
            "zh-CN": "onPointerLeave"
          }
        },
        "name": "onPointerLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerLeaveCapture",
            "zh-CN": "onPointerLeaveCapture"
          }
        },
        "name": "onPointerLeaveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOver",
            "zh-CN": "onPointerOver"
          }
        },
        "name": "onPointerOver",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOverCapture",
            "zh-CN": "onPointerOverCapture"
          }
        },
        "name": "onPointerOverCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOut",
            "zh-CN": "onPointerOut"
          }
        },
        "name": "onPointerOut",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOutCapture",
            "zh-CN": "onPointerOutCapture"
          }
        },
        "name": "onPointerOutCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onGotPointerCapture",
            "zh-CN": "onGotPointerCapture"
          }
        },
        "name": "onGotPointerCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onGotPointerCaptureCapture",
            "zh-CN": "onGotPointerCaptureCapture"
          }
        },
        "name": "onGotPointerCaptureCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLostPointerCapture",
            "zh-CN": "onLostPointerCapture"
          }
        },
        "name": "onLostPointerCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLostPointerCaptureCapture",
            "zh-CN": "onLostPointerCaptureCapture"
          }
        },
        "name": "onLostPointerCaptureCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onScroll",
            "zh-CN": "onScroll"
          }
        },
        "name": "onScroll",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onScrollCapture",
            "zh-CN": "onScrollCapture"
          }
        },
        "name": "onScrollCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWheel",
            "zh-CN": "onWheel"
          }
        },
        "name": "onWheel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWheelCapture",
            "zh-CN": "onWheelCapture"
          }
        },
        "name": "onWheelCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationStart",
            "zh-CN": "onAnimationStart"
          }
        },
        "name": "onAnimationStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationStartCapture",
            "zh-CN": "onAnimationStartCapture"
          }
        },
        "name": "onAnimationStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationEnd",
            "zh-CN": "onAnimationEnd"
          }
        },
        "name": "onAnimationEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationEndCapture",
            "zh-CN": "onAnimationEndCapture"
          }
        },
        "name": "onAnimationEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationIteration",
            "zh-CN": "onAnimationIteration"
          }
        },
        "name": "onAnimationIteration",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationIterationCapture",
            "zh-CN": "onAnimationIterationCapture"
          }
        },
        "name": "onAnimationIterationCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTransitionEnd",
            "zh-CN": "onTransitionEnd"
          }
        },
        "name": "onTransitionEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTransitionEndCapture",
            "zh-CN": "onTransitionEndCapture"
          }
        },
        "name": "onTransitionEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "copyable",
            "zh-CN": "@zh 开启复制功能"
          },
          "tip": "copyable | @zh 开启复制功能"
        },
        "name": "copyable",
        "description": "@zh 开启复制功能",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "text",
                            "zh-CN": "text"
                          }
                        },
                        "name": "text",
                        "setter": {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onCopy",
                            "zh-CN": "onCopy"
                          }
                        },
                        "name": "onCopy",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "icon",
                            "zh-CN": "icon"
                          }
                        },
                        "name": "icon",
                        "setter": {
                          "componentName": "SlotSetter",
                          "props": {
                            "mode": "node"
                          },
                          "isRequired": false,
                          "initialValue": {
                            "type": "JSSlot",
                            "value": []
                          }
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "tooltips",
                            "zh-CN": "tooltips"
                          }
                        },
                        "name": "tooltips",
                        "setter": {
                          "componentName": "MixedSetter",
                          "props": {}
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "editable",
            "zh-CN": "@zh 开启可编辑功"
          },
          "tip": "editable | @zh 开启可编辑功能"
        },
        "name": "editable",
        "description": "@zh 开启可编辑功能",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "editing",
                            "zh-CN": "editing"
                          }
                        },
                        "name": "editing",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
                          "initialValue": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onStart",
                            "zh-CN": "onStart"
                          }
                        },
                        "name": "onStart",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onChange",
                            "zh-CN": "onChange"
                          }
                        },
                        "name": "onChange",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onEnd",
                            "zh-CN": "onEnd"
                          }
                        },
                        "name": "onEnd",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ellipsis",
            "zh-CN": "@zh 自动溢出省略"
          },
          "tip": "ellipsis | @zh 自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)"
        },
        "name": "ellipsis",
        "description": "@zh 自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "cssEllipsis",
                            "zh-CN": "cssEllipsis"
                          }
                        },
                        "name": "cssEllipsis",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
                          "initialValue": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "rows",
                            "zh-CN": "rows"
                          }
                        },
                        "name": "rows",
                        "setter": {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "expandable",
                            "zh-CN": "expandable"
                          }
                        },
                        "name": "expandable",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
                          "initialValue": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "ellipsisStr",
                            "zh-CN": "ellipsisStr"
                          }
                        },
                        "name": "ellipsisStr",
                        "setter": {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "suffix",
                            "zh-CN": "suffix"
                          }
                        },
                        "name": "suffix",
                        "setter": {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "expandNodes",
                            "zh-CN": "expandNodes"
                          }
                        },
                        "name": "expandNodes",
                        "setter": {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "SlotSetter",
                              "props": {
                                "mode": "node"
                              },
                              "isRequired": false,
                              "initialValue": {
                                "type": "JSSlot",
                                "value": []
                              }
                            }
                          },
                          "initialValue": []
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onEllipsis",
                            "zh-CN": "onEllipsis"
                          }
                        },
                        "name": "onEllipsis",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onExpand",
                            "zh-CN": "onExpand"
                          }
                        },
                        "name": "onExpand",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "showTooltip",
                            "zh-CN": "showTooltip"
                          }
                        },
                        "name": "showTooltip",
                        "setter": {
                          "componentName": "MixedSetter",
                          "props": {
                            "setters": [
                              {
                                "componentName": "BoolSetter",
                                "isRequired": false,
                                "initialValue": false
                              },
                              {
                                "componentName": "ObjectSetter",
                                "props": {
                                  "config": {
                                    "items": [
                                      {
                                        "title": {
                                          "label": {
                                            "type": "i18n",
                                            "en-US": "type",
                                            "zh-CN": "type"
                                          }
                                        },
                                        "name": "type",
                                        "setter": {
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "tooltip",
                                                "value": "tooltip"
                                              },
                                              {
                                                "label": "popover",
                                                "value": "popover"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "tooltip",
                                                "value": "tooltip"
                                              },
                                              {
                                                "label": "popover",
                                                "value": "popover"
                                              }
                                            ]
                                          },
                                          "initialValue": "tooltip"
                                        }
                                      },
                                      {
                                        "title": {
                                          "label": {
                                            "type": "i18n",
                                            "en-US": "props",
                                            "zh-CN": "props"
                                          }
                                        },
                                        "name": "props",
                                        "setter": {
                                          "componentName": "ObjectSetter",
                                          "props": {
                                            "config": {
                                              "extraSetter": {
                                                "componentName": "MixedSetter",
                                                "isRequired": false,
                                                "props": {}
                                              }
                                            }
                                          },
                                          "isRequired": false,
                                          "initialValue": {}
                                        }
                                      }
                                    ],
                                    "extraSetter": {
                                      "componentName": "MixedSetter",
                                      "isRequired": false,
                                      "props": {}
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "expanded",
                            "zh-CN": "expanded"
                          }
                        },
                        "name": "expanded",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
                          "initialValue": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "defaultExpanded",
                            "zh-CN": "defaultExpanded"
                          }
                        },
                        "name": "defaultExpanded",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
                          "initialValue": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "wrapper",
                            "zh-CN": "wrapper"
                          }
                        },
                        "name": "wrapper",
                        "setter": {
                          "componentName": "MixedSetter",
                          "props": {
                            "setters": [
                              {
                                "componentName": "StringSetter",
                                "isRequired": false,
                                "initialValue": ""
                              },
                              {
                                "componentName": "ObjectSetter",
                                "props": {
                                  "config": {
                                    "extraSetter": {
                                      "componentName": "MixedSetter",
                                      "isRequired": false,
                                      "props": {}
                                    }
                                  }
                                },
                                "isRequired": false,
                                "initialValue": {}
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isEllipsis",
            "zh-CN": "isEllipsis"
          }
        },
        "name": "isEllipsis",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "expanding",
            "zh-CN": "expanding"
          }
        },
        "name": "expanding",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClickExpand",
            "zh-CN": "onClickExpand"
          }
        },
        "name": "onClickExpand",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "setEditing",
            "zh-CN": "setEditing"
          }
        },
        "name": "setEditing",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "forceShowExpand",
            "zh-CN": "forceShowExpand"
          }
        },
        "name": "forceShowExpand",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Text",
    "screenshot": "",
    "schema": {
      "componentName": "Text",
      "props": {}
    }
  }
];

export default {
  ...TextMeta,
  snippets
};
