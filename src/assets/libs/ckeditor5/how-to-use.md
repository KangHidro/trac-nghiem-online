Note: CkE 5 has no view source option. For this, using CkE 4.

1. Using online builder and generate custom build, then Download it: https://ckeditor.com/ckeditor-5/online-builder

2. Extract it to assets/libs/ckeditor5

3. npm install --save @ckeditor/ckeditor5-angular

4. import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

5. Open tsconfig.json, add to "compilerOptions" two option:
"allowJs": true,
"allowSyntheticDefaultImports": true,

6. In Component where using CkE5,
import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';
...
editor = Editor;

// You can copy your ordered list from src\assets\libs\ckeditor5\sample\index.html
// And can save to SystemConstant
cfgEditor = {
    fontNames: ['Arial', 'Times New Roman', 'Courier New', 'sans-serif'],
    placeholder: '',
    tabsize: '2',
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
  }
  
7. In HTML:
<ckeditor [config]="cfgEditor" [editor]="editor" formControlName="controlName"></ckeditor>

8. Warning: Using custom builder DO NOT include watchDog module!
