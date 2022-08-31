import React from 'react';
import { Logotipo } from '../../UI/Logotipo/Logotipo';
import { TitleOne } from '../../UI/TitleOne/TitleOne';

export const Header = () => {
  return (
    <div className='header'>
        <Logotipo/>
        <TitleOne/>
    </div>
  )
}

