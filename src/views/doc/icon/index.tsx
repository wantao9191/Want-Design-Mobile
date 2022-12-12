import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Icon = defineComponent({
    props: {},
    setup(props, context) {
        console.log()
        // navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } }).then(stream => {
        //     console.log(stream)
        //     const video = document.querySelector('video') as HTMLVideoElement
        //     console.log(video)
        //     video.srcObject = stream
        //     video.onloadedmetadata = function (e) {
        //         video.play();
        //     };
        // })
        return () => (
            <div class={'demo-container'}>
                <h1>Icon 图标</h1>
                <h3>图标列表</h3>
                <video ></video>
            </div>
        )
    }
})