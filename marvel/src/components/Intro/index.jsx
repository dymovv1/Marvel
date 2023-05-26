import styles from "./intro.module.scss"
import videoMarvel from "../../assets/video/videomarvel1.mp4"

function Intro() {
    return(
<div className={styles['intro']}>
    <video autoPlay muted loop className={styles['intro-video']} src={videoMarvel}></video>
</div>
    )

}

export default Intro;