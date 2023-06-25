import {useRef} from 'react'

export default function App () {
    const audio = useRef<HTMLAudioElement>(null)
    return <audio ref={audio}></audio>
}
//https://github.com/lgf196/JoL-player.git