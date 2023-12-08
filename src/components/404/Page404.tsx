import "/src/styles/404.scss";
import TetrisGameBoard from "./TetrisGameBoard.tsx";
const Page404 = () => {
    return (
        <div className="container">
            <div className="canva">
                <TetrisGameBoard />
            </div>
        </div>
    );
};

export default Page404;