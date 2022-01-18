import { useRouter } from 'next/router'
import styles from "../styles/Toolbar.module.css"

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/football/1')}>Sport News</div>
            <div onClick={() => router.push('/localnews/1')}>Local News</div>
            <div onClick={() => window.location.href= 'https://twitter.com/ImDahDayo'}>Twitter</div>
        </div>
    )
}