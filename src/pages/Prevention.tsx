import Prevent from "../prevention/prevent"


const Prevention = () => {
    const sectionsData = [
        {
            title: 'First Title',
            description: 'This is the first description.',
            image: "/img/logo.png"
        },
        {
            title: 'Second Title',
            description: 'This is the second description.',
            image: "/img/logo.png"
        },
        // Add more sections as needed
    ];

    return (
        <div> <Prevent sections={sectionsData} /></div>
    )
}

export default Prevention
