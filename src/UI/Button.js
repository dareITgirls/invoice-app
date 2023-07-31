export const Button = (props) => {

  return (
      // eslint-disable-next-line react/prop-types
    <button className={`rounded-full p-4 text-md/1 md:px-6 ${props.styles}`} {...props}>{props.children}{props.title}</button>
  );
};