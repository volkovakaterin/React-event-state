import React from 'react';
import PropTypes from'prop-types';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

function IconSwitch(props) {
    const icon = props.icon;
    const onSwitch = props.onSwitch
    return (
        <>
        {console.log(icon)}
<div className = {icon} onClick={(e)=>onSwitch(icon, e)}>

    {(icon === 'view_list') ? <ViewListIcon/> : <ViewModuleIcon/>}
</div>
  </>
        
    )
}

IconSwitch.propTypes = {};
    export default IconSwitch;