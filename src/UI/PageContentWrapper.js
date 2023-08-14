export const PageContentWrapper = (props) => {

    return (
        // eslint-disable-next-line react/prop-types
        <div className={`flex flex-col lg:flex-row relative lg:justify-center ${props.styles}`} {...props}>{props.children}</div>
    );
};
