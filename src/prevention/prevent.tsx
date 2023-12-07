
import  styles from './prevent.module.scss';

interface PreventProps {
    title: string
    contents: string[]
    imgs: string[]
}


const Prevent = (
    {
        title,
        contents,
        imgs
    }: PreventProps
    ) => {
return (
<body className={styles.preventBody}>
    <header>
    </header>
    <div className={styles.preventDisplay}>

    <h1 className={styles.preventTitle}>{title}</h1>
    {contents.map((content, index) => (
        <div key={index} className={styles.preventContent}>
            <p>{content}</p>
            <img className={styles.preventImg} src={imgs[index]} alt="image" />
        </div>
        ))}
    </div>
</body>
)
}

export default Prevent