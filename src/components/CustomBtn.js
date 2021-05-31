import React from 'react'
import {Button} from '@material-ui/core';

function CustomBtn(props) {
    return (
        <Button variant="contained" ><a  class="nav-link" href="https://www.paypal.com" >{props.txt}</a></Button>
    )
}

export default CustomBtn
