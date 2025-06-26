
import axios from "axios";


// making components async
export default async function User() {

    const response = await axios.get('')

    // if async function takes time, loader will be rendered 
    const data = response.data;

    console.log('hi');
    

    return (
        <div>
            Users page
            {data.name}
        </div>
    );
}