export class SystemConstant {
  public static CURRENT_USER = 'CURRENT_USER';
  public static CURRENT_USER_INFO = 'CURRENT_USER_INFO';
  public static CURRENT_USER_GOOGLE = 'CURRENT_USER_GOOGLE';
  public static CURRENT_ADMIN = 'CURRENT_ADMIN';
  public static CURRENT_ADMIN_INFO = 'CURRENT_ADMIN_INFO';

  public static ACTION = {
    ADD: 'add',
    EDIT: 'edit',
    DELETE: 'delete',
    VIEW: 'view',
  };

  public static ROLE = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
  };

  public static CkEditorCfg = {
    toolbar: [
      'heading',
      'removeFormat',
      'fontFamily',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'alignment',
      '|',
      'imageInsert',
      'insertTable',
      'mediaEmbed',
      'bulletedList',
      'numberedList',
      'link',
      '|',
      'indent',
      'outdent',
      '|',
      'subscript',
      'superscript',
      'strikethrough',
      'code',
      'codeBlock',
      'exportPdf',
      'exportWord'
    ],
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
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
    }
  };

}
