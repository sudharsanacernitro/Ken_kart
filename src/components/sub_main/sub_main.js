    import React, { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import './sub_main.css';
    import Header from '../base_components/header';
    import { useLocation } from 'react-router-dom';
    import Main from './single_card';

    function Sub_main()
    {
        const {state} = useLocation();
        const { category, brand } = state;
        console.log(category,brand);
        return(<>
        <Header/>
        <Main  id={brand}/>
        </>);
    }


    export default Sub_main;