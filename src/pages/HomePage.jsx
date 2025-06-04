import { useEffect } from "react";
import { useAlert } from "../contexts/AlertContext";
// console.log("useAlert in pagina Homepage", useAlert);


export default function HomePage () {

    const { showAlert, hideAlert } = useAlert();
    // console.log("showAlert in pagina Homepage", showAlert);
    // console.log("hideAlert in pagina Homepage", hideAlert);


    useEffect(() => {
        // console.debug("Home caricata");
        showAlert("Hai aperto la home", "success");

        // ! ATTENZIONE
        // ? SENZA IL RETURN QUA SOTTO L'ALERT RIMANE ANCHE AL CAMBIO PAGINA
        return () => {
            // console.debug("Home rimossa");
            hideAlert();
        };
    }, [])


    return (
        <main>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">
                            Homepage
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};