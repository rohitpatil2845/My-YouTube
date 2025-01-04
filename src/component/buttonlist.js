import React from 'react'
import Button from './button';

const buttonlist = () => {
  return (
    <div className='flex'>
      <Button  name="All"/>
      <Button  name="Movies"/>
      <Button  name="Music"/>
      <Button  name="News"/>
      <Button  name="Live"/>
      <Button  name="Shorts"/>
      <Button  name="India"/>
      <Button  name="Study"/>
      <Button  name="Cricket"/>
      <Button  name="Cooking"/>
      <Button  name="Gmaing"/>
      <Button  name="Sports"/>
    </div>
  );
};

export default buttonlist;