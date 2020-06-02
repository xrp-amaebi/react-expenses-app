// Higher Order Components (HOC)

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminRigths = (WrappedComponent) => ( (props) => (
    <div>
       {props.isAdmin &&  <p>
            you are being watched, please dont share Human.
        </p>}
        <WrappedComponent {...props} />
    </div> )
);

// require Authentication 
const requireAuth = (Component) => ( (props) => (
    <div>
        {props.isAuth ? <Component {...props } /> : <p>Please Log In to view the "Component"</p>  } 
        
    </div> )

);
 
const AdminInfo = withAdminRigths(Info);  
const AuthInfo = requireAuth(Info);  

ReactDOM.render(<AuthInfo isAuth={true} info="This user has logged in."  />, document.getElementById('app'));

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are details"  />, document.getElementById('app'));