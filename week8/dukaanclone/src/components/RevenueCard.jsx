import Button from '@mui/material/Button';

export const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
    return <div className="bg-white rounded shadow-md ">
        <div className="p-4 rounded-lg flex justify-between">
            <div className="text-gray-700 flex gap-1 ">
                <div className="text-sm  ">
                    {title}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

            </div>
            <div >
                <Button variant="contained" color="success">
                    Success
                </Button>
            </div>
        </div>


        <div className="flex justify-between p-3">
            <div className="font-bold text-2xl ">
                ₹{amount}

            </div>
            {orderCount ? <div className="flex">
                <div className="text-blue-800 flex underline ">
                    {orderCount} order(s)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>



            </div> :
                null}
        </div>



    </div>
}