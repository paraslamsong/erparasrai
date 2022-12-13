
import Lottie from 'react-lottie';
import { MetaTags } from 'react-meta-tags';
import * as loadingAnimation from '../assets/json/loading.json'
export function Loading() {
    return <div style={{
        width: "100vw",
        height: "100%",
        display: "flex",
        alignItems: "stretch"
    }}>

        <MetaTags>
            <title>Loading | Paras Rai</title>
        </MetaTags>


        <div className='d-flex align-items-center' style={{
            width: "100vw",
            height: "100%"
        }}>
            <Lottie

                options={{
                    loop: true,
                    autoplay: true,
                    animationData: loadingAnimation,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                height={150}
                width={260}
            />
        </div >
    </div>
}