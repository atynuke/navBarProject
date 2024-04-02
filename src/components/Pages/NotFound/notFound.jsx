import { Link } from "react-router-dom";
// import {image} from './src/assets/notfound.jpg'


export default function NotFound() {
    return (
        <Link>
            <div style={{ textAlign: "center" }}>
                {/* <img src={image} alt="" /> */}
                <h1>Ooops, Page Not found </h1>

                <h2>
                    the page you are looking for could not be found or it have been removed,<br />
                    renamed or did not exist in the first place. <br />
                    try again.....
                </h2>

            </div>

        </Link>
    )
}