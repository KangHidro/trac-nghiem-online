export class SystemConstant {
  public static CURRENT_USER = 'CURRENT_USER';
  public static CURRENT_USER_INFO = 'CURRENT_USER_INFO';
  public static CURRENT_USER_GOOGLE = 'CURRENT_USER_GOOGLE';

  public static ACTION = {
    ADD: 'add',
    EDIT: 'edit',
    DELETE: 'delete',
    VIEW: 'view',
  };

  public static ROLE = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_THI_SINH',
  };

  public static CkEditorCfg = {
    toolbar: {
      items: [
        'heading',
        '|',
        'alignment',
        'bold',
        'italic',
        'underline',
        'link',
        'bulletedList',
        'numberedList',
        'fontBackgroundColor',
        'fontColor',
        'fontSize',
        '|',
        'outdent',
        'indent',
        '|',
        'imageInsert',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'MathType',
        'ChemType',
        'subscript',
        'superscript',
        'strikethrough'
      ]
    },
    language: 'vi',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side',
        'linkImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    },
    licenseKey: '',
  };

}
