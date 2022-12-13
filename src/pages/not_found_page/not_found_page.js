import { MetaTags } from "react-meta-tags";
import Lottie from 'react-lottie';
import * as developerAnimation from '../../assets/json/404.json'

export default function NotFound() {
    return <div id="notfoundtext">


        <MetaTags>
            <title>404 Not found | Paras Rai</title>
        </MetaTags>
        <Lottie options={{
            loop: true,
            autoplay: true,



            animationData: developerAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }}
            isPaused={false}
            height={300}
            width={300}
        />
        PAGE NOT FOUND
    </div>
}