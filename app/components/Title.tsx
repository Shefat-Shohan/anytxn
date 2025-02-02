interface TitleType {
  subtitle: string;
  title?: string;
  classNames?: string;
}
export default function Title({ subtitle, title, classNames }: TitleType) {
  return (
    <div className={`${classNames}`}>
      <h2 className="font-sans_serif text-xs lg:text-[16px] font-bold lg:leading-6 text-[#1F80F0] tracking-widest uppercase text-center">
        {subtitle}
      </h2>
      <h1 className="font-sans_serif mt-6 font-semibold lg:text-[56px] lg:leading-[62px] text-[#0B305B] text-3xl leading-[38px] text-center">
        {title}
      </h1>
    </div>
  );
}
