interface MainTitles {
  children: string;
}

export const Title = ({ children }: MainTitles) => {
  return (
    <h2 className="mt-[40px] mb-6 text-lg font-bold leading-6">{children}</h2>
  );
};
