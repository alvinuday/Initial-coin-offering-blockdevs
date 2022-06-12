export default function textBox(props) {
  return (
    <div className="border-dashed border-2 border-sky-500 text-center p-2 text-lg font-bold hover:opacity-70 cursor-pointer my-5">
      {props.text}
    </div>
  );
}
