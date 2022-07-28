import { PageLoaderContainer } from './PageLoaderElements';
import { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


const PageLoader = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)


    }, [])


    return (
        <>

            <PageLoaderContainer loading={loading}>
                <PacmanLoader color={'#01bf71'}
                    loading={loading}
                    // cssOverride={override}
                    size={60} />
            </PageLoaderContainer>

            {/* <div id="loader">
            </div> */}
        </>



    );
}

export default PageLoader;
