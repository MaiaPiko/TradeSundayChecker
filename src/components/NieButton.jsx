import { Button } from 'antd';
import "../App.css"
import 'antd/dist/reset.css';




function NieButton() {
    return(
        <div className="button-container">

        <Button type='primary' shape="circle" className='nie'> <h1>Nie!</h1></Button>
</div>
    )
}

export default NieButton;