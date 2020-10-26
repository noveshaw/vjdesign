export default [
  {
    name: 'div',
    label: '层',
    icon: 'layer-group',
    description: '',
    group: 'Html',
    designer: 'container',
    properties: []
  },
  {
    name: 'form',
    label: '表单',
    icon: 'file-alt',
    designer: 'container',
    group: 'Html',
    properties: [
      { name: 'action', label: 'URL', group: '基础' },
      {
        name: 'method',
        label: '方法',
        group: '基础',
        editor: {
          name: 'select',
          options: {
            items: [
              { value: 'GET', label: 'GET' },
              { value: 'POST', label: 'POST' }
            ]
          }
        },
        default: 'POST'
      }
    ]
  },
  {
    name: 'p',
    label: '段落',
    icon: 'paragraph',
    group: 'Html',
    properties: ['fieldOptions.domProps.innerText']
  },
  {
    name: 'span',
    label: '文本',
    icon: 'font',
    group: 'Html',
    properties: ['fieldOptions.domProps.innerText']
  },

  {
    name: 'input',
    label: '输入',
    icon: 'i-cursor',
    group: 'Html',
    properties: [
      'fieldOptions.attrs.placeholder',
      'model',
      {
        name: 'fieldOptions.attrs.type',
        label: '类型',
        group: '基础',
        editor: {
          name: 'select',
          options: {
            items: [
              { value: 'text', label: '文本' },
              { value: 'number', label: '数字' }
            ]
          }
        },
        default: 'text'
      }
    ]
  },
  {
    name: 'textarea',
    label: '文本框',
    icon: 'textarea',
    group: 'Html',
    properties: [
      'fieldOptions.attrs.placeholder',
      'model',
      {
        name: 'fieldOptions.domProps.rows',
        label: '行数',
        group: '基础'
      }
    ]
  },
  {
    name: 'select',
    label: '选择',
    icon: 'drop-down',
    group: 'Html',
    designer: 'select',
    properties: ['model']
  },
  {
    name: 'a',
    label: '超链接',
    icon: 'link',
    group: 'Html',
    properties: [
      'fieldOptions.domProps.innerText',
      'fieldOptions.attrs.href',
      {
        name: 'fieldOptions.domProps.target',
        group: '基础',
        label: '目标',
        editor: {
          name: 'select',
          options: {
            items: [
              { value: '_blank', label: '空白页' },
              { value: '_self', label: '当前页' }
            ]
          }
        },
        default: '_self'
      }
    ]
  },
  { name: 'hr', label: '分割线', icon: 'form-item-separate', group: 'Html' },
  {
    name: 'button',
    label: '按钮',
    icon: 'button',
    group: 'Html',
    properties: ['fieldOptions.domProps.innerText', 'fieldOptions.on.click']
  },
  {
    name: 'img',
    label: '图片',
    icon: 'image',
    group: 'Html',
    properties: [
      { name: 'fieldOptions.attrs.src', group: '基础', label: 'URL' }
    ]
  },
  {
    name: 'style',
    label: '内部样式',
    icon: 'style',
    group: '引用',
    properties: [
      'fieldOptions.attrs.type',
      { name: 'fieldOptions.domProps.innerText', group: '基础', label: '内容' }
    ]
  },
  {
    name: 'link',
    label: '外部样式',
    icon: 'link',
    group: '引用',
    properties: [
      'fieldOptions.attrs.type',
      {
        name: 'fieldOptions.attrs.rel',
        group: '基础',
        label: 'rel',
        editor: {
          name: 'select',
          options: { items: [{ value: 'stylesheet', label: 'stylesheet' }] }
        },
        default: 'stylesheet'
      },
      'fieldOptions.attrs.href'
    ]
  },
  {
    name: 'script',
    label: '脚本',
    icon: 'scroll',
    group: '引用',
    properties: [
      {
        name: 'fieldOptions.attrs.type',
        group: '基础',
        label: 'type',
        editor: {
          name: 'select',
          options: {
            items: [{ value: 'text/javascript', label: 'text/javascript' }]
          }
        },
        default: 'text/javascript'
      },
      { name: 'fieldOptions.attrs.src', group: '基础', label: 'URL' },
      { name: 'fieldOptions.domProps.innerText', group: '基础', label: '内容' }
    ]
  }
]