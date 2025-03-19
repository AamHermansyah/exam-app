'use client'

import { forwardRef, useState } from 'react';
import { Input } from '../ui/input';
import { Eye, EyeOff } from 'lucide-react';

const InputPassword = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    const [isOpenEye, setIsOpenEye] = useState(false);

    return (
      <div className="relative">
        <Input
          type={isOpenEye ? 'text' : 'password'}
          className={className}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          className="absolute top-[50%] -translate-y-[50%] right-[1.5px] p-1.5 bg-transparent text-neutral-600 rounded-full"
          onClick={() => setIsOpenEye((prev) => !prev)}
        >
          {isOpenEye ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    )
  }
)

InputPassword.displayName = "InputPassword"

export default InputPassword;