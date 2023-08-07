export const MainContentWrapper = (props) => {

    return (
        // eslint-disable-next-line react/prop-types
        <main className={`px-6 md:px-12 pt-8 md:pt-15 lg:pt-[72px] lg:ml-4 lg:px-0 ${props.styles}`} {...props}>{props.children}</main>
    );
};

