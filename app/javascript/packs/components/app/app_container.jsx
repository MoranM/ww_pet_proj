import React from 'react';
import style from './app_container.scss';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style["app-main-container"]}>
                test
            </div>
        )
    }
}

export default AppContainer;