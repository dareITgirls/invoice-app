import { CircularProgress } from "@mui/material";
export const Loader = () => {

    return (
            <section className='flex flex-col items-center justify-center mt-20 gap-6 font-bold text-center md:mt-49.5 lg:mt-36 lg:gap-7'>
                <CircularProgress/>
                <h2 className='text-lg md:mt-10'>Loading invoices...</h2>
            </section>
    );
}

