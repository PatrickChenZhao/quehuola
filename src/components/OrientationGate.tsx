import type { PropsWithChildren } from 'react';
import { RotateCcw } from 'lucide-react';

export default function OrientationGate({ children }: PropsWithChildren) {
  return (
    <>
      <div className="rotate-hint">
        <div className="rotate-card">
          <div className="phone-icon" aria-hidden="true">
            <RotateCcw size={24} strokeWidth={2.4} />
          </div>
          <h1>请将手机横屏使用缺货啦</h1>
          <p>横屏后自动进入</p>
        </div>
      </div>
      <main className="landscape-shell">{children}</main>
    </>
  );
}
