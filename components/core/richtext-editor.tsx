'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { Highlighter } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChangeValue: (value: string) => void;
  className?: string;
}

export function RichTextEditor({ value, onChangeValue, className }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      TextStyle,
      Color,
      Link,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChangeValue(html);
    },
  });

  // Sync initial value if `value` changes from parent
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const buttonClassName =
    'size-7 flex items-center justify-center border rounded text-muted-foreground';

  if (!editor) return null;

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={cn(buttonClassName, editor.isActive('bold') && 'text-primary')}
        >
          <FaBold className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={cn(buttonClassName, editor.isActive('italic') && 'text-primary')}
        >
          <FaItalic className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={cn(buttonClassName, editor.isActive('underline') && 'text-primary')}
        >
          <FaUnderline className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={cn(
            buttonClassName,
            editor.isActive('highlight') ? 'bg-yellow-200 text-black' : '',
          )}
        >
          <Highlighter className="text-yellow-500 w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={cn(buttonClassName, editor.isActive('heading', { level: 1 }) && 'text-primary')}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={cn(buttonClassName, editor.isActive('heading', { level: 2 }) && 'text-primary')}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={cn(buttonClassName, editor.isActive({ textAlign: 'left' }) && 'text-primary')}
        >
          <FaAlignLeft className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={cn(buttonClassName, editor.isActive({ textAlign: 'center' }) && 'text-primary')}
        >
          <FaAlignCenter className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={cn(buttonClassName, editor.isActive({ textAlign: 'right' }) && 'text-primary')}
        >
          <FaAlignRight className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={cn(buttonClassName, editor.isActive('bulletList') && 'text-primary')}
        >
          <FaListUl className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={cn(buttonClassName, editor.isActive('orderedList') && 'text-primary')}
        >
          <FaListOl className="w-3 h-3" />
        </button>
      </div>

      <div className="border rounded p-4">
        <EditorContent editor={editor} className={cn('tip-tap', className)} />
      </div>
    </div>
  );
}
