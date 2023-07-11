export const Button = (props) => {

  return (
    <button className={`rounded-full mt-4 pt-3.3 pb-4 px-4 text-md/1 md:px-6 ${props.styles}`} {...props}>{props.children}{props.title}</button>
  );
};