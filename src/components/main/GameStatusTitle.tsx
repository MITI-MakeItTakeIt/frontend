interface GameStatusTitle {
  children: string;
}

export const GameStatusTitle = ({ children }: GameStatusTitle) => {
  return (
    <span className="p-[2px] w-[44px] rounded-[2px] text-[11px] font-semibold leading-[13px] bg-[#C1E1FF] text-[#4065F6]">
      {children}
    </span>
  );
};
