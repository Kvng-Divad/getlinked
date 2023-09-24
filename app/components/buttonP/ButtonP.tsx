

type buttonProps = {
    title: string;
    events: any;
  };

export default function ButtonP ({title, events}: buttonProps) {
  return (
    <button className="flex justify-center px-8 py-2 text-center text-gray p3-regular bg-button rounded-sm" onClick={events}>
        {title}
    </button>
  )
}
