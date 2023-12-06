import React from 'react'

import { Button, Img, Text } from 'components'

import { handleSectionNavigation } from 'utils'

const Navbar = props => {
  return (
    <>
      <header className={props.className}>
        <div className='flex flex-row  items-center justify-between w-full'>
          <div className='p-2'>
            <Img
              className=' h-[48px] w-auto sm:h-[40px] '
              src='public/images/mamapesa.png'
              alt='column'
            />
          </div>
          <ul className='flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list'>
            <li>
              <a href='javascript:' className='text-base text-black-900'>
                <Text size='txtLatoRegular16'>{props?.nav1}</Text>
              </a>
            </li>
            <li>
              <a className='text-base text-black-900'>
                <Text
                  className='common-pointer'
                  size='txtLatoRegular16'
                  onClick={() => {
                    handleSectionNavigation('block3')
                  }}
                >
                  {props?.nav2}
                </Text>
              </a>
            </li>
            <li>
              <a className='text-base text-black-900'>
                <Text
                  className='common-pointer'
                  size='txtLatoRegular16'
                  onClick={() => {
                    handleSectionNavigation('block2')
                  }}
                >
                  {props?.nav3}
                </Text>
              </a>
            </li>
          </ul>
          <Button
            className='!rounded-[20px] cursor-pointer font-roboto min-w-[97px] md:rounded-[16px] text-base text-center'
            shape='square'
            color='purple_800'
            size='xxs'
            variant='fill'
          >
            {props?.btn}
          </Button>
        </div>
      </header>
    </>
  )
}

Navbar.defaultProps = {
  nav1: 'About Us',
  nav2: 'Services',
  nav3: 'Contact Us',
  btn: 'Get App'
}

export default Navbar
