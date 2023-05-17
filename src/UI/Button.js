export const Button = (props) => {

  return (
    <button className={`rounded-full py-4 px-3 text-md/1 ${props.classname}`} {...props}>{props.children}{props.title}</button>
  );
};