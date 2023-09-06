export const Button = (props) => {

  let baseStyles = "rounded-full p-4 text-md/1 md:px-6 focus:outline-none focus:border-primary-100 focus:border-2 transition duration-300"
  let buttonStyles;
  if(props.variant === "primary") {
    buttonStyles = `${baseStyles} bg-primary-200 text-white hover:bg-danger-100`;
  } else if (props.variant === "neutral") {
    buttonStyles = `${baseStyles} bg-neutral-100 text-neutral-500 dark:bg-dark-100 dark:text-white hover:bg-neutral-200`;
  } else if (props.variant === "warning") {
    buttonStyles = `${baseStyles} bg-red-500 text-white hover:bg-danger-50`;
  } else if (props.variant === "neutral-dark") {
    buttonStyles = `${baseStyles} bg-dark-500 text-neutral-300 dark:bg-dark-200 dark:text-neutral-200 hover:bg-dark-600`;
  } else if (props.variant === "disabled") {
    buttonStyles = `${baseStyles} bg-neutral-300 text-white`
  }


  return (
      // eslint-disable-next-line react/prop-types
    <button className={`${props.styles} ${buttonStyles}`} {...props}>{props.children}{props.title}</button>
  );
};