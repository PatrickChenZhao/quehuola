interface AreaHeaderProps {
  title: string;
}

export default function AreaHeader({ title }: AreaHeaderProps) {
  return (
    <header className="area-header">
      <div className="brand-mark">缺</div>
      <h1>{title}</h1>
    </header>
  );
}
