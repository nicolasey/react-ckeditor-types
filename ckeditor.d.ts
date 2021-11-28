declare module '@ckeditor/ckeditor5-react' {
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import Event from '@ckeditor/ckeditor5-utils/src/eventinfo'
  import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig'
  import Context from '@ckeditor/ckeditor5-core/src/context'
  import * as React from 'react';
  const CKEditor: React.FunctionComponent<{
      disabled?: boolean;
      editor: typeof ClassicEditor;
      data?: string;
      id?: string;
      config?: EditorConfig;
      onReady?: (editor: ClassicEditor) => void;
      onChange?: (event: Event, editor: ClassicEditor) => void;
      onBlur?: (event: Event, editor: ClassicEditor) => void;
      onFocus?: (event: Event, editor: ClassicEditor) => void;
      onError?: (event: Event, editor: ClassicEditor) => void;
  }>
  

  export enum EditorPhase { "runtime", "initialization" }

  const CKEditorContext: React.Context<{
    context: typeof Context
    config: any
    id: any
    isLayoutReady?: boolean
    onReady?: (context: typeof Context) => void;
    onError?: (error: Error, errorDetails: { phase: EditorPhase, willContextRestart: boolean }) => void
  }>

  export { CKEditor, CKEditorContext };
}