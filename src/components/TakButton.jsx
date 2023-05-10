import { Button } from 'antd';
import "../App.css"
import 'antd/dist/reset.css';




function TakButton() {
    return(
        <div className="button-container">

        <Button type='primary' shape="circle" className='tak'><h1> Tak!</h1> </Button>
</div>
    )
}

export default TakButton;