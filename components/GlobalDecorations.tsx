'use client';

export const GlobalDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden">
      <div 
        className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-white/30 blur-[100px]" 
      />
      <div
        className="absolute right-[-140px] top-32 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[90px]"
      />
      <div
        className="absolute bottom-[-180px] left-[-120px] h-[460px] w-[460px] rounded-full bg-emerald-600/12 blur-[100px]"
      />
    </div>
  );
};
