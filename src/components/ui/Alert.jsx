import { useAlert } from "../../contexts/AlertContext"
// console.log("useAlert in componente Alert", useAlert)


export default function Alert () {

    const { data, hideAlert } = useAlert();
    // console.log("data in componente Alert", data);
    // console.log("hideAlert in componente Alert", hideAlert);

    if (!data.show) return <></>;


    return (
        <>
            <div className="container mt-3">
                {
                    data.show && 
                    (
                        <div className={`alert alert-${data.type} mb-0 d-flex align-items-center justify-content-between`}>
                            {data.text}

                            <button onClick={hideAlert} type="button" className="btn btn-close"></button>
                        </div>
                    )
                }
            </div>
        </>
    )
}